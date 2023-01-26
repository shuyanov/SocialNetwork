import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreate, newUpdatePostActionCreate } from '../../../redux/reducer-post';
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
    addPost: () => {dispatch(addPostActionCreate())},
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (PostsNews)

export default MyPostsContainer;