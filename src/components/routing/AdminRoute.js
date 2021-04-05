import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../resources/differentResources/Spinner'

const AdminRoute = ({
  component: Component,
  auth: { isAuthenticated, loading, collaborator },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>      
      (loading) ? 
          (  <Spinner />) 
          : 
          (
                (isAuthenticated )  ? 
                                      (<Component {...props} />) 
                                      : 
                                      ( <Redirect to="/admin/login" />)
          )

    }
  />
);

AdminRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.authCollaborator
});

export default connect(mapStateToProps)(AdminRoute);