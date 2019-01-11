import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Image, StyleSheet, Text } from "react-native";
import { Color } from "../../common/Colors";
import { AppFont } from "../../common/Fonts";

export default class ItemCell extends PureComponent {
    static propTypes = {
        info: PropTypes.object.isRequired,
        onTouch: PropTypes.func.isRequired,
        containerWidth: PropTypes.any
    };

    static defaultProps = {
        containerWidth: "50%"
    };

    render() {
        const containerStyle = { width: this.props.containerWidth }
        return (
            <TouchableHighlight onPress={this.props.onTouch} underlayColor={'transparent'} style={[styles.container, containerStyle]} >
                <View style={styles.subContainer}>
                    <View style={styles.imageViewContainer}>
                        <Image style={styles.imageViewStyle} source={this.props.info.image} />
                    </View>
                    <View style={styles.detailView}>
                        <Text style={styles.priceTextStyle}>{this.props.info.price}</Text>
                        <Text style={styles.detailsTextStyle}>{this.props.info.name}</Text>
                    </View>
                </View>
            </TouchableHighlight>);
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    subContainer: {
    },
    imageViewContainer: {
        width: "100%",
        height: 200,
        borderRadius: 5,
        overflow: "hidden"
    },
    imageViewStyle: {
        width: "105%",
        height: "105%",
        resizeMode: "cover"
    },
    detailView: {
        height: 50
    },
    priceTextStyle: {
        marginVertical: 10,
        fontSize: AppFont.titleMedium.size,
        fontFamily: AppFont.titleMedium.name,
        fontWeight: AppFont.titleMedium.weight,
        color: Color.darkText
    },
    detailsTextStyle: {
        fontSize: AppFont.titleMedium.size,
        fontFamily: AppFont.titleMedium.name,
        fontWeight: AppFont.titleMedium.weight,
        color: Color.darkText
    }
});
