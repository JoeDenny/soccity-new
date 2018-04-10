import React, { Component } from 'react';

class UserActivity extends Component {
    render() {
        let allActivity;   

            
        if(this.props.activity) {
            // console.log(this.props.activity);
            
            // const keys = Object.keys(this.props.activity);
            
            // console.log('keys', keys);
            
            // this.props.activity.map((item) => {
            //     console.log('item', item);
                
            //     return true;
            // })
            
            // allActivity = this.props.activity.map(item => {
            //     console.log('item', item);
                
            //     return (
            //        <li>joe</li>
            //     );
            // });
        }    
       return(
           <div>{allActivity}</div>
       )
    }
}

export default UserActivity;