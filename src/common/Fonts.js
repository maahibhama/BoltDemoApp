import { Platform } from 'react-native'

const systemFontName = (Platform.OS == 'ios') ? 'Helvetica' : 'Helvetica'

const FontWeight = {
    regular: 'normal',
    medium: '400',
    bold: 'bold'
}

function AppFontItem(name, size, weight) {
    this.name = name
    this.size = size
    this.weight = weight
}

export const AppFont = {
    titleExtraLarge: new AppFontItem(systemFontName, 20, FontWeight.regular),
    titleExtraLargeMedium: new AppFontItem(systemFontName, 20, FontWeight.medium),
    titleExtraLargeBold: new AppFontItem(systemFontName, 20, FontWeight.bold),

    titleLarge: new AppFontItem(systemFontName, 18, FontWeight.regular),
    titleLargeMedium: new AppFontItem(systemFontName, 18, FontWeight.medium),
    titleLargeBold: new AppFontItem(systemFontName, 18, FontWeight.bold),

    title: new AppFontItem(systemFontName, 16, FontWeight.regular),
    titleMedium: new AppFontItem(systemFontName, 16, FontWeight.medium),
    titleBold: new AppFontItem(systemFontName, 16, FontWeight.bold),

    titleSmall: new AppFontItem(systemFontName, 14, FontWeight.regular),
    titleSmallMedium: new AppFontItem(systemFontName, 14, FontWeight.medium),
    titleSmallBold: new AppFontItem(systemFontName, 14, FontWeight.bold),

    titleExtraSmall: new AppFontItem(systemFontName, 12, FontWeight.regular),
    titleExtraSmallMedium: new AppFontItem(systemFontName, 12, FontWeight.medium),
    titleExtraSmallBold: new AppFontItem(systemFontName, 12, FontWeight.bold)
}