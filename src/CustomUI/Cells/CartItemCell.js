import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Image, StyleSheet, Text } from "react-native";
import { Color } from "../../common/Colors";
import { AppFont } from "../../common/Fonts";
import { Icons } from "../../common/Assets";

export default class CartItemCell extends PureComponent {
    static propTypes = {
        info: PropTypes.object.isRequired,
        onTouch: PropTypes.func.isRequired
    };

    static defaultProps = {
    };

    state = {
        itemValue: 1
    }

    cancelButtonAction() {

    }

    minusButtonAction() {
        if(this.state.itemValue > 0) {
            this.setState({ itemValue: this.state.itemValue - 1 })
        }
    }

    plusButtonAction() {
        this.setState({ itemValue: this.state.itemValue + 1 })
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
                        {this.renderIncrementDecrementView()}
                    </View>
                    {this.renderCancelButton()}
                </View>
            </TouchableHighlight>);
    }

    renderCancelButton() {
        return (
            <View style={styles.cancelViewContainer}>
                <TouchableHighlight onPress={() => { this.cancelButtonAction() }}
                    underlayColor={Color.themeBackground}
                    style={styles.cancelButtonView}>
                    <Image style={styles.cancelIcon} source={Icons.cancel} />
                </TouchableHighlight>
            </View>
        )
    }

    renderIncrementDecrementView() {
        return (
            <View style={styles.incrementDecrementView}>
                <TouchableHighlight onPress={() => { this.minusButtonAction() }}
                    underlayColor={Color.offWhiteBackground}
                    style={styles.incrementDecrementButtonView}>
                    <Image style={styles.cancelIcon} source={Icons.minus} />
                </TouchableHighlight>
                <Text style={styles.incrementDecrementText} >{this.state.itemValue}</Text>
                <TouchableHighlight onPress={() => { this.plusButtonAction() }}
                    underlayColor={Color.offWhiteBackground}
                    style={styles.incrementDecrementButtonView}>
                    <Image style={styles.cancelIcon} source={Icons.plus} />
                </TouchableHighlight>
            </View>
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
        flexDirection: "row"
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
        marginLeft: 15,
        flex: 1
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
    incrementDecrementView: {
        height: 40,
        flexDirection: "row",
        alignItems: "center"
    },
    incrementDecrementButtonView:{
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color.offWhiteBackground,
    },
    incrementDecrementText: {
        textAlign: "center",
        lineHeight: 40,
        paddingHorizontal: 20,
        height: 40,
        backgroundColor: Color.offWhiteBackground,
        fontSize: AppFont.titleMedium.size,
        fontFamily: AppFont.titleMedium.name,
        fontWeight: AppFont.titleMedium.weight,
        color: Color.themeText
    },
    cancelViewContainer: {
        top: -10,
        right: -10,
        width: 30,
        height: 30,
        position: "absolute"
    },
    cancelButtonView: {
        height: 30,
        width: 30,
        justifyContent: "center",
        alignItems: "center"
    }
});
