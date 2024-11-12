import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Services, Team, Contact, Blog, Home, Projects } from './Pages';
import './App.css';



function App() {
  return (
    <Router>
      
      <div className='header-conteiner'>
        <img id='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk0nMeNCAby_sP7KqgOdNNcXAdhDn33aCW7Q&s" alt="" />
        
       

      <div className="header">
        <Link to={'/'}>Home</Link>
        <Link to={'/blog'}>blog</Link>
        <Link to={'/contact'}>contact</Link>
        <Link to={'/team'}>team</Link>
        <Link to={'/services'}>services</Link>
        <Link to={'/projects'}>projects</Link>

      </div>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/projects' element={<Projects/>}/>

      
      </Routes>
      <div>
        <footer>
          
        </footer>
      </div>

      
    </Router>
  );
}

export default App;
