import { createStackNavigator } from "react-navigation";
import Routes from "./Routes";
import LanguageView from "../Views/Language/LanguageView";

export default LanguageNavigation = createStackNavigator(
    {
        [Routes.Language]: { screen: LanguageView }
    },
    {
        initialRouteName: Routes.Language,
    }
);