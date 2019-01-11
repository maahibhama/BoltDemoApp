import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableHighlight, Switch, Image, AsyncStorage } from 'react-native';
import MenuNavigationHeader from '../../CustomUI/navigation-header/MenuNavigationHeader';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationActions } from "react-navigation";
import { Color } from '../../common/Colors';
import { SettingsData, SettingType, isLoginUser } from '../../common/Constants';
import { AppFont } from '../../common/Fonts';
import { Icons } from '../../common/Assets';
import Routes from '../../Navigation/Routes';

export default class SettingsView extends Component {
    static navigationOptions = {
        header: null
    }

    logoutButtonAction() {
        AsyncStorage.setItem(isLoginUser, "false").then(()=>{
            this.props.navigation.dispatch(NavigationActions.navigate({ routeName: Routes.AuthLoading }))
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
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
                        <Switch />
                    </View>
                )
            }

            return (
                <View key={rowValue.id} style={styles.switchViewStyle}>
                    <Text style={styles.normalText}>{rowValue.name}</Text>
                    <Image source={Icons.arrow} />
                </View>
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
            fontSize: AppFont.titleLargeBold.size,
            fontFamily: AppFont.titleLargeBold.name,
            fontWeight: AppFont.titleLargeBold.weight,
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
        logoutText:{
            fontSize: AppFont.titleMedium.size,
            fontFamily: AppFont.titleMedium.name,
            fontWeight: AppFont.titleMedium.weight,
            color: Color.themeDark
        }
    }
);
