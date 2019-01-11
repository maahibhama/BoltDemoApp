import { createStackNavigator } from "react-navigation";
import Routes from "./Routes";
import MyCartView from "../Views/MyCart/MyCartView";
import ConfirmationView from "../Views/MyCart/ConfirmationView";
import CreateAddressView from "../Views/MyCart/CreateAddressView";
import AddressListView from "../Views/MyCart/AddressListView";
import CheckoutView from "../Views/MyCart/CheckoutView";
import PaymentView from "../Views/MyCart/PaymentView";
import HomeNavigation from "./HomeNavigation";

export default MyCartNavigation = createStackNavigator(
    {
        [Routes.MyCart]: { screen: MyCartView },
        [Routes.Confirmation]: { screen: ConfirmationView },
        [Routes.CreateAddress]: { screen: CreateAddressView },
        [Routes.AddressList]: { screen: AddressListView },
        [Routes.Checkout]: { screen: CheckoutView },
        [Routes.Payment]: { screen: PaymentView }
    },
    {
        initialRouteName: Routes.MyCart,
    }
);