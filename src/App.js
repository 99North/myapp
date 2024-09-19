import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CounterUseReducer from "./components/CounterUseReducer";
import FormHandlling from "./components/FormHandlling";
import LogInPage from "./components/LogInPage";
import LogOutPage from "./components/LogOutPage";
import ProductPage from "./components/ProductPage";
import ShoppingCart from "./components/ShoppingCart";
import ThemePage from "./components/ThemePage";
import UseEffectHook1 from "./components/UseEffectHook1";
import UseMemoHookExample from "./components/UseMemoHookExample";

import UserDetails from "./components/UserDetails";
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import ErrorPage from './components/ErrorPage';
import UseMemoUserListFilter from './components/UseMemoUserListFilter';
import PracticePage from './components/PracticePage';
import BMICalculatorPage from './components/BMICalculatorPage';
import WeatherApp from './components/WeatherApp';




function App() {
  return (
    <div className="App">
      {/* <ProductPage 
      price={100}
      color="red"
      model="2024"
      /> */}

      {/* <UserDetails/> */}
      {/* <FormHandlling /> */}
      {/* <ThemedComponent /> */}
      {/* <UseMemoHookExample/> */}
      
      {/* <UseEffectHook1/> */}
      {/* <LogInPage/> */}
      {/* <LogOutPage/> */}
      
     
      {/* <ShoppingCart/> */}


      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About Us</Link></li>
              <li><Link to='/counterusereducer'>CounterUseReducer</Link></li>
              <li><Link to='/themepage'>ThemePage</Link></li>
              <li><Link to='/userlist'>UserListUseMemoHook</Link></li>
              <li><Link to='/practicepage'>PracticePage</Link></li>
              <li><Link to='bmicalculator'>BMICalculator</Link></li>
              <li><Link to='weatherapp'>WeatherApp</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutUsPage/>}/>
            <Route path='/counterusereducer' element={<CounterUseReducer/>}/>
            <Route path='themepage' element={<ThemePage/>}/>
            <Route path='userlist' element={<UseMemoUserListFilter/>}/>
            <Route path='practicepage' element={<PracticePage/>}/>
            <Route path='bmicalculator' element={<BMICalculatorPage/>}/>
            <Route path='weatherapp' element={<WeatherApp/>}/>
            <Route path='*' element={<ErrorPage/>}/>
            
          </Routes>
        </div>
      </Router>


      





    </div>
  );
}

export default App;
