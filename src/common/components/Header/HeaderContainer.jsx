import APIRequests from './../../../api/api';
import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import { setUserData } from "../../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    APIRequests.authMe()
      .then((data) => {
        if(data.resultCode === 0) {
            const {id, login, email} = data.data;
            this.props.setUserData(id, login, email);
        }
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
    id : state.auth.id,
    login : state.auth.login,
    email : state.auth.email,
    isAuth : state.auth.isAuth
})

export default connect(mapStateToProps,{
    setUserData
})(HeaderContainer);
