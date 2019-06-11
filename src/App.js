import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const App = () => {
   return  (
  <Grid 
    container
    direction="row"
    justify="space-evenly"
    alignItems="stretch">
    {[0, 1, 2, 3].map(value => (
      <Grid key={value} item xs={3}>
        <Paper width="90%" height="100%">Haaay</Paper>
      </Grid>
    ))}
  </Grid>
)
    };

App.displayName = "App";

export default App;
