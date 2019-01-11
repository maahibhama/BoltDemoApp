import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Color } from '../../common/Colors';
import { AppFont } from '../../common/Fonts';
import ManageKeyboardScrollView from '../../common/ManageKeyboardScrollView';
import BaseNavigationHeader from '../../CustomUI/navigation-header/BaseNavigationHeader';

export default class CreateAddressView extends Component {
    static navigationOptions = {
        header: null
    }

    saveButtonAction() {

    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <BaseNavigationHeader navigation={this.props.navigation} title={"Create Address"}/>
                <ManageKeyboardScrollView keyboardShouldPersistTaps={'always'} contentContainerStyle={styles.keyboardAvoidView}>
                    {this.renderMiddleView()}
                    {this.renderSaveButton()}
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
                {this.renderPostalCodeTextInputView()}
                {this.renderPhoneTextInputView()}
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
                    onSubmitEditing={(event) => { this.refs.addressTextField.focus() }}
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
                    onChangeText={(text) => this.setState({ addressLane: text })}
                    onSubmitEditing={(event) => { this.refs.cityTextField.focus() }}
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
                    onSubmitEditing={(event) => { this.refs.postalTextField.focus() }}
                />
                <View style={styles.lineView} />
            </View>
        )
    }

    renderPostalCodeTextInputView() {
        return (
            <View style={styles.textInputContainer}>
                <Text style={styles.headerInputTitle}>{"Postal Code"}</Text>
                <TextInput
                    underlineColorAndroid={'transparent'}
                    ref={'postalTextField'}
                    placeholder={"Postal Code"}
                    returnKeyType={'next'}
                    autoCorrect={false}
                    style={styles.inputViewStyle}
                    onChangeText={(text) => this.setState({ postalCode: text })}
                    onSubmitEditing={(event) => { this.refs.phoneNumberTextField.focus() }}
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
                    <Text style={styles.logInButtonText}>{"Add Address"}</Text>
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
        flex: 1,
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
        fontSize: AppFont.titleExtraLargeMedium.size,
        fontFamily: AppFont.titleExtraLargeMedium.name,
        fontWeight: AppFont.titleExtraLargeMedium.weight,
        color: Color.brightText
    },
});
