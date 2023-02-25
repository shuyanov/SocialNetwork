import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
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

export default compose(
  //withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(PostsNews)