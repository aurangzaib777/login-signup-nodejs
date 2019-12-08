import React from "react";
import { withRouter } from "react-router-dom";
import { Grid, makeStyles, Button, Tooltip } from "@material-ui/core";
import Auth from "../../protected_routes/authentication";
const useStyles = makeStyles({
  paper: {
    position: "absolute",
    height: "100%"
    // border: "1px solid"
  }
});
const Home = props => {
  const Classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        className={Classes.paper}
        container
        justify="center"
        alignItems="center"
      >
        <Tooltip title="Would you like to sign in">
          <Button
            onClick={() => {
              Auth.logIn(() => {
                props.history.push("/login");
              });
            }}
            style={{ outline: "none" }}
            className="ml-2"
            variant="contained"
            color="primary"
          >
            Log In
          </Button>
        </Tooltip>
        <Tooltip title="Would you like to register">
          <Button
            style={{ outline: "none" }}
            onClick={() => {
              Auth.signUp(() => {
                props.history.push("/signup");
              });
            }}
            className="ml-2"
            variant="contained"
            color="secondary"
          >
            Sign Up
          </Button>
        </Tooltip>
      </Grid>
    </React.Fragment>
  );
};

export default withRouter(Home);
