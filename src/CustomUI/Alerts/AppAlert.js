import React, { Component } from 'react'
import {
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native'

import { Color } from '../../common/Colors'
import { AppFont } from '../../common/Fonts'

export default AppAlert = function (props) {

    let showAlert = props.showAlert
    var titleText = (props.title) ? <Text style={styles.titleText}>{props.title}</Text> : null
    var messageText = (props.message) ? <Text style={styles.messageText}>{props.message}</Text> : null
    let caller = props.callerView
    let style = styles.alertButtonTitle
    let callback = props.onAlertButtonTap

    var firstButton = alertButton('OK', style, caller, callback)

    return (
        <Modal transparent={true} animationType={'none'} visible={showAlert}
            onRequestClose={() => { console.log('Modal closed') }}>
            <View style={styles.modalBackground}>
                <View style={styles.alertViewWrapper}>
                    {titleText}
                    {messageText}
                    {firstButton}
                </View>
            </View>
        </Modal>
    )
}

function alertButton(title, textStyle, callerView, callback) {
    return (
        title ? (
            <TouchableHighlight onPress={() => {
                if (callback) {
                    callback()
                    return
                }

                callerView.setState({ showAppAlert: false })
                setTimeout(() => {
                    callerView.setState({ isLoading: false })
                }, 100)
            }}
                underlayColor={Color.themeBackground}>
                <View style={styles.alertButtonView}>
                    <Text style={textStyle}>{title}</Text>
                </View>
            </TouchableHighlight>
        ) : null
    )
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
    },
    alertViewWrapper: {
        backgroundColor: Color.themeBackground,
        width: 280,
        borderRadius: 10,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    titleText: {
        marginTop: 15,
        marginHorizontal: 15,
        textAlign: 'center',
        fontSize: AppFont.titleBold.size,
        fontFamily: AppFont.titleBold.name,
        fontWeight: AppFont.titleBold.weight,
        color: Color.darkText
    },
    messageText: {
        marginTop: 15,
        marginHorizontal: 15,
        textAlign: 'center',
        fontSize: AppFont.title.size,
        fontFamily: AppFont.title.name,
        fontWeight: AppFont.title.weight,
        color: Color.darkText
    },
    alertButtonView: {
        marginTop: 15,
        width: 280,
    },
    alertButtonTitle: {
        margin: 10,
        textAlign: 'center',
        fontSize: AppFont.titleBold.size,
        fontFamily: AppFont.titleBold.name,
        fontWeight: AppFont.titleBold.weight,
        color: Color.actionTint
    }
})