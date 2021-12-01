import { Grid } from "@material-ui/core";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

import { useStyles } from './styles/App'

function App() {

  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} style={{border: '1px solid #000'}}><Header /></Grid>
      <Grid item xs={12} sm={12} md={12} lg={3} style={{border: '1px solid #000'}}><Navbar /></Grid>
      <Grid item xs={12} sm={8} md={8} lg={6} style={{border: '1px solid #000'}}><Main /></Grid>
      <Grid item xs={12} sm={4} md={4} lg={3} style={{border: '1px solid #000'}}><Aside /></Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} style={{border: '1px solid #000'}}><Footer /></Grid>      
      </Grid>
    </div>
  );
}

export default App;
