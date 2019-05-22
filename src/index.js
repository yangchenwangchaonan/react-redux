import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'
import reducers from "./reducer" 
import "./cofig" 
import AuthRoute from "./component/authRoute/authRoute"
// 路由
import Login from "./container/login/login"
import Register from "./container/register/register"
import BoosInfo from "./container/boosinfo/boosinfo"
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))


ReactDom.render(
        (<Provider store = {store}>
        <BrowserRouter>
        <div>
            <AuthRoute></AuthRoute>
            <Switch>
                <Route path="/bossinfo" component={BoosInfo}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
            </Switch>
        </div>
        </BrowserRouter>
        </Provider>),

    document.getElementById("root")
)


