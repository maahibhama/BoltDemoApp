import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View, TouchableHighlight, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Routes from '../../Navigation/Routes';
import { Color } from '../../common/Colors';
import { AppFont } from '../../common/Fonts';
import { Logo } from '../../common/Assets';
import { StackActions, NavigationActions } from 'react-navigation';

export default class ConfirmationView extends Component {
    static navigationOptions = {
        header: null
    }

    backToHomeButtonAction() {
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({
                routeName: Routes.MyCart,
              })
            ],
          }));
        this.props.navigation.navigate(Routes.HomeNavigation);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.topView}>
                </View>
                <View style={styles.middleView}>
                    <Image source={Logo.confirmation} style={styles.imageView} />
                    <Text style={styles.confirmationTitleText}>{"Confirmation"}</Text>
                    <Text style={styles.confirmationDetailsText}>{"You have successfully \n completed your payment procedure"}</Text>
                </View>
                <View style={styles.bottomView}>
                    <TouchableHighlight onPress={() => { this.backToHomeButtonAction() }}
                        underlayColor={Color.themeBackground}
                        style={styles.loginTouchContainer}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Color.themeDark, Color.themeLight]} style={styles.logInButtonContainer}>
                            <Text style={styles.logInButtonText}>{"Back to Home"}</Text>
                        </LinearGradient>
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topView: {
        flex: 1
    },
    middleView: {
        flex: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    bottomView: {
        flex: 1,
        justifyContent: "flex-end"
    },
    imageView: {
        height: 250,
        width: 250
    },
    confirmationTitleText: {
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 20,
        fontSize: 30,
        fontFamily: AppFont.titleExtraLargeMedium.name,
        fontWeight: AppFont.titleExtraLargeMedium.weight,
        color: Color.darkText
    },
    confirmationDetailsText: {
        textAlign: 'center',
        fontSize: AppFont.titleSmall.size,
        fontFamily: AppFont.titleSmall.name,
        fontWeight: AppFont.titleSmall.weight,
        color: Color.themeText
    },
    loginTouchContainer: {
        marginBottom: 20,
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
});
