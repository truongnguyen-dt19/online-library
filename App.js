import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar';
import BookList from './components/bookList';
import MemberList from './components/memberList';
import BorrowList from './components/borrowList';
import './app.css';

const App = () => {
    return (
        <React.Fragment>
            <NavBar />
            <main className="content">
                <Switch>
                    <Route path="/books" component={BookList} />
                    <Route path="/members" component={MemberList} />
                    <Route path="/borrows" component={BorrowList} />
                    <Redirect from="/" exact to="/books" />
                    <Redirect to="/not-found" /> 
                </Switch>
            </main>
        </React.Fragment>
    );
}

export default App;