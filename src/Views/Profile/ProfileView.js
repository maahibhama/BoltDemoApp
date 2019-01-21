import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableHighlight, Keyboard } from 'react-native';
import PropTypes from "prop-types";

import MenuNavigationHeader from '../../CustomUI/navigation-header/MenuNavigationHeader';
import LinearGradient from 'react-native-linear-gradient';
import { Color } from '../../common/Colors';
import { AppFont } from '../../common/Fonts';
import ManageKeyboardScrollView from '../../common/ManageKeyboardScrollView';
import { getUserDetails, updateUserDetails } from '../../API/APIController';
import { User } from '../../Prototypes/User';
import { isValidEmail } from '../../common/Utility';
import { NavigationEvents } from 'react-navigation';
export default class ProfileView extends Component {
    static navigationOptions = {
        header: null
    }

    static contextTypes = {
        presentActivityIndicator: PropTypes.func.isRequired,
        dismissActivityIndicator: PropTypes.func.isRequired,
        showAlert: PropTypes.func.isRequired
    };

    state = {
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        gender: ""
    }


    fetchUserDetails() {
        this.context.presentActivityIndicator()
        getUserDetails({ id: User.shared.id }).then((response) => {
            this.context.dismissActivityIndicator()
            if (response.error === null) {
                this.setState({
                    name: response.object.name,
                    email: response.object.email,
                    phoneNumber: response.object.phoneNumber,
                    address: response.object.address,
                    city: response.object.city,
                    gender: response.object.gender
                })
            }

        })
    }

    saveButtonAction() {
        Keyboard.dismiss()

        var messageString = ''
        if (this.state.name.length == 0) {
            messageString = "Please enter name"
        }
        else if (isValidEmail(this.state.email) === false) {
            messageString = "Invalid Email Format"
        }

        if (messageString.length > 0) {
            this.context.showAlert({ title: messageString })
            return
        }

        this.context.presentActivityIndicator()
        updateUserDetails({
            id: User.shared.id,
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            city: this.state.city,
            gender: this.state.gender,
            phoneNumber: this.state.phoneNumber
        }).then((response) => {
            this.context.dismissActivityIndicator()
            if (response.error === null) {
                this.setState({
                    name: response.object.name,
                    email: response.object.email,
                    phoneNumber: response.object.phoneNumber,
                    address: response.object.address,
                    city: response.object.city,
                    gender: response.object.gender
                })
            }

        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <NavigationEvents onDidFocus={() => this.fetchUserDetails()} />
                <MenuNavigationHeader navigation={this.props.navigation} title={"Profile"} />
                <ManageKeyboardScrollView keyboardShouldPersistTaps={'always'} contentContainerStyle={styles.keyboardAvoidView}>
                    {this.renderMiddleView()}
                </ManageKeyboardScrollView>
            </SafeAreaView>
        );
    }

    renderMiddleView() {
        return (
            <View style={styles.middleView}>
                {this.renderUsernameTextInputView()}
                {this.renderAddressTextInputView()}
                {this.renderCityTextInputView()}
                {this.renderGenderTextInputView()}
                {this.renderEmailTextInputView()}
                {this.renderPhoneTextInputView()}
                {this.renderSaveButton()}
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
                    onChangeText={(text) => this.setState({ name: text })}
                    onSubmitEditing={(event) => { this.refs.addressTextField.focus() }}
                    value={this.state.name}
                />
                <View style={styles.lineView} />
            </View>
        )
    }

    renderAddressTextInputView() {
        return (
            <View style={styles.textInputContainer}>
                <Text style={styles.headerInputTitle}>{"Address lane"}</Text>
                <TextInput
                    underlineColorAndroid={'transparent'}
                    ref={'addressTextField'}
                    placeholder={"Address lane"}
                    returnKeyType={'next'}
                    autoCorrect={false}
                    style={styles.inputViewStyle}
                    onChangeText={(text) => this.setState({ address: text })}
                    onSubmitEditing={(event) => { this.refs.cityTextField.focus() }}
                    value={this.state.address}
                />
                <View style={styles.lineView} />
            </View>
        )
    }

    renderCityTextInputView() {
        return (
            <View style={styles.textInputContainer}>
                <Text style={styles.headerInputTitle}>{"City"}</Text>
                <TextInput
                    underlineColorAndroid={'transparent'}
                    ref={'cityTextField'}
                    placeholder={"City"}
                    returnKeyType={'next'}
                    autoCorrect={false}
                    style={styles.inputViewStyle}
                    onChangeText={(text) => this.setState({ city: text })}
                    onSubmitEditing={(event) => { this.refs.genderTextField.focus() }}
                    value={this.state.city}
                />
                <View style={styles.lineView} />
            </View>
        )
    }

    renderGenderTextInputView() {
        return (
            <View style={styles.textInputContainer}>
                <Text style={styles.headerInputTitle}>{"Gender"}</Text>
                <TextInput
                    underlineColorAndroid={'transparent'}
                    ref={'genderTextField'}
                    placeholder={"Gender"}
                    returnKeyType={'next'}
                    autoCorrect={false}
                    style={styles.inputViewStyle}
                    onChangeText={(text) => this.setState({ gender: text })}
                    onSubmitEditing={(event) => { this.refs.emailTextField.focus() }}
                    value={this.state.gender}
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
                    onSubmitEditing={(event) => { this.refs.phoneNumberTextField.focus() }}
                    value={this.state.email}
                />
                <View style={styles.lineView} />
            </View>
        )
    }

    renderPhoneTextInputView() {
        return (
            <View style={styles.textInputContainer}>
                <Text style={styles.headerInputTitle}>{"Phone Number"}</Text>
                <TextInput
                    underlineColorAndroid={'transparent'}
                    ref={'phoneNumberTextField'}
                    placeholder={"+1234567890"}
                    keyboardType={'number-pad'}
                    autoCapitalize={'none'}
                    returnKeyType={'next'}
                    autoCorrect={false}
                    style={styles.inputViewStyle}
                    onChangeText={(text) => this.setState({ phoneNumber: text })}
                    onSubmitEditing={(event) => { this.saveButtonAction() }}
                    value={this.state.phoneNumber}
                />
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
    inputViewStyle: {
        height: 40,
        padding: 0,
        fontSize: AppFont.titleSmallMedium.size,
        fontFamily: AppFont.titleSmallMedium.name,
        fontWeight: AppFont.titleSmallMedium.weight
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
