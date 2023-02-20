import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreate, newUpdatePostActionCreate } from '../../../redux/reducer-post';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import PostsNews from './Posts';

let mapStateToProps = (state) => {
  return {
    PostsElements: state.PostsElements.postData,
    newUpdatePostsText: state.PostsElements.newPostsText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    newUpdatePostText: (text) => {
      let action = newUpdatePostActionCreate(text);
      dispatch(action)
    },
    addPost: () => { dispatch(addPostActionCreate()) },
  }
}

let AuthRedirectComponent = withAuthRedirect(PostsNews) 
let mapStateToPropsForReduser = (state) => ({
    isAuth: state.AuthElement.isAuth
})
AuthRedirectComponent = connect(mapStateToPropsForReduser)(AuthRedirectComponent) 


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default MyPostsContainer;