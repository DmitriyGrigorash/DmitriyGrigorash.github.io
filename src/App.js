import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getFormValues } from 'redux-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Form from './components/Form';
import UsersList from './components/UsersList';
import { addUserData, addUsers } from './actions/actions';
import { USERS } from './const';
import './App.css';

class App extends Component {

    constructor () {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddUsers = this.handleAddUsers.bind(this);
    }

    handleSubmit(value) {
        this.props.addUserToList(value);
    }

    handleAddUsers() {
        this.props.addManyUsers(USERS);
    }

    render () {
        return (
            <div className="App">
                <MuiThemeProvider>
                    <Form onSubmit={this.handleSubmit} />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <UsersList
                        addUsers={this.handleAddUsers}
                        users={this.props.usersData.users}
                    />
                </MuiThemeProvider>
            </div>
        );
    }
}

const mapStateToProps = ( state ) => {
    const { usersData } = state;
    const formValues = getFormValues('Contact')(state);
    return {
        formValues,
        usersData,
    }
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        addUserToList: (user) => {
            dispatch(addUserData(user))
        },
        addManyUsers: (users) => {
            dispatch(addUsers(users))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
