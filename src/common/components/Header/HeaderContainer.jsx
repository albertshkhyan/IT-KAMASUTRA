import React from "react";
import Header from "./Header";
import * as axios from "axios";
import { setUserData } from "../../../redux/authReducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
      })
      .then((response) => {
        console.log("response", response);
        if(response.data.resultCode === 0) {
            const {id, login, email} = response.data.data;
            this.props.setUserData(id, login, email)
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
