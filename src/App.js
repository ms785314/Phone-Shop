
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashborad/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import PageNotFound from './components/PageNotFound/PageNotFound';
import ReviewerProfile from './components/ReviewerProfile/ReviewerProfile';
import Reviews from './components/Reviews/Reviews';
import SignUp from './components/SignUP/SignUp';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/reviewer/:id' element={<ReviewerProfile></ReviewerProfile>}> </Route>
        <Route path='/profile' element={<ReviewerProfile></ReviewerProfile>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
