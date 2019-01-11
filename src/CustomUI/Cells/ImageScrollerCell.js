import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { TouchableHighlight, Image, StyleSheet, View } from "react-native";

export default class ImageScrollerCell extends PureComponent {
    static propTypes = {
        info: PropTypes.object.isRequired,
        width: PropTypes.number,
        onTouch: PropTypes.func
    };

    static defaultProps = {
        width: 300,
        onTouch: () => { }
    };

    render() {
        return (
            <TouchableHighlight onPress={this.props.onTouch} underlayColor={'transparent'}>
                <View style={[styles.container, { width: this.props.width }]}>
                    <Image source={this.props.info.image} style={styles.imageView} />
                </View>
            </TouchableHighlight>)
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 0,
        width: 300,
        aspectRatio: 16/9
    },
    imageView: {
        resizeMode: "cover",
        width: '100%',
        height: '100%',
    }
});
