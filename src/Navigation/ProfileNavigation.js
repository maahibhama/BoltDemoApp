import { createStackNavigator } from "react-navigation";
import Routes from "./Routes";
import ProfileView from "../Views/Profile/ProfileView";

export default ProfileNavigation = createStackNavigator(
    {
        [Routes.Profile]: { screen: ProfileView }
    },
    {
        initialRouteName: Routes.Profile,
    }
);