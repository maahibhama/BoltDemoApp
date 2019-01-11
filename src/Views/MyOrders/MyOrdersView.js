import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import MenuNavigationHeader from '../../CustomUI/navigation-header/MenuNavigationHeader';
import { FavoriteItems } from '../../common/Constants';
import OrderItemCell from '../../CustomUI/Cells/OrderItemCell';

export default class MyOrdersView extends Component {
    static navigationOptions = {
        header: null
    }

    renderItem = this.renderItem.bind(this);

    onTouchItem() {

    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <MenuNavigationHeader navigation={this.props.navigation} title={"My Orders"} />
                <FlatList
                    extraData={this.state}
                    data={FavoriteItems}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.id}
                    style={styles.tableView}
                />
            </SafeAreaView>
        );
    }

    renderItem({ item }) {
        return (
            <OrderItemCell info={item} onTouch={() => this.onTouchItem(item)} />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tableView: {
        flex: 1
    }
});
