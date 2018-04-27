import React, { Component } from 'react';

class FollowingActivity extends Component {
    render() {
        let followers,
            followings,
            followersCount,
            followingsCount;

        if(this.props.followers) {            
            
            followers = this.props.followers.map(follower => {                
                return (
                    <li>{follower}</li>        
                );
            }); 
            followersCount = followers.length;          
        }

        if(this.props.followings) {            
            
            followings = this.props.followings.map(following => {                
                return (
                    <li>{following}</li>        
                );
            });   
            followingsCount = followingsCount.length;          
                    
        }    
       return(
           <div className="activity container">
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <h5>Followers: {followersCount}</h5>
                    <ul>{followers}</ul>
                </div>
                <div className="col-xs-12 col-md-6">
                    <h5>Following: {followingsCount}</h5>
                    <ul>{followings}</ul>
                </div>
            </div>
           </div>
       )
    }
}

export default FollowingActivity;