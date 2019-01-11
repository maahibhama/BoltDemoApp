import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import MenuNavigationHeader from '../../CustomUI/navigation-header/MenuNavigationHeader';

export default class LanguageView extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <MenuNavigationHeader navigation={this.props.navigation} title={"Language"} />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topView: {
        paddingHorizontal: 20
    },
});
