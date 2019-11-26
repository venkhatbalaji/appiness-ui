import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './Login';
import EmployeeList from './EmployeeList';

const Main = () => {
    return( 
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/Employee" component={EmployeeList} />
        </Switch >
    </BrowserRouter>
    );
 }
 
 export default Main;
