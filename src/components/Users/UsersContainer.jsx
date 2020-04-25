
import { connect } from 'react-redux';

import Users from './Users';
import { followAC, unfollowAC, setUsersAC } from '../../redux/userPageReducer';

const mapStateToProps = state => {
    console.log('state', state);
    return ({
        users : state.usersPage.users
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        follow : (id) => dispatch(followAC(id)),
        unfollow : (id) => dispatch(unfollowAC(id)),
        setUsers : (users) => dispatch(setUsersAC(users))
        })    
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

