import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableHighlight, Switch, Image, AsyncStorage } from 'react-native';
import PropTypes from "prop-types";
import { NavigationEvents } from 'react-navigation';

import MenuNavigationHeader from '../../CustomUI/navigation-header/MenuNavigationHeader';
import { ScrollView } from 'react-native-gesture-handler';
import { StackActions, NavigationActions } from "react-navigation";
import { Color } from '../../common/Colors';
import { SettingsData, SettingType, isLoginUser } from '../../common/Constants';
import { AppFont } from '../../common/Fonts';
import { Icons } from '../../common/Assets';
import Routes from '../../Navigation/Routes';
import { changeUserService, getUserServiceDetails } from '../../API/APIController';
import { User } from '../../Prototypes/User';
export default class SettingsView extends Component {
    static navigationOptions = {
        header: null
    }

    static contextTypes = {
        presentActivityIndicator: PropTypes.func.isRequired,
        dismissActivityIndicator: PropTypes.func.isRequired,
        showAlert: PropTypes.func.isRequired
    };

    state = {
        receiveNotification: false,
        receiveNewsletters: false,
        receiveSpecialOffer: false,
        participateBetaProgramme: false
    }

    logoutButtonAction() {
        AsyncStorage.clear().then(() => {
            this.props.navigation.dispatch(NavigationActions.navigate({ routeName: Routes.AuthLoading }))
        })
    }

    switchValue({ id }) {
        switch (id) {
            case "4":
                return this.state.receiveNotification
            case "5":
                return this.state.receiveNewsletters
            case "6":
                return this.state.receiveSpecialOffer
            case "7":
                return this.state.participateBetaProgramme
            default:
                return
        }
    }

    touchViewAction({ id }) {
        switch (id) {
            case "1":
                this.resetNavigation()
                this.props.navigation.navigate(Routes.ProfileNavigation)
                return
            case "2":
                this.props.navigation.navigate(Routes.ChangePassword)
                return
            case "3":
                this.resetNavigation()
                this.props.navigation.navigate(Routes.LanguageNavigation)
                return
            default:
                return
        }
    }

    switchAction({ id }) {
        switch (id) {
            case "4":
                this.setState({ receiveNotification: !this.state.receiveNotification }, () => {
                    this.updateUserService()
                })
                return
            case "5":
                this.setState({ receiveNewsletters: !this.state.receiveNewsletters }, () => {
                    this.updateUserService()
                })
                return
            case "6":
                this.setState({ receiveSpecialOffer: !this.state.receiveSpecialOffer }, () => {
                    this.updateUserService()
                })
                return
            case "7":
                this.setState({ participateBetaProgramme: !this.state.participateBetaProgramme }, () => {
                    this.updateUserService()
                })
                return
            default:
                return
        }

    }

    updateUserService() {
        this.context.presentActivityIndicator()
        changeUserService({
            id: User.shared.id,
            receiveNotification: this.state.receiveNotification,
            receiveNewsletters: this.state.receiveNewsletters,
            receiveSpecialOffer: this.state.receiveSpecialOffer,
            participateBetaProgramme: this.state.participateBetaProgramme,
        }).then(response => {
            this.context.dismissActivityIndicator()
            if (response.error === null) {
                this.setState({
                    receiveNotification: response.object.receiveNotification,
                    receiveNewsletters: response.object.receiveNewsletters,
                    receiveSpecialOffer: response.object.receiveSpecialOffer,
                    participateBetaProgramme: response.object.participateBetaProgramme,
                })
            } else {
                this.context.showAlert({ title: "Error", message: response.error.message })
            }

        })
    }

    fetchUserServiceDetails() {
        getUserServiceDetails({ id: User.shared.id }).then(response => {
            if (response.error === null) {
                this.setState({
                    receiveNotification: response.object.receiveNotification,
                    receiveNewsletters: response.object.receiveNewsletters,
                    receiveSpecialOffer: response.object.receiveSpecialOffer,
                    participateBetaProgramme: response.object.participateBetaProgramme,
                })
            } else {
                this.context.showAlert({ title: "Error", message: response.error.message })
            }
        })
    }

    resetNavigation() {
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: Routes.Settings,
                })
            ],
        }));
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <NavigationEvents onDidFocus={() => this.fetchUserServiceDetails()} />
                <MenuNavigationHeader navigation={this.props.navigation} title={"Settings"} />
                <ScrollView>
                    {this.renderSettingView()}
                    {this.logoutView()}
                </ScrollView>
            </SafeAreaView>
        );
    }

    renderSettingView() {
        return SettingsData.map((rowValue, i) => {
            if (rowValue.type === SettingType.switch) {
                return (
                    <View key={rowValue.id} style={styles.switchViewStyle}>
                        <Text style={styles.switchText}>{rowValue.name}</Text>
                        <Switch
                            onValueChange={() => { this.switchAction({ id: rowValue.id }) }}
                            value={this.switchValue({ id: rowValue.id })}
                            thumbColor={Color.themeDark}
                            trackColor={{ false: Color.brightBorder, true: Color.themeLight }}
                        />
                    </View>
                )
            }

            return (
                <TouchableHighlight onPress={() => { this.touchViewAction({ id: rowValue.id }) }}
                    underlayColor={Color.themeBackground}
                    key={rowValue.id}>
                    <View key={rowValue.id} style={styles.switchViewStyle}>
                        <Text style={styles.normalText}>{rowValue.name}</Text>
                        <Image source={Icons.arrow} />
                    </View>
                </TouchableHighlight>
            )
        })
    }

    logoutView() {
        return (
            <TouchableHighlight onPress={() => { this.logoutButtonAction() }}
                underlayColor={Color.themeBackground}
                style={styles.logOutView}>
                <Text style={styles.logoutText}>{"Logout"}</Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        switchViewStyle: {
            paddingVertical: 10,
            flexDirection: "row",
            alignItems: "center",
            paddingRight: 20,
            borderBottomWidth: 1,
            borderColor: Color.brightBorder,
            marginLeft: 20,
            marginVertical: 10
        },
        switchText: {
            flex: 1,
            fontSize: AppFont.title.size,
            fontFamily: AppFont.title.name,
            fontWeight: AppFont.title.weight,
            color: Color.darkText
        },
        normalText: {
            flex: 1,
            fontSize: AppFont.titleLargeMedium.size,
            fontFamily: AppFont.titleLargeMedium.name,
            fontWeight: AppFont.titleLargeMedium.weight,
            color: Color.darkText
        },
        logOutView: {
            margin: 20,
            padding: 10,
            borderWidth: 2,
            borderColor: Color.themeDark,
            justifyContent: "center",
            alignItems: "center"
        },
        logoutText: {
            fontSize: AppFont.titleMedium.size,
            fontFamily: AppFont.titleMedium.name,
            fontWeight: AppFont.titleMedium.weight,
            color: Color.themeDark
        }
    }
);
