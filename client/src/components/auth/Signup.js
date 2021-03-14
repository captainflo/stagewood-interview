import React, { useState } from 'react';
import renderField from './form/renderField';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions';
import { compose } from 'redux';
import { connect, useSelector } from 'react-redux';
import validate from './form/validation';
import Widget from '../utils/Widget';
import { gql, useMutation } from '@apollo/client';

const SIGNUP = gql`
  mutation SIGNUP_QUERY(
    $email: String!
    $password: String!
    $name: String!
    $username: String
    $avatar: String
  ) {
    signup(
      email: $email
      password: $password
      name: $name
      username: $username
      avatar: $avatar
    ) {
      token
      user {
        id
        name
        username
        email
        avatar
      }
    }
  }
`;

const Signup = (props) => {
  const error = useSelector((state) => state.auth.errorMessage);
  const [image, setImage] = useState('');
  const [publicId, setPublicId] = useState('');
  const [errorImage, setErrorImage] = useState('');
  const { handleSubmit, submitting } = props;

  // Mutation
  const [signup, { data }] = useMutation(SIGNUP);

  const onSubmit = (value) => {
    value.avatar = image;
    if (value.avatar === '') {
      setErrorImage('Required image');
    } else {
      async function asyncCall() {
        console.log('calling');
        const result = await signup({ variables: value });
        props.signupClient(result, () => {
          props.history.push('/dashboard');
        });
      }
      asyncCall();
    }
  };

  // Image Cluodinary
  let widget = window.cloudinary.createUploadWidget(
    {
      cloudName: 'dwtc6zep7',
      uploadPreset: 'bfmixeap',
    },
    (error, result) => {
      if (result.event === 'success') {
        setImage(result.info.url);
        setPublicId(result.info.public_id);
      }
    }
  );
  const showWidget = () => {
    widget.open();
  };

  const deletePhoto = async () => {
    const imageDelete = {
      img: publicId,
    };
    props.deleteImage(imageDelete);
    setImage('');
  };

  return (
    <div className="row no-gutters">
      <div className="col-md-7">
        <div className="wrapper-auth-image">
          <img
            src={process.env.PUBLIC_URL + '/images/teamwork.jpg'}
            alt="background"
          />
        </div>
      </div>
      <div className="col-md-5">
        <div className="h-100 d-flex justify-content-center align-items-center">
          <div className="container">
            <h2>
              Sigup <i className="fas fa-sign-in-alt"></i>
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-6">
                  <Field
                    name="username"
                    type="text"
                    component={renderField}
                    label="Username"
                  />
                </div>
                <div className="col-md-6">
                  <Field
                    name="name"
                    type="text"
                    component={renderField}
                    label="name"
                  />
                </div>
              </div>
              <Field
                name="email"
                type="email"
                component={renderField}
                label="Email"
              />
              <Field
                name="password"
                type="password"
                component={renderField}
                label="Password"
              />
              <Field
                name="confirmPassword"
                type="password"
                component={renderField}
                label="Confirm Password"
              />
              <Widget
                showWidget={showWidget}
                deletePhoto={deletePhoto}
                image={image}
              />
              <div className="form-group">
                {errorImage ? (
                  <div className="text-danger">{errorImage}</div>
                ) : (
                  ''
                )}
              </div>
              <div>
                <div className="form-group">
                  {error ? <span className="text-danger">{error}</span> : ''}
                </div>
                <button
                  className="btn btn-primary shadow rounded btn-website"
                  type="submit"
                  disabled={submitting}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default compose(
  connect(null, actions),
  reduxForm({ form: 'SignUpForm', validate })
)(Signup);
