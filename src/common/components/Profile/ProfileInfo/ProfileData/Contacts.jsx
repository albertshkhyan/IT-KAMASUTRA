import React from "react";
import { createField } from './../../../../FormControl/FormControl';
import Input from './../../../../FormControl/Input/Inpuit';

const sentenceCase = (str) => {
  return str.replace(/([A-Z][a-z])/g,' $1');
}

const Contacts = (props) => {
  return (
    <div>
      <ul>
        <b>Contacts: </b>
        {Object.keys(props.profile.contacts).map((item) => {
          return (
            <li key={item}>
              <b>
                {item} : {props.profile.contacts[item]}
              </b>
              {props.toggle &&
                createField(Input, [], "text", "contacts."+item, sentenceCase(item))}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts;
