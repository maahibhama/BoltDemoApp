import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import MenuNavigationHeader from '../../CustomUI/navigation-header/MenuNavigationHeader';
import { FlatList } from 'react-native-gesture-handler';
import ItemCell from '../../CustomUI/Cells/ItemCell';
import { FavoriteItems } from '../../common/Constants';
import BaseNavigationHeader from '../../CustomUI/navigation-header/BaseNavigationHeader';

export default class FeaturedView extends Component {
    static navigationOptions = {
        header: null
    }

    renderItem = this.renderItem.bind(this);

    onTouchItem() {

    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <BaseNavigationHeader navigation={this.props.navigation} title={"Featured"}/>
                <FlatList
                    extraData={this.state}
                    data={FavoriteItems}
                    renderItem={this.renderItem}
                    numColumns={2}
                    keyExtractor={(item, index) => item.id}
                    style={styles.tableView}
                />
            </SafeAreaView>
        );
    }

    renderItem({ item }) {
        return (
            <ItemCell info={item} onTouch={() => this.onTouchItem(item)} />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tableView: {
        paddingHorizontal: 10,
        flex: 1
    }
});
