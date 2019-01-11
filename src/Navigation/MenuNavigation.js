import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import Routes from "./Routes";
import HomeNavigation from "./HomeNavigation";
import SideMenuView from "../CustomUI/SideMenu/SideMenuView";
import ProfileNavigation from "./ProfileNavigation";
import MyCartNavigation from "./MyCartNavigation";
import FavoriteNavigation from "./FavoriteNavigation";
import MyOrdersNavigation from "./MyOrdersNavigation";
import LanguageNavigation from "./LanguageNavigation";
import SettingsNavigation from "./SettingsNavigation";

export default MenuNavigation = createDrawerNavigator(
    {
        [Routes.HomeNavigation]: { screen: HomeNavigation},
        [Routes.ProfileNavigation]: { screen: ProfileNavigation},
        [Routes.MyCartNavigation]: { screen: MyCartNavigation},
        [Routes.FavoriteNavigation]: { screen: FavoriteNavigation},
        [Routes.MyOrdersNavigation]: { screen: MyOrdersNavigation},
        [Routes.LanguageNavigation]: { screen: LanguageNavigation},
        [Routes.SettingsNavigation]: { screen: SettingsNavigation}
    },
    {
        initialRouteName: Routes.HomeNavigation,
        gesturesEnabled: true,
        drawerWidth: 270,
        drawerPosition: 'left',
        contentComponent: SideMenuView
    }
)