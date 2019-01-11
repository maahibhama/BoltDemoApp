import { createStackNavigator } from "react-navigation";
import Routes from "./Routes";
import HomeView from "../Views/Home/HomeView";
import FeaturedView from "../Views/Home/FeaturedView";
import ItemDetailsView from "../Views/Home/ItemDetailsView";

export default HomeNavigation = createStackNavigator(
    {
        [Routes.Home]: { screen: HomeView },
        [Routes.Featured]: { screen: FeaturedView },
        [Routes.ItemDetails]: { screen: ItemDetailsView }
    },
    {
        initialRouteName: Routes.Home,
    }
);