import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View, TouchableHighlight, Text } from 'react-native';
import { Icons, Images } from '../../common/Assets';
import { ScrollView } from 'react-native-gesture-handler';
import { Color } from '../../common/Colors';
import { AppFont } from '../../common/Fonts';
import BaseNavigationHeader from '../../CustomUI/navigation-header/BaseNavigationHeader';
import ImageScrollerView from '../../CustomUI/CustomViews/ImageScrollerView';
import { FavoriteItems, ImageScrollers, SizeTypes } from '../../common/Constants';

export default class ItemDetailsView extends Component {
    static navigationOptions = {
        header: null
    }

    buyNowButtonAction() {

    }

    addToCartButtonAction() {

    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <BaseNavigationHeader navigation={this.props.navigation} />
                <ScrollView>
                    {this.renderImageView()}
                    {this.renderTitleWithPricingView()}
                    {this.renderRatingAndReviewView()}
                    {this.renderDescriptionView()}
                    {this.renderSelectSizeColorTitleView()}
                    {this.selectSizeValueView()}
                </ScrollView>
                {this.renderBottomButtons()}
            </SafeAreaView>
        );
    }

    renderImageView() {
        return (
            <ImageScrollerView data={ImageScrollers} navigation={this.props.navigation} />
        )
    }

    renderTitleWithPricingView() {
        return (
            <View style={styles.titlePringView}>
                <Text style={styles.titleText}>{"Black turtleneck top"}</Text>
                <View style={styles.pricingView}>
                    <Text style={styles.displayPriceText}>{"$42"}</Text>
                    <Text style={styles.actualPriceText}>{"$62"}</Text>
                </View>
            </View>
        )
    }

    renderRatingAndReviewView() {
        return (
            <View style={styles.ratingAndReviewView}>
                <Text style={styles.ratingText}>{"4.2"}</Text>
                <Text style={styles.ratingType}>{"Very Good"}</Text>
                <Text style={styles.reviewText}>{"49 Reviews"}</Text>
            </View>
        )
    }

    renderDescriptionView() {
        return (
            <View style={styles.descriptionView}>
                <Text style={styles.descriptionTitleText}>{"Description"}</Text>
                <Text style={styles.descriptionValueText}>{"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine."}</Text>
            </View>
        )
    }

    renderSelectSizeColorTitleView() {
        return (
            <View style={styles.selectSizeColorTitleView}>
                <Text style={styles.ratingType}>{"Select Size"}</Text>
                <Text style={styles.ratingType}>{"Select Color"}</Text>
            </View>
        )
    }

    selectSizeValueView() {
        return (
            <View style={styles.selectSizeValueView}>
                {this.renderSize()}
            </View>
        )
    }

    renderSize() {
        return SizeTypes.map((size, i) => {
            const selectedStyles = size.isSelected ? {
                backgroundColor: Color.themeDark,
                color: Color.themeBackground,
            } : {}
            return (<Text key={size.id} style={[styles.sizeTextView, selectedStyles]}>{size.name}</Text>)
        })
    }

    renderBottomButtons() {
        return (
            <View style={styles.bottomView}>
                <TouchableHighlight onPress={() => { this.addToCartButtonAction() }}
                    underlayColor={Color.themeBackground}
                    style={styles.addCartContainer}>
                    <Text style={styles.addCartText}>{"ADD TO CART"}</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { this.buyNowButtonAction() }}
                    underlayColor={Color.themeBackground}
                    style={styles.buyNowContainer}>
                    <Text style={styles.buyButtonText}>{"BUY NOW"}</Text>
                </TouchableHighlight>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageView: {
        width: 300,
        height: 200
    },
    titlePringView: {
        paddingHorizontal: 20
    },
    titleText: {
        fontSize: 25,
        fontFamily: AppFont.titleMedium.name,
        fontWeight: AppFont.titleMedium.weight,
        color: Color.darkText
    },
    pricingView: {
        paddingVertical: 10,
        alignItems: "center",
        flexDirection: "row"
    },
    displayPriceText: {
        fontSize: AppFont.titleExtraLargeMedium.size,
        fontFamily: AppFont.titleExtraLargeMedium.name,
        fontWeight: AppFont.titleExtraLargeMedium.weight,
        color: Color.themeDark
    },
    actualPriceText: {
        textDecorationLine: "line-through",
        paddingLeft: 20,
        fontSize: AppFont.titleExtraSmall.size,
        fontFamily: AppFont.titleExtraSmall.name,
        fontWeight: AppFont.titleExtraSmall.weight,
        color: Color.darkText
    },
    ratingAndReviewView: {
        borderTopWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: Color.lightBorder,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    ratingText: {
        fontSize: AppFont.titleLargeMedium.size,
        fontFamily: AppFont.titleLargeMedium.name,
        fontWeight: AppFont.titleLargeMedium.weight,
        color: Color.themeBackground,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 4,
        backgroundColor: Color.themeDark,
        overflow: "hidden"
    },
    ratingType: {
        paddingHorizontal: 10,
        fontSize: AppFont.titleLargeMedium.size,
        fontFamily: AppFont.titleLargeMedium.name,
        fontWeight: AppFont.titleLargeMedium.weight,
        color: Color.darkText
    },
    reviewText: {
        flex: 1,
        fontSize: AppFont.titleSmallMedium.size,
        fontFamily: AppFont.titleSmallMedium.name,
        fontWeight: AppFont.titleSmallMedium.weight,
        color: Color.themeDark,
        textAlign: "right"
    },
    descriptionView: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    descriptionTitleText: {
        marginBottom: 10,
        fontSize: AppFont.titleMedium.size,
        fontFamily: AppFont.titleMedium.name,
        fontWeight: AppFont.titleMedium.weight,
        color: Color.darkText,
    },
    descriptionValueText: {
        marginBottom: 10,
        fontSize: AppFont.titleSmall.size,
        fontFamily: AppFont.titleSmall.name,
        fontWeight: AppFont.titleSmall.weight,
        color: Color.themeText,
    },
    selectSizeColorTitleView: {
        borderTopWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderColor: Color.lightBorder,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    selectSizeValueView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
    },
    sizeTextView: {
        lineHeight: 40,
        textAlign: "center",
        marginLeft: 10,
        fontSize: AppFont.titleLargeMedium.size,
        fontFamily: AppFont.titleLargeMedium.name,
        fontWeight: AppFont.titleLargeMedium.weight,
        height: 40,
        width: 40,
        borderRadius: 4,
        backgroundColor: Color.offWhiteBackground,
        color: Color.darkText,
        overflow: "hidden"
    },
    bottomView: {
        height: 50,
        flexDirection: "row"
    },
    addCartContainer:{
        flex: 1,
        backgroundColor: Color.offWhiteBackground,
        justifyContent: "center",
        alignItems: "center"
    },
    buyNowContainer: {
        flex: 1,
        backgroundColor: Color.themeDark,
        justifyContent: "center",
        alignItems: "center"
    },
    addCartText: {
        fontSize: AppFont.titleLargeMedium.size,
        fontFamily: AppFont.titleLargeMedium.name,
        fontWeight: AppFont.titleLargeMedium.weight,
        color: Color.darkText
    },
    buyButtonText: {
        fontSize: AppFont.titleLargeMedium.size,
        fontFamily: AppFont.titleLargeMedium.name,
        fontWeight: AppFont.titleLargeMedium.weight,
        color: Color.themeBackground
    }
});
