import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Logo } from '../../common/Assets';
import { AppFont } from '../../common/Fonts';
import { Color } from '../../common/Colors';
import Routes from '../../Navigation/Routes';

export default class WelcomeView extends Component {
    static navigationOptions = {
        header: null
    }

    loginButtonAction() {
        this.props.navigation.navigate(Routes.Login);
    }

    signInButtonAction() {
        this.props.navigation.navigate(Routes.SignUp);
    }

    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.topView}>
                    <Text style={styles.welcomeTextStyle}>{"Welcome To Bolt"}</Text>
                    <Text style={styles.exploreTextStyle}>{"Explore Us"}</Text>
                </View>
                <View style={styles.middleView}>
                    <Image source={Logo.welcomeLogo} />
                </View>
                <View style={styles.bottomView}>
                    <TouchableHighlight onPress={() => { this.loginButtonAction() }}
                        underlayColor={Color.themeBackground}
                        style= {styles.loginTouchContainer}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Color.themeDark, Color.themeLight]} style={styles.logInButtonContainer}>
                            <Text style={styles.logInButtonText}>{"Log In"}</Text>
                        </LinearGradient>
                    </TouchableHighlight>
                    <Text onPress={() => {
                        this.signInButtonAction()
                    }} style={styles.signUpButtonText}>{"Signup"}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1
    },
    topView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    welcomeTextStyle: {
        fontSize: 22,
        fontFamily: AppFont.titleExtraLargeMedium.name,
        fontWeight: AppFont.titleExtraLargeMedium.weight,
        color: Color.themeText,
        textAlign: "center"
    },
    exploreTextStyle: {
        marginTop: 10,
        fontSize: AppFont.titleLargeMedium.size,
        fontFamily: AppFont.titleLargeMedium.name,
        fontWeight: AppFont.titleLargeMedium.weight,
        color: Color.themeText,
        textAlign: "center"
    },
    middleView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    bottomView: {
        flex: 1,
        justifyContent: "center"
    },
    loginTouchContainer: {
        marginHorizontal: "15%",
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
        fontSize: AppFont.title.size,
        fontFamily: AppFont.title.name,
        fontWeight: AppFont.title.weight,
        color: Color.brightText
    },
    signUpButtonText: {
        marginTop: 15,
        textAlign: 'center',
        fontSize: AppFont.title.size,
        fontFamily: AppFont.title.name,
        fontWeight: AppFont.title.weight,
        color: Color.darkText
    }
});
