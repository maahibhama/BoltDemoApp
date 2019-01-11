import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ReactNative, {
    Keyboard,
    NativeModules,
    ScrollView
} from 'react-native'

const ScrollViewManager = NativeModules.ScrollViewManager

export default class ManageKeyboardScrollView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            keyboardHeight: 0
        }
    }

    componentWillMount() {
        this.keyboardEventListeners = [
            Keyboard.addListener('keyboardWillShow', this.onKeyboardWillShow),
            Keyboard.addListener('keyboardWillHide', this.onKeyboardWillHide)
        ]
    }

    componentDidMount() {
        if (this.keyboardAwareView && this.props.startScrolledToBottom) {
            this.scrollToBottom(false)
            setTimeout(() => {
                this.keyboardAwareView.setNativeProps({ opacity: 1 })
            }, 100)
        }
    }

    componentWillUnmount() {
        this.keyboardEventListeners.forEach((eventListener) => {
            eventListener.remove()
        })
    }

    onKeyboardAwareViewLayout = (layout) => {
        this.keyboardAwareView.layout = layout
        this.keyboardAwareView.contentOffset = { x: 0, y: 0 }
        this.updateKeyboardAwareViewContentSize()
    }

    onKeyboardAwareViewScroll = (contentOffset) => {
        this.keyboardAwareView.contentOffset = contentOffset
        this.updateKeyboardAwareViewContentSize()
    }

    updateKeyboardAwareViewContentSize = () => {
        if (ScrollViewManager && ScrollViewManager.getContentSize) {
            let nodeHandle = ReactNative.findNodeHandle(this.keyboardAwareView)
            ScrollViewManager.getContentSize(nodeHandle, (res) => {
                if (this.keyboardAwareView) {
                    this.keyboardAwareView.contentSize = res
                    if (this.state.scrollBottomOnNextSizeChange) {
                        this.scrollToBottom()
                        this.state.scrollBottomOnNextSizeChange = false
                    }
                }
            })
        }
    }

    scrollToFocusedTextInput = () => {
        if (this.props.getTextInputRefs) {
            const textInputRefs = this.props.getTextInputRefs()
            textInputRefs.some((textInputRef, index, array) => {
                const isFocusedFunc = textInputRef.isFocused()
                const isFocused = isFocusedFunc && (typeof isFocusedFunc === "function") ? isFocusedFunc() : isFocusedFunc
                if (isFocused) {
                    let scrollResponder = this.keyboardAwareView.getScrollResponder()
                    scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
                        ReactNative.findNodeHandle(textInputRef),
                        this.props.scrollToInputAdditionalOffset,
                        true
                    )
                }
                return isFocused
            })
        }
    }

    onKeyboardWillShow = (event) => {
        this.scrollToFocusedTextInput()

        const newKeyboardHeight = event.endCoordinates.height
        if (this.state.keyboardHeight === newKeyboardHeight) {
            return
        }

        this.setState({ keyboardHeight: newKeyboardHeight })

        if (this.props.scrollToBottomOnKeyboardShow) {
            this.scrollToBottom()
        }
    }

    onKeyboardWillHide = (event) => {
        const keyboardHeight = this.state.keyboardHeight
        this.setState({ keyboardHeight: 0 })

        const hasYOffset = this.keyboardAwareView && this.keyboardAwareView.contentOffset && this.keyboardAwareView.contentOffset.y !== undefined
        const yOffset = hasYOffset ? Math.max(this.keyboardAwareView.contentOffset.y - keyboardHeight - 50, 0) : 0
        this.keyboardAwareView.scrollTo({ x: 0, y: yOffset, animated: true })
    }

    scrollBottomOnNextSizeChange = () => {
        this.state.scrollBottomOnNextSizeChange = true
    }

    scrollToBottom = (scrollAnimated = true) => {
        if (this.keyboardAwareView) {

            if (!this.keyboardAwareView.contentSize) {
                setTimeout(() => {
                    this.scrollToBottom(scrollAnimated)
                }, 50)
                return
            }

            const bottomYOffset = this.keyboardAwareView.contentSize.height - this.keyboardAwareView.layout.height + this.keyboardAwareView.props.contentInset.bottom
            this.keyboardAwareView.scrollTo({ x: 0, y: bottomYOffset, animated: scrollAnimated })
        }
    }

    scrollTo(options) {
        if (this.keyboardAwareView) {
            this.keyboardAwareView.scrollTo(options)
        }
    }

    render() {
        return (
            <ScrollView {...this.props} {...this.style}
                contentInset={{ bottom: this.state.keyboardHeight }}
                ref={(r) => { this.keyboardAwareView = r }}
                onLayout={(layoutEvent) => {
                    this.onKeyboardAwareViewLayout(layoutEvent.nativeEvent.layout)
                }}
                onScroll={(event) => {
                    this.onKeyboardAwareViewScroll(event.nativeEvent.contentOffset)
                    if (this.props.onScroll) {
                        this.props.onScroll(event)
                    }
                }}
                onContentSizeChange={() => { this.updateKeyboardAwareViewContentSize() }}
                scrollEventThrottle={200}
            />
        )
    }
}


ManageKeyboardScrollView.propTypes = {
    startScrolledToBottom: PropTypes.bool,
    scrollToBottomOnKeyboardShow: PropTypes.bool,
    scrollToInputAdditionalOffset: PropTypes.number,
    getTextInputRefs: PropTypes.func,
    onScroll: PropTypes.func
}


ManageKeyboardScrollView.defaultProps = {
    startScrolledToBottom: false,
    scrollToBottomOnKeyboardShow: false,
    scrollToInputAdditionalOffset: 75,
    getTextInputRefs: () => {
        return []
    }
}