import React from 'react'

const CreateMyContext = React.createContext(null);

export const Provider = props => {
    return (
        <CreateMyContext.Provider value={props.store}>
            {props.children}
        </CreateMyContext.Provider>
    )
}

export default CreateMyContext;