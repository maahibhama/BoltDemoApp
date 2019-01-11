import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { DrawerActions } from 'react-navigation';
import { Color } from '../../common/Colors';
import Routes from '../../Navigation/Routes';
import { AppFont } from '../../common/Fonts';

export default class SideMenuView extends Component {
    static navigationOptions = {
        header: null
    }

    navigateToScreen = (route) => () => {
        this.props.navigation.navigate(route);
        this.props.navigation.dispatch(DrawerActions.closeDrawer())
    }

    renderMenuItem({ route, title }) {
        return (
            <View style={styles.menuItem}>
                <Text style={styles.menuItemTitle} onPress={this.navigateToScreen(route)}>
                    {title}
                </Text>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.containerView}>
                        {this.renderMenuItem({route: Routes.HomeNavigation, title: "Home"})}
                        {this.renderMenuItem({route: Routes.ProfileNavigation, title: "Profile"})}
                        {this.renderMenuItem({route: Routes.MyCartNavigation, title: "My Cart"})}
                        {this.renderMenuItem({route: Routes.FavoriteNavigation, title: "Favorite"})}
                        {this.renderMenuItem({route: Routes.MyOrdersNavigation, title: "My Orders"})}
                        {this.renderMenuItem({route: Routes.LanguageNavigation, title: "Language"})}
                        {this.renderMenuItem({route: Routes.SettingsNavigation, title: "Settings"})}
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        flexGrow: 1,
    },
    containerView: {
        flex: 1,
        justifyContent: "center",
    },
    menuItem: {
        padding: 10,
        justifyContent:"center",
        alignItems: "center"
    },
    menuItemTitle: {
        textAlign: "center",
        fontSize: 24,
        fontFamily: AppFont.titleExtraLargeMedium.name,
        fontWeight: AppFont.titleExtraLargeMedium.weight,
        color: Color.themeText
    }
});
