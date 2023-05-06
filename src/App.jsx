// import { useState, useMemo, useCallback } from 'react';
// import List from './components/List'
import './App.css'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
// import SwiperExample from './components/SwiperExample'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import { useState } from 'react';
import { auth } from './firebase';
import About from './components/About/About';



function App() {
  const [user, setUser] = useState(null);

  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user)
    } else {
      setUser(null)
    }

    return unsubscribe
  }, []);


  // const [number, setNumber] = useState(1);
  // const [dark, setDark] = useState(false);

  // const doubleNumber = useMemo(() => {
  //   return slowFunction(number);
  // }, [number])

  // const themeStyle = {
  //   backgroundColor: dark ? '#333' : '#fff',
  //   color: dark ? '#fff' : '#333'
  // }

  // function slowFunction(num) {
  //   for (let index = 0; index < 1000000000; index++) { }
  //   return num * 2
  // }

  // const getItems = useCallback(() => {
  //   return [number, number + 1, number + 2]
  // }, [number])

  return (
    <>
      {/* <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyle}>
        <List getItems={getItems} /> */}
      {/* </div> */}
      {/* <SwiperExample /> */}
      {/* <Register /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/about" element={user ? <About /> : <Navigate to="/login" />} />
          <Route path='/login' element={user ? <Navigate to="/about" /> : <Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
