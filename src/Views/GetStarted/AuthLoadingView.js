import React, { Component } from 'react';
import { StyleSheet, Image, AsyncStorage } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Logo } from '../../common/Assets';
import { Color } from '../../common/Colors';
import Routes from '../../Navigation/Routes';
import { isLoginUser } from '../../common/Constants';

export default class AuthLoadingView extends Component {
  constructor(props) {
    super(props);
    this.fetchData();
  }

  fetchData = async () => {
    AsyncStorage.getItem(isLoginUser).then((value) => {
      if (value === "true") {
        this.timeoutHandle = setTimeout(() => {
          this.props.navigation.navigate(Routes.AppNavigator);
        }, 1000);
      } else {
        this.timeoutHandle = setTimeout(() => {
          this.props.navigation.navigate(Routes.AuthNavigator);
        }, 1000);
      }
    })

  };

  render() {
    return (
      <LinearGradient colors={[Color.themeDark, Color.themeLight]} style={styles.container}>
        <Image source={Logo.appLogo} style={styles.imageView} />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    height: 250,
    width: 250
  }
});
