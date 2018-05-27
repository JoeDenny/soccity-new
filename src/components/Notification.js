import React from 'react';
import Notification from 'react-web-notification';
import Logo from './logo_black.png';

//allow react dev tools work
window.React = React;

class NotificationWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      ignore: true,
      title: ''
    };
  }

  componentWillReceiveProps = (newProps) => {

      
      if(newProps.notificationsEnabled) {
          console.log('if');
          
          this.handleButtonClick();
      }
  }

  handlePermissionGranted(){
    console.log('Permission Granted');
    this.setState({
      ignore: false
    });
  }
  handlePermissionDenied(){
    console.log('Permission Denied');
    this.setState({
      ignore: true
    });
  }
  handleNotSupported(){
    console.log('Web Notification not Supported');
    this.setState({
      ignore: true
    });
  }

  handleNotificationOnClick(e, tag){
    console.log(e, 'Notification clicked tag:' + tag);
  }

  handleNotificationOnError(e, tag){
    console.log(e, 'Notification error tag:' + tag);
  }

  handleNotificationOnClose(e, tag){
    console.log(e, 'Notification closed tag:' + tag);
  }

  handleNotificationOnShow(e, tag){
    console.log(e, 'Notification shown tag:' + tag);
  }

  handleButtonClick() {

    if(this.state.ignore) {
      return;
    }

    const now = Date.now();

    const title = 'Desktop Notifications Enabled!';
    const body = 'Hello ' + this.props.user.name;
    const tag = now;
    const icon = Logo;

    const options = {
      tag: tag,
      body: body,
      icon: icon,
      lang: 'en',
      dir: 'ltr'
    }
    this.setState({
      title: title,
      options: options
    });
  }

  render() {

    return (
      <div>
        {/* <button onClick={this.handleButtonClick.bind(this)}>Notif!</button> */}
        <Notification
          ignore={this.state.ignore && this.state.title !== ''}
          notSupported={this.handleNotSupported.bind(this)}
          onPermissionGranted={this.handlePermissionGranted.bind(this)}
          onPermissionDenied={this.handlePermissionDenied.bind(this)}
          onShow={this.handleNotificationOnShow.bind(this)}
          onClick={this.handleNotificationOnClick.bind(this)}
          onClose={this.handleNotificationOnClose.bind(this)}
          onError={this.handleNotificationOnError.bind(this)}
          timeout={5000}
          title={this.state.title}
          options={this.state.options}
        />
      </div>
    )
  }
};

export default NotificationWrapper;