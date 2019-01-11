import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Image, StyleSheet, Text } from "react-native";
import { Color } from "../../common/Colors";
import { AppFont } from "../../common/Fonts";
import { Icons } from "../../common/Assets";

export default class PaymentPricingView extends PureComponent {
    static propTypes = {
        subtotal: PropTypes.string,
        discount: PropTypes.string,
        shipping: PropTypes.string,
        total: PropTypes.string
    };

    static defaultProps = {
        subtotal: "$0",
        discount: "0%",
        shipping: "$0",
        total: "$0"
    }

    titlePricingView({ title, value, titleStyle = {} }) {
        return (
            <View style={styles.titlePriceContainer}>
                <Text style={[styles.titleTextStyle, titleStyle]}>{title}</Text>
                <Text style={styles.valueTextStyle}>{value}</Text>
            </View>
        )
    }

    render() {
        return (
            <TouchableHighlight onPress={this.props.onTouch} underlayColor={'transparent'}>
                <View style={styles.container}>
                    {this.titlePricingView({ title: "Subtotal", value: this.props.subtotal })}
                    {this.titlePricingView({ title: "Discount", value: this.props.discount })}
                    {this.titlePricingView({ title: "Shipping", value: this.props.shipping })}
                    <View style={styles.lineView} />
                    {this.titlePricingView({ title: "Total", value: this.props.total, titleStyle: { color: Color.darkText } })}
                </View>
            </TouchableHighlight>)
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    titlePriceContainer: {
        paddingBottom: 15,
        flexDirection: "row"
    },
    titleTextStyle: {
        fontSize: AppFont.titleLarge.size,
        fontFamily: AppFont.titleLarge.name,
        fontWeight: AppFont.titleLarge.weight,
        color: Color.lightText
    },
    valueTextStyle: {
        flex: 1,
        textAlign: "right",
        fontSize: AppFont.titleLarge.size,
        fontFamily: AppFont.titleLarge.name,
        fontWeight: AppFont.titleLarge.weight,
        color: Color.darkText
    },
    lineView: {
        height: 1,
        backgroundColor: Color.brightBorder,
        marginBottom: 15
    }
});
