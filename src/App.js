import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Nav } from './Nav';
import { Movies } from './Movies';
import { Addmovies } from './Addmovies';


export default function App() {

  return (
    <div className="App">
   <Router>
    
     <Nav/>
     <Switch>
       <Route exact path="/"><Home/></Route>
       <Route path="/movies"><Movies/></Route>
       <Route path="/addmovies"><Addmovies/></Route>
     </Switch>
   </Router>
    </div>
  );
}

function Home(){
  return(
    <div className='appe'>
      <h1>📽️🎞️🎥 WELCOME TO MOVIE APP📽️🎞️🎥</h1>
      <h2>Are You exicted to watch!!!</h2>
      <img src='https://i.pinimg.com/originals/55/b3/1d/55b31d686a01d27419132a913eb36ff0.jpg' alt='picture'></img>
    </div>
  );
}

