import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { TouchableHighlight, Image, StyleSheet, Text, ImageBackground } from "react-native";
import { Color } from "../../common/Colors";
import { AppFont } from "../../common/Fonts";

export default class CategorySubCell extends PureComponent {
    static propTypes = {
        info: PropTypes.object.isRequired,
        onTouch: PropTypes.func
    };

    static defaultProps = {
        onTouch: () => { }
    };

    render() {
        return (
            <TouchableHighlight onPress={this.props.onTouch} underlayColor={'transparent'}>
                <ImageBackground source={this.props.info.image} resizeMode={'cover'} resizeMethod={'resize'} style={styles.container}>
                    <Text style={styles.titleTextStyle}>{this.props.info.name}</Text>
                </ImageBackground>
            </TouchableHighlight>)
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        width: 120,
        height: 70,
        margin: 10,
        overflow: "hidden",
        justifyContent: "center"
    },
    titleTextStyle: {
        textAlign: "center",
        fontSize: AppFont.titleSmallMedium.size,
        fontFamily: AppFont.titleSmallMedium.name,
        fontWeight: AppFont.titleSmallMedium.weight,
        color: Color.brightText
    }
});
