import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Image, StyleSheet, Text } from "react-native";
import { Color } from "../../common/Colors";
import { AppFont } from "../../common/Fonts";
import { Icons } from "../../common/Assets";
import LinearGradient from "react-native-linear-gradient";

export default class PaymentCardCell extends PureComponent {
    static propTypes = {
        info: PropTypes.object.isRequired,
        onTouch: PropTypes.func
    };

    static defaultProps = {
        onTouch: () => { }
    };

    render() {
        return (
            <TouchableHighlight onPress={this.props.onTouch} underlayColor={'transparent'}>
                <LinearGradient
                    start={{ x: 0.0, y: 0.35 }} end={{ x: 0.75, y: 1.0 }}
                    colors={["#DD2C28", "#2F219B"]}
                    style={styles.container}>
                    <View style={styles.imageContainerStyle}>
                        <Image source={this.props.info.image} style={styles.imageViewStyle} />
                        <Image source={this.props.info.isSelected ? Icons.checked : Icons.unchecked} style={styles.checkedImage} />
                    </View>
                    <View style={styles.detailsContainerStyle}>
                        <Text style={styles.priceTextStyle}>{this.props.info.details}</Text>
                    </View>
                    <View style={styles.validityView}>
                        <View>
                            <Text style={styles.validyText}>{"VALID UP TO"}</Text>
                            <Text style={styles.expireDateStyle}>{"12/20"}</Text>
                        </View>
                    </View>
                </LinearGradient>
            </TouchableHighlight>)
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        height: 180,
        width: 280,
        shadowColor: Color.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        backgroundColor: Color.themeBackground,
        elevation: 5,
        borderRadius: 5
    },
    imageContainerStyle: {
        padding: 10,
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    imageViewStyle: {
        margin: 5,
        resizeMode: "center"
    },
    checkedImage: {
        resizeMode: "center",
        height: 30,
        width: 30
    },
    detailsContainerStyle: {
        flex: 1,
        paddingHorizontal: 15
    },
    validityView: {
        flex: 1,
        paddingHorizontal: 15,
        alignItems: "center",
        flexDirection: "row-reverse",
    },
    priceTextStyle: {
        textAlign: "center",
        marginBottom: 20,
        fontSize: AppFont.titleExtraLargeBold.size,
        fontFamily: AppFont.titleExtraLargeBold.name,
        fontWeight: AppFont.titleExtraLargeBold.weight,
        color: Color.brightText
    },
    validyText:{
        opacity: 0.6,
        textAlign: "right",
        fontSize: AppFont.titleExtraSmall.size,
        fontFamily: AppFont.titleExtraSmall.name,
        fontWeight: AppFont.titleExtraSmall.weight,
        color: Color.brightText,
        marginBottom: 5
    },
    expireDateStyle: {
        textAlign: "right",
        fontSize: AppFont.titleExtraSmallMedium.size,
        fontFamily: AppFont.titleExtraSmallMedium.name,
        fontWeight: AppFont.titleExtraSmallMedium.weight,
        color: Color.brightText
    }
});
