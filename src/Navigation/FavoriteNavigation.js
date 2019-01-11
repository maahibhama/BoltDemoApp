import { createStackNavigator } from "react-navigation";
import Routes from "./Routes";
import FavoriteView from "../Views/Favorite/FavoriteView";

export default FavoriteNavigation = createStackNavigator(
    {
        [Routes.Favorite]: { screen: FavoriteView }
    },
    {
        initialRouteName: Routes.Favorite,
    }
);