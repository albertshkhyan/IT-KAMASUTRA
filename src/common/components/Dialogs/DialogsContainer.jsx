import Dialogs from "./Dialogs";

import { connect } from "react-redux";
import { compose } from "redux";

import withRedirectAuth from "../../../hoc/withRedirectAuth";
import { addNewMessageBody } from "./../../../redux/dialogPageReducer";

const mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
  };
};

const mapDispatchToProps = (dsipatch) => {
  return {
    addNewMessage: (newMessage) => {
      return dsipatch(addNewMessageBody(newMessage));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRedirectAuth
)(Dialogs);
