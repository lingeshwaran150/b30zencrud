import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

export function Nav() {
  const history = useHistory();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => history.push("/")}>Home</Button>
          <Button color="inherit" onClick={() => history.push("/movies")}>Movies</Button>
          <Button color="inherit" onClick={() => history.push("/addmovies")}>Addmovies</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
