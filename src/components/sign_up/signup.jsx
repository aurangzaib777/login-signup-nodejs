import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./signup.css";
import {
  Typography,
  Grid,
  makeStyles,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  TextField,
  MenuItem,
  Button
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Axios from "axios";
const useStyles = makeStyles({
  heading: {
    fontWeight: "bold"
  },
  input: {
    width: "30vw"
  },
  fileWidth: {
    width: "30vw"
  }
});
const SignUp = props => {
  let [showValue, setShowValue] = useState({ showPassword: false });
  const Classes = useStyles();
  const showPassword = () => {
    setShowValue({
      ...showValue,
      showPassword: !showValue.showPassword
    });
  };

  let [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    pass: "",
    email: "",
    conPass: "",
    gender: ""
  });
  let [file, setFile] = useState("");
  let [msg, setMsg] = useState("");
  const handleChange = event => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };
  const handleClick = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("firstName", inputValues.firstName);
    data.append("lastName", inputValues.lastName);
    data.append("email", inputValues.email);
    data.append("password", inputValues.pass);
    data.append("gender", inputValues.gender);
    data.append("files", file);
    Axios.post(
      "https://loginandregistrationform.herokuapp.com/user/register",
      data
    ).then(res => setMsg(res.data));
    if (msg === "") {
      props.history.push("/login");
    }
  };
  const handleError = () => {
    alert("password doesn't match");
  };
  const handleChangeFile = e => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      setFile("");
    }
  };
  return (
    <React.Fragment>
      <Grid container alignItems="center" direction="column">
        <Grid item>
          <Typography
            color="secondary"
            className={`mt-4 headRes ${Classes.heading}`}
            variant="h2"
          >
            Register Yourself
          </Typography>
        </Grid>
        <Grid item>
          <FormControl className={`mt-3 inputRes ${Classes.input}`}>
            <InputLabel htmlFor="First Name">First Name</InputLabel>
            <Input
              id="First Name"
              name="firstName"
              onChange={handleChange}
              type="text"
              required
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl className={`mt-3 inputRes ${Classes.input}`}>
            <InputLabel htmlFor="Last Name">Last Name</InputLabel>
            <Input
              id="Last Name"
              type="text"
              required
              name="lastName"
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl className={`mt-3 inputRes ${Classes.input}`}>
            <InputLabel htmlFor="Email">Email</InputLabel>
            <Input
              id="Email"
              type="email"
              required
              name="email"
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl className={`mt-3 inputRes ${Classes.input}`}>
            <InputLabel htmlFor="pass">Password</InputLabel>
            <Input
              id="pass"
              name="pass"
              onChange={handleChange}
              type={showValue.showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    style={{ outline: "none" }}
                    onClick={showPassword}
                  >
                    {showValue.showPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              required
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl className={`mt-3 inputRes ${Classes.input}`}>
            <InputLabel htmlFor="conPass">Confirm Password</InputLabel>
            <Input
              name="conPass"
              onChange={handleChange}
              id="conPass"
              type={showValue.showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    style={{ outline: "none" }}
                    onClick={showPassword}
                  >
                    {showValue.showPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              required
            />
          </FormControl>
        </Grid>
        <Grid item>
          <TextField
            id="gender"
            select
            name="gender"
            onChange={handleChange}
            className={`mt-3 inputRes ${Classes.input}`}
            label="Select Gender"
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
        </Grid>
        <Grid item>
          <div className={`input-group mt-3 ${Classes.fileWidth} fileRes`}>
            <div className="custom-file">
              <input
                type="file"
                name="files"
                className="custom-file-input"
                id="inputGroupFile04"
                onChange={handleChangeFile}
                aria-describedby="inputGroupFileAddon04"
              />
              <label className="custom-file-label" htmlFor="inputGroupFile04">
                Upload Your Image
              </label>
            </div>
          </div>
        </Grid>
        <Grid item>
          {inputValues.pass === inputValues.conPass ? (
            <Button
              variant="contained"
              style={{ outline: "none" }}
              color="secondary"
              onClick={handleClick}
              className="mt-3"
            >
              Register
            </Button>
          ) : (
            <Button
              variant="contained"
              style={{ outline: "none" }}
              color="secondary"
              onClick={handleError}
              className="mt-3"
            >
              Register
            </Button>
          )}
        </Grid>
        <Grid item>
          <Typography className="mt-3" paragraph>
            {msg}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default withRouter(SignUp);
