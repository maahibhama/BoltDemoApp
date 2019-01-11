import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Image, StyleSheet, Text, FlatList } from "react-native";
import { Color } from "../../common/Colors";
import { AppFont } from "../../common/Fonts";
import { Icons } from "../../common/Assets";
import Routes from "../../Navigation/Routes"
import ItemHeaderView from "./ItemHeaderView";
import { Categories } from "../../common/Constants";
import CategorySubCell from "../Cells/CategorySubCell";

export default class CategoriesSubView extends PureComponent {
    static propTypes = {
        data: PropTypes.array,
        navigation: PropTypes.object.isRequired
    };

    static defaultProps = {
        data: []
    }

    renderItem = this.renderItem.bind(this)

    onClickSeeAll() {
        this.props.navigation.navigate(Routes.Featured)
    }

    onTouchCategory(item) {
        this.props.navigation.navigate(Routes.Featured)
    }

    render() {
        return (
            <View style={styles.containerView}>
                <ItemHeaderView title={"Categories"} onClickSeeAll={() => { this.onClickSeeAll() }} />
                <FlatList
                    extraData={this.state}
                    data={Categories}
                    horizontal={true}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.tableView}
                />
            </View>
        )
    }

    renderItem({ item }) {
        return (
            <CategorySubCell info={item} onTouch={() => { this.onTouchCategory(item) }} />
        )
    }

}

const styles = StyleSheet.create({
    tableView: {
        paddingHorizontal: 10
    },
})   