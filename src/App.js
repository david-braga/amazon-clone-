import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Login';
import { auth } from './firebase'
import { useStateValue } from './StateProvider';
// import { useDispatch } from 'react-redux'


function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is ...', authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='checkout' element={<Checkout />} />
        </Routes>
        <Routes>
          <Route path='login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
