import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';
import history from '../history';
import { fetchPost, deletePost } from '../actions';

class PostDelete extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <Fragment>
        <button
          onClick={() => this.props.deletePost(id)}
          className='btn btn-danger'
        >
          Delete
        </button>
        <Link to='/' className='btn btn-light ml-1'>
          Cancel
        </Link>
      </Fragment>
    );
  }

  renderContent() {
    if (!this.props.post) {
      return 'Are you sure you want to delete this post?';
    }
    return `Are you sure you want to delete the post with title: ${this.props.post.title}?`;
  }

  render() {
    return (
      <Modal
        title='Delete Post'
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => {
          history.push('/');
        }}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchPost, deletePost })(PostDelete);
