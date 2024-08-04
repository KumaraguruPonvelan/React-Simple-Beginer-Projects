import logo from './logo.svg';
import './App.css';
import Home from './Router/Home';
import About from './Router/About';
import TicTacToe from './ComponentsTictactoe/TicTacToe/TicTacToe';
import { Otpgenerator } from './OtpGenerator';
import {BrowserRouter,Routes,Route , Link} from 'react-router-dom'
import Contact from './Router/Contact';
import User from './Router/User';
import Oldbooks from './Router/oldbooks';
import NewBooks from './Router/NewBooks';
import BMI from './Components/BMI';

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="Parent-Container"> 
          
        {/*<BrowserRouter>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contactus">Contact</Link></li>
            <li><Link to="/user/1">User1</Link></li>
            <li><Link to="/user/2">User2</Link></li>
            <li><Link to="/books/old_books">Old Books</Link></li>
            <li><Link to="/books/new_books">New Books</Link></li>
          </ul>
          <Routes>
            <Route path='/'   element={<Home/>}/>
            <Route path='/about'   element={<About/>}/>
            <Route path='/contactus'   element={<Contact/>}/>
            <Route path='/books'>
              <Route path='old_books'   element={<Oldbooks/>}/>
            <Route path='new_books'   element={<NewBooks/>}/>
            </Route>
            

          </Routes>

        </BrowserRouter>*/}

       {/*<BMI/>*/}
       {/*<Otpgenerator/>*/}
       <TicTacToe/>
        </div>

      </header>
     
      
    </div>
  );
}

export default App;
