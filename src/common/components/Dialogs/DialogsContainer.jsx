import Dialogs from "./Dialogs";


import { connect } from 'react-redux';
import { newMessageBodyCreator, addNewMessageBody } from './../../../redux/dialogPageReducer';

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
