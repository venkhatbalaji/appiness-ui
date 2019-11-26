import Login from '../Utilities/Login.json';

const initialState = {
    loggedIn: false,
    InvalidUser: false
}

const reducer = (state = initialState, action) => {
    var newState = { ...state };
    if (action.type === 'My_Login') {
        if (action.username === Login.username && action.password === Login.password) {
            console.log(action)
            newState = {
                loggedIn: true,
                InvalidUser: false
            };
            console.log(newState);
        }
        else{
            newState = {
                loggedIn: false,
                InvalidUser: true
            };
        }
    }

    return newState;
}

export default reducer;