import {
    Platform,
} from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthLoadingView from "../Views/GetStarted/AuthLoadingView";
import WelcomeView from '../Views/GetStarted/WelcomeView';
import LoginView from '../Views/GetStarted/LoginView';
import Routes from './Routes';
import SignUpView from '../Views/GetStarted/SignUpView';
import MenuNavigation from './MenuNavigation';

const AuthStack = createStackNavigator(
    {
        [Routes.Welcome]: { screen: WelcomeView },
        [Routes.Login]: { screen: LoginView },
        [Routes.SignUp]: { screen: SignUpView }
    },
    {
        navigationOptions: ({ navigation }) => ({
            gesturesEnabled: false
        }),
        initialRouteName: Routes.Welcome,
    }
);

const AppNavigator = createSwitchNavigator(
    {
        [Routes.AuthLoading]: AuthLoadingView,
        [Routes.AppNavigator]: MenuNavigation,
        [Routes.AuthNavigator]: AuthStack,
    },
    {
        initialRouteName: Routes.AuthLoading
    }
);

export default createAppContainer(AppNavigator);