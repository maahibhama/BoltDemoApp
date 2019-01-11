import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Image, StyleSheet, Text } from "react-native";
import { DrawerActions } from 'react-navigation';

import { Icons } from "../../common/Assets";
import { Color } from "../../common/Colors";
import { AppFont } from "../../common/Fonts";

export default class MenuNavigationHeader extends PureComponent {
    static propTypes = {
        navigation: PropTypes.object.isRequired,
        title: PropTypes.string
    };

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <TouchableHighlight onPress={() => { this.props.navigation.dispatch(DrawerActions.openDrawer()) }}
                        underlayColor={Color.themeBackground}
                        style={styles.backIconStyle}>
                        <Image source={Icons.menu} style={styles.backIcon} />
                    </TouchableHighlight>
                    <View style={styles.middleView}></View>
                    <TouchableHighlight onPress={() => { }}
                        underlayColor={Color.themeBackground}
                        style={styles.backIconStyle}>
                        <Image source={Icons.notification} style={styles.backIcon} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { }}
                        underlayColor={Color.themeBackground}
                        style={styles.filterStyle}>
                        <Image source={Icons.filter} style={styles.backIcon} />
                    </TouchableHighlight>
                </View>
                {this.props.title && <View style={styles.topView}>
                    <Text style={styles.headerTitle}>{this.props.title}</Text>
                </View>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingHorizontal: 10,
        flexDirection: "row"
    },
    backIconStyle: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    backIcon: {
        tintColor: Color.themeText
    },
    middleView: {
        flex: 1
    },
    filterStyle: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 5
    },
    topView: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    headerTitle: {
        fontSize: 30,
        fontFamily: AppFont.titleExtraLargeMedium.name,
        fontWeight: AppFont.titleExtraLargeMedium.weight,
        color: Color.darkText
    },
});
