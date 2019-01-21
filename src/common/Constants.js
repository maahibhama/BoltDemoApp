import { Images, Logo } from "./Assets";

export const DrawerAction = {
    open: 'DrawerOpen',
    close: 'DrawerClose',
    toggle: 'DrawerToggle'
}

export const FavoriteItems = [
    { id: "1", image: Images.demoImage1, name: "Woman T-Shirt", price: "$34.00", company: "Next" },
    { id: "2", image: Images.demoImage2, name: "Man T-Shirt", price: "$34.00", company: "Lotto.LTD" },
    { id: "3", image: Images.demoImage3, name: "Woman T-Shirt", price: "$34.00", company: "Zara" },
    { id: "4", image: Images.demoImage4, name: "Blezer", price: "$34.00", company: "Lotto.LTD" },
    { id: "5", image: Images.demoImage5, name: "T-Shirt", price: "$34.00", company: "Next" },
    { id: "6", image: Images.demoImage6, name: "Shirt", price: "$34.00", company: "Lotto.LTD" },
    { id: "7", image: Images.demoImage7, name: "Woman T-Shir", price: "$34.00", company: "Bata" },
    { id: "8", image: Images.demoImage8, name: "Man T-Shirt", price: "$34.00", company: "Lotto.LTD" },
]

export const AddressList = [
    {
        id: "1",
        name: "Maahi Bhama",
        addressLane: "House 535 sector 4",
        city: "Panchkula",
        postalCode: "123245",
        phoneNumber: "+91123456789",
        isSelected: true
    },
    {
        id: "2",
        name: "Rajveer Singh",
        addressLane: "House 535 sector 4",
        city: "Panchkula",
        postalCode: "123245",
        phoneNumber: "+91123456789",
        isSelected: false
    },
    {
        id: "3",
        name: "Hitendra Kumar",
        addressLane: "House 535 sector 4",
        city: "Panchkula",
        postalCode: "123245",
        phoneNumber: "+91123456789",
        isSelected: false
    }
]

export const CheckoutItems = [
    { id: "1", image: Images.demoImage1, name: "Woman T-Shirt", price: "$34.00", company: "Next" },
    { id: "2", image: Images.demoImage2, name: "Man T-Shirt", price: "$34.00", company: "Lotto.LTD" },
]


export const CheckoutAddress = {
    id: "1",
    name: "Maahi Bhama",
    addressLane: "House 535 sector 4",
    city: "Panchkula",
    postalCode: "123245",
    phoneNumber: "+91123456789",
    isSelected: true
}

export const CardPaymentMethods = [
    { id: "1", image: Logo.visa, name: "Visa", details: "**** **** **** 4342", isSelected: true },
    { id: "2", image: Logo.paypal, name: "Paypal", details: "abc@xyz.com", isSelected: false },
    { id: "3", image: Logo.mastercard, name: "MasterCard", details: "**** **** **** 4342", isSelected: false },
    { id: "4", image: Logo.applePay, name: "Apple Pay", details: "**** **** **** 4342", isSelected: false }
]

export const Categories = [
    { id: "1", image: Images.categoryImage1, name: "Woman" },
    { id: "2", image: Images.categoryImage2, name: "Man" },
    { id: "3", image: Images.categoryImage3, name: "Kids" }
]


export const ImageScrollers = [
    { id: "1", image: Images.demoImage1 },
    { id: "2", image: Images.demoImage2 },
    { id: "3", image: Images.demoImage3 },
    { id: "4", image: Images.demoImage4 },
    { id: "5", image: Images.demoImage5 }
]

export const SizeTypes = [
    { id: "1", name: "S", isAvailable: true, isSelected: true },
    { id: "2", name: "M", isAvailable: true, isSelected: false },
    { id: "3", name: "L", isAvailable: true, isSelected: false },
    { id: "4", name: "XL", isAvailable: true, isSelected: false },
    { id: "5", name: "XXL", isAvailable: true, isSelected: false }
]

export const SettingType = {
    normal: "Normal",
    switch: "Switch"
}

export const SettingsData = [
    { id: "1", name: "Edit profile", type: SettingType.normal },
    { id: "2", name: "Change password", type: SettingType.normal },
    { id: "3", name: "Change language", type: SettingType.normal },
    { id: "4", name: "Receive notifications", type: SettingType.switch },
    { id: "5", name: "Receive newsletters", type: SettingType.switch },
    { id: "6", name: "Receive special offers", type: SettingType.switch },
    { id: "7", name: "Participate in Beta Program", type: SettingType.switch }
]

export const isLoginUser = "isLoginUser"
export const userEmail = "userEmail"
export const userPassword = "userPassword"