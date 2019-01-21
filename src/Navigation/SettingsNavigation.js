import { createStackNavigator } from "react-navigation";
import Routes from "./Routes";
import SettingsView from "../Views/Settings/SettingsView";
import ChangePasswordView from "../Views/Settings/ChangePasswordView";

export default SettingsNavigation = createStackNavigator(
    {
        [Routes.Settings]: { screen: SettingsView },
        [Routes.ChangePassword]: { screen: ChangePasswordView }
    },
    {
        initialRouteName: Routes.Settings,
    }
);