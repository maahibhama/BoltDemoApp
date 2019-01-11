import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Image, StyleSheet, Text } from "react-native";
import { Icons } from "../../common/Assets";
import { Color } from "../../common/Colors";
import { AppFont } from "../../common/Fonts";

export default class BaseNavigationHeader extends PureComponent {
    static propTypes = {
        navigation: PropTypes.object.isRequired,
        title: PropTypes.string
    };

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <TouchableHighlight onPress={() => { this.props.navigation.goBack() }}
                        underlayColor={Color.themeBackground}
                        style={styles.backIconStyle}>
                        <Image source={Icons.back} style={styles.backIcon} />
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
        flexDirection: "row",
    },
    backIconStyle: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    backIcon: {
        tintColor: Color.themeText
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
