import { createStackNavigator } from "react-navigation";
import Routes from "./Routes";
import MyOrdersView from "../Views/MyOrders/MyOrdersView";

export default MyOrdersNavigation = createStackNavigator(
    {
        [Routes.MyOrders]: { screen: MyOrdersView }
    },
    {
        initialRouteName: Routes.MyOrders,
    }
);