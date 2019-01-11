import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View, Image, TextInput } from 'react-native';
import MenuNavigationHeader from '../../CustomUI/navigation-header/MenuNavigationHeader';
import { Icons } from '../../common/Assets';
import { ScrollView } from 'react-native-gesture-handler';
import { Color } from '../../common/Colors';
import { AppFont } from '../../common/Fonts';
import CategoriesSubView from '../../CustomUI/CustomViews/CategoriesSubView';
import HomeCollectionView from '../../CustomUI/CustomViews/HomeCollectionView';
import { FavoriteItems } from '../../common/Constants';

export default class HomeView extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <MenuNavigationHeader navigation={this.props.navigation} title={"Home"} />
                <ScrollView>
                    {this.renderSearchBar()}
                    {this.renderCategoriesView()}
                    {this.renderFeaturedView()}
                    {this.renderBestSellView()}
                </ScrollView>
            </SafeAreaView>
        );
    }

    renderSearchBar() {
        return (
            <View style={styles.searchBarStyle}>
                <View style={styles.searchBarButton}>
                    <Image source={Icons.search} style={styles.searchIconStyle} />
                </View>
                <View style={styles.lineView} />
                <TextInput
                    underlineColorAndroid={'transparent'}
                    ref={'searchTextField'}
                    placeholder={"Search Your Product"}
                    returnKeyType={'next'}
                    autoCorrect={false}
                    style={styles.inputViewStyle}
                    onChangeText={(text) => this.setState({ search: text })}
                    onSubmitEditing={(event) => { }}
                />
            </View>
        )
    }

    renderCategoriesView() {
        return (
            <CategoriesSubView navigation={this.props.navigation} data={[]} />
        )
    }

    renderFeaturedView() {
        return (
            <HomeCollectionView navigation={this.props.navigation} data={FavoriteItems} headerTitle={"Featured"} />
        )
    }

    renderBestSellView() {
        return (
            <HomeCollectionView navigation={this.props.navigation} data={FavoriteItems} headerTitle={"Best Sell"} />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBarStyle: {
        height: 50,
        marginHorizontal: 20,
        marginVertical: 10,
        alignItems: "center",
        flexDirection: "row",
        overflow: "visible",
        shadowColor: Color.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        backgroundColor: Color.themeBackground,
        borderRadius: 10,
        elevation: 5
    },
    searchBarButton: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    searchIconStyle: {
        resizeMode: "center"
    },
    lineView: {
        width: 1,
        height: 30,
        backgroundColor: Color.brightBorder
    },
    inputViewStyle: {
        flex: 1,
        height: 50,
        padding: 0,
        paddingLeft: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        fontSize: AppFont.titleMedium.size,
        fontFamily: AppFont.titleMedium.name,
        fontWeight: AppFont.titleMedium.weight
    }
});
