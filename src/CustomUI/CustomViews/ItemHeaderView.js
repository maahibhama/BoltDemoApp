import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Image, StyleSheet, Text } from "react-native";
import { Color } from "../../common/Colors";
import { AppFont } from "../../common/Fonts";

export default class ItemHeaderView extends PureComponent {
    static propTypes = {
        title: PropTypes.string,
        onClickSeeAll: PropTypes.func
    };

    static defaultProps = {
        title: "",
        onClickSeeAll: () => { }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleTextStyle}>{this.props.title}</Text>
                <Text style={styles.sellAllTextStyle} onPress={this.props.onClickSeeAll}>{"See all"}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    titleTextStyle:{
        fontSize: 22,
        fontFamily: AppFont.titleExtraLargeMedium.name,
        fontWeight: AppFont.titleExtraLargeMedium.weight,
        color: Color.darkText
    },
    sellAllTextStyle:{
        fontSize: AppFont.titleSmallMedium.size,
        fontFamily: AppFont.titleSmallMedium.name,
        fontWeight: AppFont.titleSmallMedium.weight,
        color: Color.themeText
    }
})  