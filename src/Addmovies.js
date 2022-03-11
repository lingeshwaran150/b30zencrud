import { useEffect, useState } from "react";
import "./App.css";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import Badge from '@mui/material/Badge';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export function Addmovies() {
 



  const history = useHistory();
  const [name,setname]=useState("")
  const [poster,setposter]=useState("")
  const [rating,setrating]=useState("");
  const [summary,setsummary]=useState("")
  return (
   
    <div className="App">
      <div className="adhi">
      <h1>🍿🍿🍿WELCOME TO PVR CINEMAS🍿🍿🍿 </h1>
      <h1>upcoming movies📽️📽️</h1>
      </div>
      <div className="movie-form">
      <TextField id="outlined-basic" label="enter the name" variant="outlined"  onChange={(event)=>setname(event.target.value)}/>
      <TextField id="outlined-basic" label="enter the poster" variant="outlined" onChange={(event)=>setposter(event.target.value)} />
      <TextField id="outlined-basic" label="enter the rating" variant="outlined" onChange={(event)=> setrating(event.target.value)}/>
      <TextField id="outlined-basic" label="enter the summary" variant="outlined" onChange={(event)=>setsummary(event.target.value)}/>
     <Button variant="contained" onClick={()=>{
       const newmovie={name:name,poster:poster,rating:rating,summary:summary
     };
     fetch("https://620c529fb5736325938b91f9.mockapi.io/movies", {
            method: "POST",
            body: JSON.stringify(newmovie),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(() => history.push("/movies"));
    }
    }>Add Movie </Button>
   </div>
     
    </div>
   
  );
}


