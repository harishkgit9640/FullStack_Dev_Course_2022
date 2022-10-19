import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Alert, Avatar, IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { PhotoCamera } from '@mui/icons-material';
import Navbar from './Navbar';
import Others from './Others';


function App() {
  return (
    <>
      <Navbar />
      <Others />
      <div className="container">
        <h1>Welcome to Material UI</h1>
        <div className="buttons">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <div className="other">
            <Button variant="contained" component="label">
              Upload
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
          </div>
        </div>
        <br />
        <div className="Input_group">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
        <br />
        <div className="avatar">
          <Stack direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </Stack>
        </div>
        <br />
        <div className="icons">
          <Button> <AddIcon /> </Button>
        </div>
        <div className="alert">
          <Alert severity="error">This is an error alert — check it out!</Alert>
          <Alert severity="warning">This is a warning alert — check it out!</Alert>
          <Alert severity="info">This is an info alert — check it out!</Alert>
          <Alert severity="success">This is a success alert — check it out!</Alert>
        </div>
      </div>
    </>
  );
}

export default App;
