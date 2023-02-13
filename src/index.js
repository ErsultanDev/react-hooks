import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Routes from 'routes'
import TopBar from 'components/topbar'
// import Routes from 'routes' import Topbar from 'components/topbar'
import {CurrentUserProvider} from 'contexts/currentUser'
// import CurrentUserChecker from 'components/currentUserChecker'

const App = () => {
  return (
    <CurrentUserProvider>
      <Router>
        <TopBar/>
        <Routes/>
      </Router>
    </CurrentUserProvider>
  )
}

ReactDOM.render(
  <App/>, document.getElementById('root'))
