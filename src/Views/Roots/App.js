import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from "prop-types";

import AppNavigation from '../../Navigation/AppNavigation';
import AppAlert from '../../CustomUI/Alerts/AppAlert';
import Loader from '../../CustomUI/Loading/Loader';

export default class App extends Component {

    static childContextTypes = {
        showAlert: PropTypes.func,
        presentActivityIndicator: PropTypes.func,
        dismissActivityIndicator: PropTypes.func
    }

    state = {
        showAppAlert: false,
        activityIndicatorVisible: false
    }

    getChildContext() {
        return {
            presentActivityIndicator: this.presentActivityIndicator.bind(this),
            dismissActivityIndicator: this.dismissActivityIndicator.bind(this),
            showAlert: this.showAlert.bind(this)
        };
    }

    presentActivityIndicator() {
        this.setState({
            activityIndicatorVisible: true
        });
    }

    dismissActivityIndicator() {
        this.setState({
            activityIndicatorVisible: false
        });
    }

    showAlert({ title, message = "" }) {
        this.setState({
            showAppAlert: true,
            appAlertTitle: title,
            appAlertMessage: message
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Loader isLoading={this.state.activityIndicatorVisible} />
                {this.renderAppAlert()}
                <AppNavigation />
            </View>
        )
    }

    renderAppAlert() {
        if (this.state.showAppAlert === true) {
            return (
                <AppAlert showAlert={this.state.showAppAlert}
                    title={this.state.appAlertTitle}
                    message={this.state.appAlertMessage}
                    callerView={this}
                />)
        } else {
            return null
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})