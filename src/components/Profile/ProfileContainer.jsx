import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile } from './../../redux/reducer-post';
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
      userId = 2;
    }
    this.props.getProfile(userId)
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
    isAunt: state.AuthElement.aunt,
    profilePhoro: state.PostsElements.profilePhoto,
    userContacts: state.PostsElements.userContacts,
  }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainerofile)
export default connect(mapStateToProps, { getProfile })(WithUrlDataContainerComponent);