import React, { Component } from 'react';

import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import WebPush from './WebPush'
import {payloadFromSubscription} from './Utility'

const applicationServerPublicKey = "BHFaW1mDZI3OnRsW6a90NcN4exrmM1RlDDwFl99CKwbWcST-BdKBPqckh-MoZ8Xh9QUqtVjiL3cCMy_uN77JNfY"

class Notification extends Component {
  constructor(props) {
    super(props)

    this.state = {
      subscriveUserEnabled: false,
      subscription: {endpoint: ''},
    }

    this.onWebPushToggle = this.onWebPushToggle.bind(this)
    this.onUpdateSubscriptionOnServer = this.onUpdateSubscriptionOnServer.bind(this)
    this.onSubscriptionFailed = this.onSubscriptionFailed.bind(this)
  }

  onWebPushToggle() {
    this.setState({
      subscriveUserEnabled: !this.state.subscriveUserEnabled,
    })
  }

  onUpdateSubscriptionOnServer(subscription) {
    console.log("onUpdateSubscriptionOnServer:", subscription)
    var payload = JSON.stringify(payloadFromSubscription(subscription));
    this.setState({subscription: subscription})

    this.props.saveSubscription(payload);   
  }

  onSubscriptionFailed(error) {
    console.log("onSubscriptionFailed:", error)
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div >
          <Toggle
            style={{marginRight: 5}}
            onToggle={()=> {this.onWebPushToggle()}}
          />
          <WebPush
            subscriveUserEnabled={this.state.subscriveUserEnabled}
            applicationServerPublicKey={applicationServerPublicKey}
            onSubscriptionFailed={this.onSubscriptionFailed}
            onUpdateSubscriptionOnServer={this.onUpdateSubscriptionOnServer}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Notification;