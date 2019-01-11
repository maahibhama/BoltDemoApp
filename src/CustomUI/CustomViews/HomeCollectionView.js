import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, FlatList } from "react-native";
import Routes from "../../Navigation/Routes"
import ItemHeaderView from "./ItemHeaderView";
import ItemCell from "../Cells/ItemCell";

export default class HomeCollectionView extends PureComponent {
    static propTypes = {
        data: PropTypes.array,
        headerTitle: PropTypes.string,
        navigation: PropTypes.object.isRequired
    };

    static defaultProps = {
        data: [],
        headerTitle: ""
    }

    renderItem = this.renderItem.bind(this)

    onClickSeeAll() {
        this.props.navigation.navigate(Routes.Featured)
    }

    onTouchCategory(item) {
        this.props.navigation.navigate(Routes.ItemDetails)
    }

    render() {
        return (
            <View style={styles.containerView}>
                <ItemHeaderView title={this.props.headerTitle} onClickSeeAll={() => { this.onClickSeeAll() }} />
                <FlatList
                    extraData={this.state}
                    data={this.props.data}
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
            <ItemCell info={item} onTouch={() => { this.onTouchCategory(item) }} containerWidth={200} />
        )
    }

}

const styles = StyleSheet.create({
    containerView: {
        marginBottom: 20,
    },
    tableView: {
        paddingHorizontal: 10
    },
})   