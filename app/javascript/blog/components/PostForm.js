import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class FormCreate extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='alert alert-danger mt-2' role='alert'>
          {error}
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    // const idName = ` ${meta.error && meta.touched ? 'inputError' : ''}`;
    return (
      <div className='form-group'>
        <label>{label}</label>
        <input {...input} autoComplete='off' className='form-control' />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div className='form-group'>
          <Field name='title' component={this.renderInput} label='Title' />
        </div>

        <div className='form-group'>
          <Field
            name='categories'
            component={this.renderInput}
            label='Category'
          />
        </div>

        <div className='form-group'>
          <Field name='content' component={this.renderInput} label='Content' />
        </div>

        <button className='btn btn-primary rounded'>Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    // runs only if user doesn't enter a title
    errors.title = 'You must enter a title.';
  }

  if (!formValues.category) {
    // runs only if user doesn't enter a title
    errors.category = 'You must enter a category.';
  }

  if (!formValues.content) {
    errors.content = 'You must enter some content.';
  }

  return errors;
};

export default reduxForm({
  form: 'postForm',
  validate,
})(FormCreate);
