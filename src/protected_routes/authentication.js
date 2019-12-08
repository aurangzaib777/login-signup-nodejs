class Auth {
  constructor() {
    this.authenticated = false;
  }
  logIn(cb) {
    this.authenticated = true;
    cb();
  }
  signUp(cb) {
    this.authenticated = true;
    cb();
  }
  successfullyLogedIn(cb) {
    this.authenticated = true;
    cb();
  }
}

export default new Auth();
