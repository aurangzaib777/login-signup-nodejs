const router = require("express").Router();
const multer = require("multer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
// schema
const regSchema = require("../models/registration");

// Storage
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./build/uploads");
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + file.originalname);
  }
});
// upload
const upload = multer({ storage });
router.get("/all", (req, res) => {
  regSchema.find().then(resp => res.json(resp));
});

router.post("/register", upload.single("files"), (req, res) => {
  const { firstName, lastName, email, img, password, gender } = req.body;
  console.log(req.body);

  const reg = { firstName, lastName, email, img, password, gender };
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(reg.password, salt, function(err, hash) {
      if (hash) {
        reg.password = hash;
        let register = {
          firstName: reg.firstName,
          lastName: reg.lastName,
          email: reg.email,
          password: hash,
          gender: reg.gender,
          img: `/uploads/${req.file.filename}`
        };
        const Register = new regSchema(register);
        Register.save().then(() => res.json("user saved"));
      } else {
        res.json("error");
      }
    });
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const logIn = { email, password };
  console.log(logIn.password);
  regSchema.findOne({ email: logIn.email }).then(log => {
    console.log(log.password);
    if (log) {
      bcrypt.compare(logIn.password, log.password, (err, match) => {
        if (match) {
          jwt.sign(
            { email: log.email, id: log._id },
            "secret",
            (err, token) => {
              if (err) {
                res.json("token error");
              } else {
                res.json(`Bearer ${token}`);
              }
            }
          );
        } else {
          res.json("Password doesn't match");
        }
      });
    } else {
      res.json("user not found");
    }
  });
});

router.post(
  "/me",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req.user);
    if (req.user) {
      res.json({
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        gender: req.user.gender
      });
    } else {
      res.status(404).send("User not found");
    }
  }
);
module.exports = router;
