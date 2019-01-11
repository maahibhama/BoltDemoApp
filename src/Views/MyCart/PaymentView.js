import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, TouchableHighlight, Text } from 'react-native';
import BaseNavigationHeader from '../../CustomUI/navigation-header/BaseNavigationHeader';
import Routes from '../../Navigation/Routes';
import PaymentPricingView from '../../CustomUI/CustomViews/PaymentPricingView';
import { AppFont } from '../../common/Fonts';
import LinearGradient from 'react-native-linear-gradient';
import { Color } from '../../common/Colors';
import { CardPaymentMethods } from '../../common/Constants';
import PaymentCardCell from '../../CustomUI/Cells/PaymentCardCell';
import { ScrollView } from 'react-native-gesture-handler';

export default class PaymentView extends Component {
    static navigationOptions = {
        header: null
    }

    renderItem = this.renderItem.bind(this)

    onTouchItem() {

    }

    renderAddPaymentMethodButton() {

    }

    buyButtonAction() {
        this.props.navigation.navigate(Routes.Confirmation)
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <BaseNavigationHeader navigation={this.props.navigation} title={"Payment"} />
                <ScrollView contentContainerStyle={styles.scrollStyle}>
                    <FlatList
                        extraData={this.state}
                        data={CardPaymentMethods}
                        horizontal={true}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => item.id}
                        showsHorizontalScrollIndicator={false}
                        style={styles.tableView}
                    />
                    {this.renderPaymentPriceView()}
                </ScrollView>
                {this.renderAddPaymentMethodButton()}
                {this.renderBuyButton()}
            </SafeAreaView>
        );
    }

    renderItem({ item }) {
        return (
            <PaymentCardCell info={item} onTouch={() => this.onTouchItem(item)} />
        )
    }

    renderPaymentPriceView() {
        return (
            <View style={styles.footerView}>
                <PaymentPricingView
                    subtotal={"$160.00"}
                    discount={"5%"}
                    shipping={"$10.00"}
                    total={"$162.00"}
                />
            </View>
        )
    }

    renderAddPaymentMethodButton() {
        return (
            <TouchableHighlight onPress={() => { this.renderAddPaymentMethodButton() }}
                underlayColor={Color.themeBackground}>
                <View style={styles.addAddressContainer}>
                    <Text style={styles.addAddressButtonText}>{"Add Payment Method"}</Text>
                </View>
            </TouchableHighlight>
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
        flex: 1,
    },
    footerView: {
        padding: 10,
        flex: 2,
        justifyContent: "center"
    },
    addAddressContainer: {
        borderStyle: "dashed",
        paddingVertical: 10,
        borderColor: Color.themeDark,
        borderWidth: 1,
        marginHorizontal: "5%",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    addAddressButtonText: {
        textAlign: 'center',
        fontSize: AppFont.titleExtraLargeMedium.size,
        fontFamily: AppFont.titleExtraLargeMedium.name,
        fontWeight: AppFont.titleExtraLargeMedium.weight,
        color: Color.themeDark
    },
    loginTouchContainer: {
        marginVertical: 20,
        marginHorizontal: "5%",
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
});