import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {setUsersProfile} from './../../redux/reducer-post'

class ProfileContainerofile extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUsersProfile(response.data)
      });
  }

  render() {
    return (
      <Profile {...this.props}
      profilePhoto = {this.props.profilePhoro} 
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profilePhoro: state.PostsElements.profilePhoto,
  }
}

export default connect(mapStateToProps, { setUsersProfile })(ProfileContainerofile);