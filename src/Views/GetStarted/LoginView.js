import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableHighlight, AsyncStorage, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from "prop-types";
import { Icons } from '../../common/Assets';
import { Color } from '../../common/Colors';
import BaseNavigationHeader from '../../CustomUI/navigation-header/BaseNavigationHeader';
import { AppFont } from '../../common/Fonts';
import Routes from '../../Navigation/Routes';
import ManageKeyboardScrollView from '../../common/ManageKeyboardScrollView';
import { isLoginUser } from '../../common/Constants';
import { loginUser } from '../../API/APIController';
import { isValidEmail, setCurrentUser } from '../../common/Utility';
import { User } from '../../Prototypes/User';

export default class LoginView extends Component {
    static navigationOptions = {
        header: null
    }

    static contextTypes = {
        presentActivityIndicator: PropTypes.func.isRequired,
        dismissActivityIndicator: PropTypes.func.isRequired,
        showAlert: PropTypes.func.isRequired
    };

    state = {
        isShowingPassword: false,
        email: "",
        password: ""
    }

    logInButtonAction() {
        Keyboard.dismiss()
        var messageString = ''
        if (isValidEmail(this.state.email) === false) {
            messageString = "Plese enter valid email."
        }
        else if (this.state.password.length == 0) {
            messageString = "Please enter password"
        }

        if (messageString.length > 0) {
            this.context.showAlert({ title: messageString })
            return
        }
        this.context.presentActivityIndicator()
        loginUser({ email: this.state.email, password: this.state.password }).then((response) => {
            this.context.dismissActivityIndicator()
            if (response.error === null) {
                User.shared = new User(response.object)
                setCurrentUser({ email: this.state.email, password: this.state.password }).then(() => {
                    this.props.navigation.navigate(Routes.AppNavigator);
                })
            } else {
                this.context.showAlert({ title: "Error", message: response.error.message })
            }
        })
    }

    signUpButtonAction() {
        this.props.navigation.navigate(Routes.SignUp);
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
                <Text style={styles.headerTitle}>{"Login"}</Text>
            </View>
        );
    }

    renderMiddleView() {
        return (
            <View style={styles.middleView}>
                {this.renderEmailTextInputView()}
                {this.renderPasswordTextInputView()}
                {this.renderLoginButton()}
                {this.renderSignUpButton()}
            </View>
        );
    }

    renderBottomView() {
        return (
            <View style={styles.bottomView}></View>
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
                    <Text style={styles.logInButtonText}>{"Log In"}</Text>
                </LinearGradient>
            </TouchableHighlight>
        )
    }

    renderSignUpButton() {
        return (
            <View style={styles.signupContainer}>
                <Text style={styles.accountText}>{"Don’t have an acoount ?"}</Text>
                <Text onPress={() => {
                    this.signUpButtonAction()
                }} style={styles.signUpText}>{"Sign Up"}</Text>
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
        paddingHorizontal: 20
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

