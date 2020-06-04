import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderAdmin = (post) => {
    return (
      <div className='d-flex justify-content-between'>
        <Link to={`/posts/edit/${post.id}`} className='btn btn-primary'>
          Edit
        </Link>
        <Link to={`/posts/delete/${post.id}`} className='btn btn-danger'>
          Delete
        </Link>
      </div>
    );
  };

  renderList = () => {
    // sort by id so latest at top of list
    this.props.posts.sort(function (a, b) {
      return b.id - a.id;
    });

    return this.props.posts.map((post) => {
      return (
        // jsx
        <div className='card py-2 px-4' key={post.id}>
          <div className='card-body'>
            <div>
              <Link to={`/posts/${post.id}`} className='h2 text-center'>
                {post.title}
              </Link>
              <div>
                <p>
                  Category:{' '}
                  <span className='text-info'>
                    <strong>{post.categories}</strong>
                  </span>{' '}
                </p>
              </div>
              <p>{post.content}</p>
            </div>
            {this.renderAdmin(post)}
          </div>
        </div>
      );
    });
  };

  renderCreate() {
    return (
      <div style={{ textAlign: 'right' }}>
        <Link to='/posts/new' className='btn btn-primary btn-cta'>
          Create Post
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className='px-2 py-2 border-left border-right sticky-top bg-light'>
          <div className='float-right'>{this.renderCreate()}</div>
          <h2>Posts</h2>
        </div>
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: Object.values(state.posts) }; // convert object to array so we can map thru
};

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
