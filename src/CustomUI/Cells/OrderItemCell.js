import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Image, StyleSheet, Text } from "react-native";
import { Color } from "../../common/Colors";
import { AppFont } from "../../common/Fonts";
import LinearGradient from "react-native-linear-gradient";

export default class OrderItemCell extends PureComponent {
    static propTypes = {
        info: PropTypes.object.isRequired,
        onTouch: PropTypes.func.isRequired
    };

    static defaultProps = {
    };

    orderAgainButtonAction() {

    }

    render() {
        return (
            <TouchableHighlight onPress={this.props.onTouch} underlayColor={'transparent'} style={styles.container} >
                <View style={styles.subContainer}>
                    <View style={styles.imageViewContainer}>
                        <Image style={styles.imageViewStyle} source={this.props.info.image} />
                    </View>
                    <View style={styles.detailView}>
                        <Text style={styles.detailsTextStyle}>{this.props.info.name}</Text>
                        <Text style={styles.companyTextStyle}>{this.props.info.company}</Text>
                        <Text style={styles.priceTextStyle}>{this.props.info.price}</Text>
                        {this.renderOrderAgainButton()}
                    </View>
                </View>
            </TouchableHighlight>);
    }

    renderOrderAgainButton() {
        return (
            <TouchableHighlight onPress={() => { this.orderAgainButtonAction() }}
                underlayColor={Color.themeBackground}
                style={styles.loginTouchContainer}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Color.themeDark, Color.themeLight]} style={styles.logInButtonContainer}>
                    <Text style={styles.logInButtonText}>{"Order Again"}</Text>
                </LinearGradient>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 10,
        shadowColor: Color.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        backgroundColor: Color.themeBackground,
        elevation: 5
    },
    subContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    imageViewContainer: {
        minWidth: 110,
        aspectRatio: 1,
        overflow: "hidden"
    },
    imageViewStyle: {
        width: "105%",
        height: "105%",
        resizeMode: "cover"
    },
    detailView: {
        marginLeft: 15
    },
    priceTextStyle: {
        marginVertical: 10,
        fontSize: AppFont.titleMedium.size,
        fontFamily: AppFont.titleMedium.name,
        fontWeight: AppFont.titleMedium.weight,
        color: Color.themeDark
    },
    detailsTextStyle: {
        fontSize: AppFont.titleMedium.size,
        fontFamily: AppFont.titleMedium.name,
        fontWeight: AppFont.titleMedium.weight,
        color: Color.darkText
    },
    companyTextStyle: {
        marginTop: 5,
        fontSize: AppFont.titleMedium.size,
        fontFamily: AppFont.titleMedium.name,
        fontWeight: AppFont.titleMedium.weight,
        color: Color.themeText
    },
    loginTouchContainer: {
        overflow: "visible",
        shadowColor: Color.themeLight,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    logInButtonContainer: {
        paddingHorizontal: 15,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        elevation: 2
    },
    logInButtonText: {
        textAlign: 'center',
        fontSize: AppFont.title.size,
        fontFamily: AppFont.title.name,
        fontWeight: AppFont.title.weight,
        color: Color.brightText
    },
});
