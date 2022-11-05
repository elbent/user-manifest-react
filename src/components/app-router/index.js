import { Route, Switch } from 'react-router-dom'

import HomePage from '../../pages/HomePage/HomePage.js'
import React from 'react'
import UserPage from '../../pages/UserPage/UserPage.js'
import UsersPage from '../../pages/UsersPage/UsersPage.js'

const PageSwitch = () => {

    return (
        <Switch>
            <Route exact path={'/'} component={HomePage} />
            <Route exact path={'/users'} component={UsersPage} />
            <Route exact path={'/user/:id'} >
                <UserPage></UserPage>
            </Route>
        </Switch>
    );
}

export default PageSwitch
