import App from './components/App'
import OneTodo from './components/OneTodo'
import React from 'react'
import reducer from './reducers'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux'
import { render } from 'react-dom'

const store = createStore(reducer)

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/todo/(:id)" component={OneTodo} />
      <Route path="/(:filter)" component={App} />
    </Router>
  </Provider>
);

render(
  <Root store={store} />,
  document.getElementById('root')
)
