import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class Login extends Component {
    render() {
        return (
            <div className="login-box">
                <h1>LOGIN</h1>
                <input id="username" type="text" placeholder="Username" />
                <input id="password" type="password" placeholder="Password" />
                {!this.props.isLoggedIn ? <button onClick={this.props.onLogin}>LOGIN</button> : <Redirect to="/Employee"></Redirect>}
                {this.props.isInVaid ? alert("Invalid User") : console.log() }
            </div>
        );
    }
}

var getUsernameValue = () => {
    var username = document.getElementById("username").value;
    var mailformat = new RegExp("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$");
    if (mailformat.test(username)) {
        return username;
    }
    else {
        alert("You have entered an invalid email address!");
        return false;
    }
};

var getPassword = () => {
    var password = document.getElementById("password").value;
    if (password === "") {
        alert("Enter your Password");
        return false;
    }
    else {
        return password;
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.loggedIn,
        isInVaid: state.InvalidUser
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: () => dispatch({ type: 'My_Login', username: getUsernameValue(), password: getPassword() })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);