import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableHighlight, Keyboard } from 'react-native';
import PropTypes from "prop-types";

import LinearGradient from 'react-native-linear-gradient';
import { Color } from '../../common/Colors';
import { AppFont } from '../../common/Fonts';
import ManageKeyboardScrollView from '../../common/ManageKeyboardScrollView';
import { getUserDetails, updateUserDetails, changeUserPassword } from '../../API/APIController';
import { User } from '../../Prototypes/User';
import { isValidEmail, isValidPassword, setCurrentUser } from '../../common/Utility';
import { NavigationEvents } from 'react-navigation';
import { Icons } from '../../common/Assets';
import BaseNavigationHeader from '../../CustomUI/navigation-header/BaseNavigationHeader';

export default class ChangePasswordView extends Component {
    static navigationOptions = {
        header: null
    }

    static contextTypes = {
        presentActivityIndicator: PropTypes.func.isRequired,
        dismissActivityIndicator: PropTypes.func.isRequired,
        showAlert: PropTypes.func.isRequired
    };

    state = {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        isShowingCurrentPassword: false,
        isShowingNewPassword: false,
        isShowingConfirmPassword: false
    }

    showPasswordButtonAction({ ref }) {
        if (ref === 'currentPasswordTextField') {
            this.setState({ isShowingCurrentPassword: !this.state.isShowingCurrentPassword })
        } else if (ref === 'newPasswordTextField') {
            this.setState({ isShowingNewPassword: !this.state.isShowingNewPassword })
        } else if (ref === 'confirmPasswordTextField') {
            this.setState({ isShowingConfirmPassword: !this.state.isShowingConfirmPassword })
        }

    }

    onChangeText({ text, ref }) {
        if (ref === 'currentPasswordTextField') {
            this.setState({ currentPassword: text })
        } else if (ref === 'newPasswordTextField') {
            this.setState({ newPassword: text })
        } else if (ref === 'confirmPasswordTextField') {
            this.setState({ confirmPassword: text })
        }
    }

    onSubmitEditing({ ref }) {
        if (ref === 'currentPasswordTextField') {
            this.refs.newPasswordTextField.focus()
        } else if (ref === 'newPasswordTextField') {
            this.refs.confirmPasswordTextField.focus()
        } else if (ref === 'confirmPasswordTextField') {
            this.saveButtonAction()
        }
    }

    saveButtonAction() {
        Keyboard.dismiss()

        var messageString = ''

        if (this.state.currentPassword.length == 0) {
            messageString = "Please enter current password."
        }
        else if (this.state.newPassword && this.state.newPassword.length < 8) {
            messageString = "Please Enter at Least 8 character in new password."
        }
        else if (isValidPassword(this.state.newPassword) === false) {
            messageString = "new Password must contain at least 8 characters including 1 upper case letter, 1 number and 1 special character."
        }
        else if (this.state.newPassword !== this.state.confirmPassword) {
            messageString = "New password should not be same as confirm password."
        }

        if (messageString.length > 0) {
            this.context.showAlert({ title: messageString })
            return
        }
        this.context.presentActivityIndicator()
        changeUserPassword({ id: User.shared.id, newPassword: this.state.newPassword, currentPassword: this.state.currentPassword }).then((response) => {
            this.context.dismissActivityIndicator()
            if (response.error === null) {
                setCurrentUser({ email: response.object.email, password: this.state.newPassword })
                this.setState({
                    currentPassword: "",
                    newPassword: "",
                    confirmPassword: ""
                })
                this.context.showAlert({ title: "Password changed successfully." })
            } else {
                this.context.showAlert({ title: "Error", message: response.error.message })
            }
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <BaseNavigationHeader navigation={this.props.navigation} title={"Change Password"} />
                <ManageKeyboardScrollView keyboardShouldPersistTaps={'always'} contentContainerStyle={styles.keyboardAvoidView}>
                    {this.renderMiddleView()}
                </ManageKeyboardScrollView>
            </SafeAreaView>
        );
    }

    renderMiddleView() {

        return (
            <View style={styles.middleView}>
                {this.renderPasswordTextInputView({
                    name: "Current Password",
                    ref: "currentPasswordTextField",
                    isShowPassword: this.state.isShowingCurrentPassword,
                    value: this.state.currentPassword
                })}
                {this.renderPasswordTextInputView({
                    name: "New Password",
                    ref: "newPasswordTextField",
                    isShowPassword: this.state.isShowingNewPassword,
                    value: this.state.newPassword
                })}
                {this.renderPasswordTextInputView({
                    name: "Confirm Password",
                    ref: "confirmPasswordTextField",
                    isShowPassword: this.state.isShowingConfirmPassword,
                    value: this.state.confirmPassword
                })}
                {this.renderSaveButton()}
            </View>
        );
    }


    renderPasswordTextInputView({ name, ref, isShowPassword, value }) {
        return (
            <View style={styles.textInputContainer}>
                <Text style={styles.headerInputTitle}>{name}</Text>
                <View style={styles.passwordtextInputContainer}>
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        ref={ref}
                        placeholder={"minimum 6 characters"}
                        returnKeyType={'done'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        secureTextEntry={!(isShowPassword)}
                        style={styles.passwordInputViewStyle}
                        onChangeText={(text) => this.onChangeText({ text: text, ref: ref })}
                        onSubmitEditing={(event) => { this.onSubmitEditing({ ref: ref }) }}
                        value={value}
                    />
                    <TouchableHighlight onPress={() => { this.showPasswordButtonAction({ ref }) }}
                        underlayColor={Color.themeBackground} style={styles.eyeButtonView}>
                        <Image source={isShowPassword ? Icons.closeEye : Icons.passwordEye}
                            style={styles.eyesIcon} />
                    </TouchableHighlight>
                </View>
                <View style={styles.lineView} />
            </View>

        )
    }


    renderSaveButton() {
        return (
            <TouchableHighlight onPress={() => { this.saveButtonAction() }}
                underlayColor={Color.themeBackground}
                style={styles.loginTouchContainer}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Color.themeDark, Color.themeLight]} style={styles.logInButtonContainer}>
                    <Text style={styles.logInButtonText}>{"Save"}</Text>
                </LinearGradient>
            </TouchableHighlight>
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
    middleView: {
        paddingHorizontal: 25,
        paddingTop: 20
    },
    lineView: {
        height: 1,
        backgroundColor: Color.brightBorder
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
    passwordtextInputContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    passwordInputViewStyle: {
        height: 40,
        padding: 0,
        fontSize: AppFont.titleSmallMedium.size,
        fontFamily: AppFont.titleSmallMedium.name,
        fontWeight: AppFont.titleSmallMedium.weight,
        flex: 1
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
        marginVertical: 20,
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
});
