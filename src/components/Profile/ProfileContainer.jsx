import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile, getStatus, updateStatus } from './../../redux/reducer-post';
import { useLocation, useNavigate, useParams } from "react-router-dom";

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
    if (!userId) {
      userId = 27855;
    }
    this.props.getProfile(userId)
    this.props.getStatus(userId) 
  }

  

  render() {
    return (
      <Profile {...this.props}
        profilePhoto={this.props.profilePhoro}
        userContacts={this.props.userContacts}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profilePhoro: state.PostsElements.profilePhoto,
    userContacts: state.PostsElements.userContacts,
    status: state.PostsElements.status
  }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainerofile)
export default connect(mapStateToProps, { getProfile, getStatus, updateStatus })(WithUrlDataContainerComponent);