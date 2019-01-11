import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, FlatList, TouchableHighlight, Text, Image, View } from 'react-native';
import { FavoriteItems, AddressList } from '../../common/Constants';
import { Color } from '../../common/Colors';
import { AppFont } from '../../common/Fonts';
import LinearGradient from 'react-native-linear-gradient';
import Routes from '../../Navigation/Routes';
import BaseNavigationHeader from '../../CustomUI/navigation-header/BaseNavigationHeader';
import { Icons } from '../../common/Assets';
import AddressCell from '../../CustomUI/Cells/AddressCell';

export default class AddressListView extends Component {
    static navigationOptions = {
        header: null
    }

    renderItem = this.renderItem.bind(this);

    addAddressButtonAction() {
        this.props.navigation.navigate(Routes.CreateAddress)
    }

    onTouchItem() {

    }

    checkouButtonAction() {
        this.props.navigation.navigate(Routes.Checkout)
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <BaseNavigationHeader navigation={this.props.navigation} title={"Address"} />
                <FlatList
                    extraData={this.state}
                    data={AddressList}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.id}
                    style={styles.tableView}
                />
                {this.renderAddAddressButton()}
                {this.renderCheckoutButton()}
            </SafeAreaView>
        );
    }

    renderItem({ item }) {
        return (
            <AddressCell info={item} onTouch={() => this.onTouchItem(item)} />
        )
    }

    renderAddAddressButton() {
        return (
            <TouchableHighlight onPress={() => { this.addAddressButtonAction() }}
                underlayColor={Color.themeBackground}>
                <View style={styles.addAddressContainer}>
                    <Image source={Icons.addLocation} style={styles.locationIcon} />
                    <Text style={styles.addAddressButtonText}>{"Add Address"}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    renderCheckoutButton() {
        return (
            <TouchableHighlight onPress={() => { this.checkouButtonAction() }}
                underlayColor={Color.themeBackground}
                style={styles.loginTouchContainer}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Color.themeDark, Color.themeLight]} style={styles.logInButtonContainer}>
                    <Text style={styles.logInButtonText}>{"Checkout"}</Text>
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
    addAddressContainer: {
        borderStyle: "dashed",
        paddingVertical: 5,
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
    locationIcon: {
        height: 35,
        width: 35,
        marginRight: 5,
        tintColor: Color.themeDark
    }
});
