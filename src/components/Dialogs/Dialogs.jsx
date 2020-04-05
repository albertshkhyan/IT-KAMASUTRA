import React from 'react';

import classes from './style.module.css';

const Dialogs = (props ) => {
    return (
        <div className={classes.dialogs}>
            
            <div className={classes.dialogsItems }>
                <div className={classes.dialog}>
                    Valer
                </div>
                <div className={classes.dialog}>
                    Janna
                </div>
                <div className={classes.dialog}>
                    Lyov
                </div>
                <div className={classes.dialog}>
                    Nara
                </div>
                <div className={classes.dialog}>
                    Ruzan
                </div>
                <div className={classes.dialog}>
                    Miqo
                </div>
                <div className={classes.dialog + ' ' + classes.active}>
                    Alik
                </div>
                <div className={classes.dialog}>
                    Consuela
                </div>
            </div>

            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you</div>
                <div className={classes.message}>Yo</div>
            </div>
        </div>
    );
}
export default Dialogs;