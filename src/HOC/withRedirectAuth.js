
import React from 'react';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsForRedirectContainer = (state) => ({
    isAuth: state.auth.isAuth,
});
const withRedirectAuth = (Component) => {
    const WrappedRedirectComponent = (props) => {
        if (props.isAuth === false) {
            return <Redirect to="/login" />;
        }
        return <Component {...props} />;
    }

    return connect(mapStateToPropsForRedirectContainer, null)(WrappedRedirectComponent);
}
export default withRedirectAuth;