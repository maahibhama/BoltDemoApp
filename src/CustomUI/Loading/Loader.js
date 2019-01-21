import React, { Component } from 'react'
import {
    ActivityIndicator,
    Modal,
    StyleSheet,
    View
} from 'react-native'

import { Color } from '../../common/Colors'

export default Loader = function (props) {
    let isLoading = props.isLoading
    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={isLoading}
            onRequestClose={() => { console.log('close modal') }}>

            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator size='large'
                        color={Color.themeLight}
                        animating={isLoading} />
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
        backgroundColor: Color.themeBackground,
        height: 100,
        width: 100,
        borderRadius: 10,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})