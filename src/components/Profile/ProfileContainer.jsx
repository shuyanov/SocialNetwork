import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUsersProfile, setContacts } from './../../redux/reducer-post';

import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

class ProfileContainerofile extends React.Component {
  
  componentDidMount() {
    let userId = this.props.router.params.userId;

    if(!userId){
      userId = 2;
    }
    
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        this.props.setUsersProfile(response.data)
        this.props.setContacts(response.data)
      });
  }

  render() {
    return (
      <Profile {...this.props}
        profilePhoto={this.props.profilePhoro}
        userContacts={this.props.userContacts}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profilePhoro: state.PostsElements.profilePhoto,
    userContacts: state.PostsElements.userContacts,
  }
}

let WithUrlDataContainerComponent =  withRouter(ProfileContainerofile)

export default connect(mapStateToProps, { setUsersProfile, setContacts })(WithUrlDataContainerComponent);