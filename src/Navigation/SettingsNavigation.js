import { createStackNavigator } from "react-navigation";
import Routes from "./Routes";
import SettingsView from "../Views/Settings/SettingsView";

export default SettingsNavigation = createStackNavigator(
    {
        [Routes.Settings]: { screen: SettingsView }
    },
    {
        initialRouteName: Routes.Settings,
    }
);