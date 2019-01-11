import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, FlatList, TouchableHighlight, Text, View } from 'react-native';
import CartItemCell from '../../CustomUI/Cells/CartItemCell';
import { Color } from '../../common/Colors';
import { AppFont } from '../../common/Fonts';
import Routes from '../../Navigation/Routes';
import BaseNavigationHeader from '../../CustomUI/navigation-header/BaseNavigationHeader';
import { CheckoutItems, CheckoutAddress } from '../../common/Constants';
import LinearGradient from 'react-native-linear-gradient';
import AddressCell from '../../CustomUI/Cells/AddressCell';
import PaymentPricingView from '../../CustomUI/CustomViews/PaymentPricingView';

export default class CheckoutView extends Component {
    static navigationOptions = {
        header: null
    }

    renderItem = this.renderItem.bind(this);
    renderListFooterComponent = this.renderListFooterComponent.bind(this);

    onTouchItem() {

    }

    buyButtonAction() {
        this.props.navigation.navigate(Routes.Payment)
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <BaseNavigationHeader navigation={this.props.navigation} title={"Checkout"} />
                <FlatList
                    extraData={this.state}
                    data={CheckoutItems}
                    renderItem={this.renderItem}
                    ListFooterComponent={this.renderListFooterComponent}
                    keyExtractor={(item, index) => item.id}
                    style={styles.tableView}
                />
                {this.renderBuyButton()}
            </SafeAreaView>
        );
    }

    renderItem({ item }) {
        return (
            <CartItemCell info={item} onTouch={() => this.onTouchItem(item)} />
        )
    }

    renderListFooterComponent() {
        return (
            <View style={styles.footerView}>
                <AddressCell info={CheckoutAddress} />
                <View style={styles.lineView} />
                <PaymentPricingView
                    subtotal={"$160.00"}
                    discount={"5%"}
                    shipping={"$10.00"}
                    total={"$162.00"}
                />
            </View>
        )
    }

    renderBuyButton() {
        return (
            <TouchableHighlight onPress={() => { this.buyButtonAction() }}
                underlayColor={Color.themeBackground}
                style={styles.loginTouchContainer}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Color.themeDark, Color.themeLight]} style={styles.logInButtonContainer}>
                    <Text style={styles.logInButtonText}>{"Buy"}</Text>
                </LinearGradient>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tableView: {
        flex: 1
    },
    loginTouchContainer: {
        position: "absolute",
        left: "5%",
        bottom: 40,
        width: "90%",
        overflow: "visible",
        shadowColor: Color.themeLight,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    logInButtonContainer: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        elevation: 2
    },
    logInButtonText: {
        textAlign: 'center',
        fontSize: AppFont.titleExtraLargeMedium.size,
        fontFamily: AppFont.titleExtraLargeMedium.name,
        fontWeight: AppFont.titleExtraLargeMedium.weight,
        color: Color.brightText
    },
    footerView: {
        padding: 10,
        marginBottom: 100
    },
    lineView: {
        margin: 10,
        height: 1,
        backgroundColor: Color.brightBorder
    }
});
