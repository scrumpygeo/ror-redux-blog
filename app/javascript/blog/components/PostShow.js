import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }
  render() {
    if (!this.props.post) {
      return <div>Loading...</div>;
    }

    const { title, categories, content } = this.props.post;

    return (
      <div className='jumbotron'>
        <h1 className='text-center'>{title} </h1>

        <h5>
          Category: <span className='text-success'> {categories} </span>
        </h5>
        <p className='mt-3 border-top'>{content}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchPost })(PostsShow);
