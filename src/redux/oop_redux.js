
const store = {
    _subscriber() {
        console.log("no subscrieers (observers)");
        
    },
    _state : {
        firtName : 'Alik',
        lastName : "Shkhyan"
    },
    getState () {
        return this._state;
    },
    setFirstName(newName) {
        this._state.firtName = newName;
        this._subscriber();
    },
    subscribe(observers) {
        this._subscriber = observers;
    }


}


// store.getState();
const state = store.getState();
// store.setFirstName("Albert");
// console.log('store.getState()', store.getState());
store.subscribe( () => {
    let state = store.getState();
    console.log('state', state);
} );

store.setFirstName("Alex");
