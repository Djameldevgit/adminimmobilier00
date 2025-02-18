import { useEffect } from 'react'
import { BrowserRouter as Router,Switch,  Redirect,Route } from 'react-router-dom'
 
 
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'

import Alert from './components/alert/Alert'
import Header from './components/header/Header'
import StatusModal from './components/StatusModal'

import { useSelector, useDispatch } from 'react-redux'
import { refreshToken } from './redux/actions/authAction'
import { getPosts } from './redux/actions/postAction'
import { getSuggestions } from './redux/actions/suggestionsAction'

import io from 'socket.io-client'
import { GLOBALTYPES } from './redux/actions/globalTypes'
import SocketClient from './SocketClient'

import { getNotifies } from './redux/actions/notifyAction'
import CallModal from './components/message/CallModal'
 
import NotFound from './components/NotFound'
import Post from './pages/post'
import Profile from './pages/profile'

function App() {
  const { auth, status, modal, call } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshToken())

    const socket = io()
    dispatch({ type: GLOBALTYPES.SOCKET, payload: socket })
    return () => socket.close()
  }, [dispatch])

  useEffect(() => {

    if (auth.token) {
      dispatch(getSuggestions(auth.token))
      dispatch(getNotifies(auth.token))
    }
  }, [dispatch, auth.token])
  useEffect(() => {
    dispatch(getPosts(auth.token)); // Se enviará null si no hay token
  }, [dispatch, auth.token]);

 
return (
  <Router>
    <Alert />
    <input type="checkbox" id="theme" />
    <div className={`App ${(status || modal) && 'mode'}`}>
      <div className="main">
        <Header />
        {status && <StatusModal />}
        {auth.token && <SocketClient />}
        {call && <CallModal />}

        {/* 🔹 Usa Switch para que solo una ruta se renderice a la vez */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/post/:id" component={Post} />
          
          {/* Protegemos el perfil */}
          <Route 
            exact 
            path="/profile" 
            render={() => (auth.token ? <Profile /> : <Redirect to="/login" />)}
          />

          {/* 🔥 NotFound solo se renderiza si ninguna otra ruta coincide */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </Router>
)

}

export default App;
