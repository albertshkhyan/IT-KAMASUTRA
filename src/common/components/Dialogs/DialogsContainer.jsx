import Dialogs from "./Dialogs";

import { connect } from "react-redux";
import withRedirectAuth from '../../../hoc/withRedirectAuth';
import {
  newMessageBodyCreator,
  addNewMessageBody,
} from "./../../../redux/dialogPageReducer";

const mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
  };
};

const mapDispatchToProps = (dsipatch) => {
  return {
    newMessageBody: (e) => {
      return dsipatch(newMessageBodyCreator(e.target.value));
    },
    addNewMessage: () => {
      return dsipatch(addNewMessageBody());
    },
  };
};
const AuthRedirectContainer =  withRedirectAuth(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectContainer);
export default DialogsContainer;
