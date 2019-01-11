import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableHighlight, AsyncStorage } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Logo, Icons } from '../../common/Assets';
import { Color } from '../../common/Colors';
import BaseNavigationHeader from '../../CustomUI/navigation-header/BaseNavigationHeader';
import { AppFont } from '../../common/Fonts';
import Routes from '../../Navigation/Routes';
import ManageKeyboardScrollView from '../../common/ManageKeyboardScrollView';
import { isLoginUser } from '../../common/Constants';

export default class LoginView extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        isShowingPassword: false
    }

    logInButtonAction() {
        AsyncStorage.setItem(isLoginUser, "true").then(()=>{
            this.props.navigation.navigate(Routes.AppNavigator);
        }) 
    }

    signUpButtonAction() {
        this.props.navigation.navigate(Routes.Login);
    }

    showPasswordButtonAction() {
        this.setState({ isShowingPassword: !this.state.isShowingPassword })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <BaseNavigationHeader navigation={this.props.navigation} />
                <ManageKeyboardScrollView keyboardShouldPersistTaps={'always'} contentContainerStyle={styles.keyboardAvoidView}>
                    {this.renderTopView()}
                    {this.renderMiddleView()}
                </ManageKeyboardScrollView>
            </SafeAreaView>
        );
    }

    renderTopView() {
        return (
            <View style={styles.topView}>
                <Text style={styles.headerTitle}>{"SignUp"}</Text>
            </View>
        );
    }

    renderMiddleView() {
        return (
            <View style={styles.middleView}>
                {this.renderUsernameTextInputView()}
                {this.renderEmailTextInputView()}
                {this.renderPasswordTextInputView()}
                {this.renderLoginButton()}
                {this.renderSignUpButton()}
            </View>
        );
    }

    renderUsernameTextInputView() {
        return (
            <View style={styles.textInputContainer}>
                <Text style={styles.headerInputTitle}>{"Name"}</Text>
                <TextInput
                    underlineColorAndroid={'transparent'}
                    ref={'userNameTextField'}
                    placeholder={"abc"}
                    returnKeyType={'next'}
                    autoCorrect={false}
                    style={styles.inputViewStyle}
                    onChangeText={(text) => this.setState({ username: text })}
                    onSubmitEditing={(event) => { this.refs.emailTextField.focus() }}
                />
                <View style={styles.lineView} />
            </View>
        )
    }

    renderEmailTextInputView() {
        return (
            <View style={styles.textInputContainer}>
                <Text style={styles.headerInputTitle}>{"Email"}</Text>
                <TextInput
                    underlineColorAndroid={'transparent'}
                    ref={'emailTextField'}
                    placeholder={"abc@xyz.in"}
                    keyboardType={'email-address'}
                    autoCapitalize={'none'}
                    returnKeyType={'next'}
                    autoCorrect={false}
                    style={styles.inputViewStyle}
                    onChangeText={(text) => this.setState({ email: text })}
                    onSubmitEditing={(event) => { this.refs.passwordTextField.focus() }}
                />
                <View style={styles.lineView} />
            </View>
        )
    }

    renderPasswordTextInputView() {
        return (
            <View style={styles.textInputContainer}>
                <Text style={styles.headerInputTitle}>{"Password"}</Text>
                <View style={styles.passwordtextInputContainer}>
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        ref={'passwordTextField'}
                        placeholder={"minimum 6 characters"}
                        returnKeyType={'done'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        secureTextEntry={!(this.state.isShowingPassword)}
                        style={styles.passwordInputViewStyle}
                        onChangeText={(text) => this.setState({ password: text })}
                        onSubmitEditing={(event) => { this.logInButtonAction() }}
                    />
                    <TouchableHighlight onPress={() => { this.showPasswordButtonAction() }}
                        underlayColor={Color.themeBackground} style={styles.eyeButtonView}>
                        <Image source={this.state.isShowingPassword ? Icons.closeEye : Icons.passwordEye}
                            style={styles.eyesIcon} />
                    </TouchableHighlight>
                </View>
                <View style={styles.lineView} />
            </View>

        )
    }

    renderLoginButton() {
        return (
            <TouchableHighlight onPress={() => { this.logInButtonAction() }}
                underlayColor={Color.themeBackground}
                style={styles.loginTouchContainer}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Color.themeDark, Color.themeLight]} style={styles.logInButtonContainer}>
                    <Text style={styles.logInButtonText}>{"Sign Up"}</Text>
                </LinearGradient>
            </TouchableHighlight>
        )
    }

    renderSignUpButton() {
        return (
            <View style={styles.signupContainer}>
                <Text style={styles.accountText}>{"Already have an acoount ?"}</Text>
                <Text onPress={() => {
                    this.signUpButtonAction()
                }} style={styles.signUpText}>{"Sign in"}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    keyboardAvoidView: {
        flexGrow: 1
    },
    topView: {
        paddingHorizontal: 20,
    },
    middleView: {
        paddingHorizontal: 25,
        paddingTop: "20%"
    },
    lineView: {
        height: 1,
        backgroundColor: Color.brightBorder
    },
    headerTitle: {
        textAlign: 'left',
        fontSize: 30,
        fontFamily: AppFont.titleExtraLargeMedium.name,
        fontWeight: AppFont.titleExtraLargeMedium.weight,
        color: Color.darkText
    },
    textInputContainer: {
        paddingVertical: 15,
    },
    headerInputTitle: {
        fontSize: AppFont.titleSmallMedium.size,
        fontFamily: AppFont.titleSmallMedium.name,
        fontWeight: AppFont.titleSmallMedium.weight,
        color: Color.lightText
    },
    inputViewStyle: {
        height: 40,
        padding: 0,
        fontSize: AppFont.titleSmallMedium.size,
        fontFamily: AppFont.titleSmallMedium.name,
        fontWeight: AppFont.titleSmallMedium.weight
    },
    passwordInputViewStyle: {
        height: 40,
        padding: 0,
        fontSize: AppFont.titleSmallMedium.size,
        fontFamily: AppFont.titleSmallMedium.name,
        fontWeight: AppFont.titleSmallMedium.weight,
        flex: 1
    },
    passwordtextInputContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    eyeButtonView: {
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: 40,
    },
    eyesIcon: {
        tintColor: Color.themeText
    },
    loginTouchContainer: {
        marginTop: 40,
        marginHorizontal: "5%",
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
    signupContainer: {
        marginVertical: 40,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    accountText: {
        fontSize: AppFont.title.size,
        fontFamily: AppFont.title.name,
        fontWeight: AppFont.title.weight,
        color: Color.themeText
    },
    signUpText: {
        marginLeft: 10,
        fontSize: AppFont.title.size,
        fontFamily: AppFont.title.name,
        fontWeight: AppFont.title.weight,
        color: Color.darkText
    }
});

