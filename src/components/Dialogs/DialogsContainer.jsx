import Dialogs from "./Dialogs";
import {
  newMessageBodyCreator,
  addNewMessageBody,
} from "./../../redux/dialog_page_reducer";

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({
    dialogPage : state.dialogPage
  })  
}

const mapDispatchToProps = (dsipatch) => {
  return ({
    newMessageBody : (e) => {
      // console.log('mapDispatchToProps e +++++ ', e.target.value);
      return dsipatch( newMessageBodyCreator(e.target.value) )  
    },
    addNewMessage : () => {
      return dsipatch( addNewMessageBody() )
    }
  })
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
