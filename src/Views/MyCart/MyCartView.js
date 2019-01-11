import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, FlatList, TouchableHighlight, Text } from 'react-native';
import MenuNavigationHeader from '../../CustomUI/navigation-header/MenuNavigationHeader';
import { FavoriteItems } from '../../common/Constants';
import CartItemCell from '../../CustomUI/Cells/CartItemCell';
import { Color } from '../../common/Colors';
import { AppFont } from '../../common/Fonts';
import LinearGradient from 'react-native-linear-gradient';
import Routes from '../../Navigation/Routes';

export default class MyCartView extends Component {
    static navigationOptions = {
        header: null
    }

    renderItem = this.renderItem.bind(this);

    onTouchItem() {

    }

    continueButtonAction() {
        this.props.navigation.navigate(Routes.AddressList)
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <MenuNavigationHeader navigation={this.props.navigation} title={"My Cart"} />
                <FlatList
                    extraData={this.state}
                    data={FavoriteItems}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.id}
                    style={styles.tableView}
                />
                {this.renderContinueButton()}
            </SafeAreaView>
        );
    }

    renderItem({ item }) {
        return (
            <CartItemCell info={item} onTouch={() => this.onTouchItem(item)} />
        )
    }

    renderContinueButton() {
        return (
            <TouchableHighlight onPress={() => { this.continueButtonAction() }}
                underlayColor={Color.themeBackground}
                style={styles.loginTouchContainer}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Color.themeDark, Color.themeLight]} style={styles.logInButtonContainer}>
                    <Text style={styles.logInButtonText}>{"Continue"}</Text>
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
});
