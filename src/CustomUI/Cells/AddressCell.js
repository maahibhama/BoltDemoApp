import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Image, StyleSheet, Text } from "react-native";
import { Color } from "../../common/Colors";
import { AppFont } from "../../common/Fonts";
import { Icons } from "../../common/Assets";

export default class AddressCell extends PureComponent {
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
                <View style={styles.container}>
                    <View style={styles.detailView}>
                        <Text style={styles.priceTextStyle}>{this.props.info.name}</Text>
                        <Text style={styles.detailsTextStyle}>{this.props.info.addressLane}</Text>
                        <Text style={styles.detailsTextStyle}>{this.props.info.city}</Text>
                        <Text style={styles.detailsTextStyle}>{this.props.info.postalCode}</Text>
                        <Text style={styles.detailsTextStyle}>{this.props.info.phoneNumber}</Text>
                    </View>
                    <View style={styles.radioView}>
                        <Image source={this.props.info.isSelected ? Icons.radioChecked : Icons.radioUnchecked} />
                    </View>
                </View>
            </TouchableHighlight>)
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row"
    },
    detailView: {
        flex: 1,
    },
    priceTextStyle: {
        fontSize: AppFont.titleLargeBold.size,
        fontFamily: AppFont.titleLargeBold.name,
        fontWeight: AppFont.titleLargeBold.weight,
        color: Color.themeDark
    },
    detailsTextStyle: {
        fontSize: AppFont.titleMedium.size,
        fontFamily: AppFont.titleMedium.name,
        fontWeight: AppFont.titleMedium.weight,
        color: Color.darkText
    },
    radioView: {
        width: 30,
        justifyContent: "center"
    }
});
