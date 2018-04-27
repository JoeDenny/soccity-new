import React, { Component } from 'react';
import UserCard from './UserCard';

class FollowingActivity extends Component {
    render() {
        let followers,
            followings,
            followersCount,
            followingsCount;

        if(this.props.followers) {               
            
            followers = this.props.followers.map((follower, i) => {                
                return (
                    <UserCard key={i} user={follower} />     
                );
            }); 

            followersCount = followers.length;          
        }

        if(this.props.followings) {            
            
            followings = this.props.followings.map((following, i) => {                
                return (
                    <UserCard key={i} user={following} />      
                );
            });   
            followingsCount = followings.length;
        }    
       return(
           <div className="activity following container">
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <h4 className="subtitle">Followers ({followersCount})</h4>
                    <ul>{followers}</ul>
                </div>
                <div className="col-xs-12 col-md-6">
                    <h4 className="subtitle">Following ({followingsCount})</h4>
                    <ul>{followings}</ul>
                </div>
            </div>
           </div>
       )
    }
}

export default FollowingActivity;