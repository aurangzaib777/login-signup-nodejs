import React, { useState } from "react";
import "./login.css";
import {
  Typography,
  Grid,
  makeStyles,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import Auth from "../../protected_routes/authentication";
import { withRouter } from "react-router-dom";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Axios from "axios";
const useStyles = makeStyles({
  heading: {
    fontWeight: "bold",
    color: "#3f51b5"
  },
  input: {
    width: "30vw"
  },
  border: {
    border: "1px solid"
  },
  back: {
    backgroundImage:
      "url('https://images.samsung.com/is/image/samsung/my-feature-the-real-4k-uhd-tv-63465485?$FB_TYPE_A_JPG$')",
    backgroundSize: "100%",
    backgroundPosition: "contain",
    height: "100vh"
  }
});
const LogIn = props => {
  const Classes = useStyles();
  let [value, setValue] = useState({ showPassword: false });
  let [inputValue, setInputValue] = useState({ email: "", password: "" });
  let [msg, setMsg] = useState();
  const handlePassword = () => {
    setValue({ ...value, showPassword: !value.showPassword });
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  let [dataForward, setData] = useState([]);
  const handleClick = e => {
    e.preventDefault();

    const data = {
      email: inputValue.email,
      password: inputValue.password
    };
    Axios.post(
      "https://loginandregistrationform.herokuapp.com/user/login",
      data
    ).then(res => {
      Axios.defaults.headers["Authorization"] = res.data;
      localStorage.setItem("authorization", res.data);
      Axios.post("https://loginandregistrationform.herokuapp.com/user/me").then(
        res => {
          setData([res.data]);
        }
      );
      setMsg(res.data);
      if (res.data === "Password doesn't match") {
        alert(`Password doesn't match`);
      } else if (res.data === "user not found") {
        alert(`User not found`);
      } else {
        Auth.successfullyLogedIn(() => {
          props.history.push(`/successfullyLogedIn`);
        });
      }
    });
    if (inputValue.email === null || inputValue.email === "") {
      alert("enter your email");
    } else if (inputValue.password === null || inputValue.password === "") {
      alert("enter your password");
    }
  };
  return (
    <React.Fragment>
      <Grid
        container
        alignItems="center"
        className={Classes.back}
        direction="column"
      >
        <Grid item>
          <Typography className={`mt-4 ${Classes.heading}`} variant="h1">
            Log In
          </Typography>
        </Grid>
        <form action="#" className="d-flex flex-column align-items-center">
          <TextField
            className={`mt-4 inputRes ${Classes.input}`}
            label="Email"
            id="email"
            name="email"
            onChange={handleChange}
            type="email"
            required
          />
          <FormControl className={`mt-3 inputRes ${Classes.input}`}>
            <InputLabel htmlFor="pass">Password</InputLabel>
            <Input
              id="pass"
              name="password"
              onChange={handleChange}
              type={value.showPassword ? "text" : "password"}
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    style={{ outline: "none" }}
                    aria-label="toggle password visibility"
                    onClick={handlePassword}
                  >
                    {value.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            onClick={handleClick}
            variant="contained"
            style={{ outline: "none" }}
            className={`mt-3 align-self-start`}
            color="primary"
          >
            Sign In
          </Button>
          <Typography paragraph className="mt-3">
            {msg}
          </Typography>
        </form>
      </Grid>
    </React.Fragment>
  );
};

export default withRouter(LogIn);
