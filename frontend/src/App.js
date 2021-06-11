import React from 'react'
import { Redirect, Route } from "react-router-dom"
import { Login, SignUp, UserDetail, UserEdit, UserList  } from 'user'
import {TodosList, TodosInput, Schedule}from 'todos'
import {Home, User, Item} from 'templates'
import {Nav} from 'common'
import {BrowserRouter as Router} from 'react-router-dom'
import {Counter} from 'counter'
import {TodoReducer} from 'store'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'


const rootReducer = combineReducers({TodoReducer})

const App = () => {
  return (<div>
    <Router>
      <Provider store = {createStore(rootReducer)}>
        <Nav/>

        <Route exact path='/home' component={Home}/>
        <Redirect exact from={'/'} to={'/home'}/>

        <Route exact path='/user' component={User}/>
        <Route exact path='/counter' component={Counter}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/user-detail' component={UserDetail}/>
        <Route exact path='/user-edit' component={UserEdit}/>
        <Route exact path='/user-list' component={UserList}/>

        <Route exact path='/item' component={Item}/>
        <Route exact path='/todosinput' component={TodosInput}/>
        <Route exact path='/todoslist' component={TodosList}/>
        <Route exact path='/schedule' component={Schedule}/>
    </Provider>
    </Router>
  </div>)
}

export default App