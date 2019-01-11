import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Image, StyleSheet, Text, FlatList } from "react-native";
import { Color } from "../../common/Colors";
import { AppFont } from "../../common/Fonts";
import { Icons } from "../../common/Assets";
import Routes from "../../Navigation/Routes"
import ItemHeaderView from "./ItemHeaderView";
import { FavoriteItems, ImageScrollers } from "../../common/Constants";
import ImageScrollerCell from "../Cells/ImageScrollerCell";

export default class ImageScrollerView extends PureComponent {
    static propTypes = {
        data: PropTypes.array,
        navigation: PropTypes.object.isRequired
    };

    static defaultProps = {
        data: []
    }

    state = {
        flatListWidth: 300,
        viewedIndex: 0,
    }

    renderItem = this.renderItem.bind(this)
    handleViewableItemsChanged = this.handleViewableItemsChanged.bind(this)

    onTouchCategory(item) {
    }

    handleViewableItemsChanged(info) {
        if (info.viewableItems[0] != null) {
            let indexValue = info.viewableItems[0].index
            this.setState({ viewedIndex: indexValue })
        }
    }

    render() {
        return (
            <View style={styles.containerView}>
                <FlatList
                    extraData={this.state}
                    data={this.props.data}
                    pagingEnabled={true}
                    onLayout={(event) => {
                        this.setState({
                            flatListWidth: event.nativeEvent.layout.width
                        })
                    }}
                    horizontal={true}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.id}
                    showsHorizontalScrollIndicator={false}
                    onViewableItemsChanged={this.handleViewableItemsChanged}
                />
                {this.renderPointView()}
            </View>
        )
    }

    renderItem({ item }) {
        return (
            <ImageScrollerCell info={item} width={this.state.flatListWidth} onTouch={() => { this.onTouchCategory(item) }} />
        )
    }

    renderPointView() {
        return (
            <View style={styles.pointContainer}>
                {this.renderPoint()}
            </View>
        )
    }

    renderPoint() {
        return ImageScrollers.map((image, i) => {
            let customStyle = (this.state.viewedIndex == i ) ? {} : { tintColor: Color.themeBackground }
            return (
                <Image key={image.id}
                    style={[styles.pointStyle, customStyle]}
                    source={Icons.dot} />
            )
        })
    }

}

const styles = StyleSheet.create({
    containerView: {
        padding: 20
    },
    pointContainer: {
        position: "absolute",
        paddingTop: 5,
        justifyContent: "center",
        bottom: 0,
        width: "100%",
        height: 50,
        left: 20,
        flexDirection: "row"
    },
    pointStyle: {
        margin: 5
    }
})   