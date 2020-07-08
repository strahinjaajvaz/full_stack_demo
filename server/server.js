const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jsonwebtoken = require("jsonwebtoken");

const User = require("./models/User");
const { json } = require("express");

const JWT_SECRET = "OISHD)*ASYFAW)*FY)Q#FY";

async function main() {
  await mongoose.connect("mongodb://localhost:27017/authExample", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const app = express();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());

  const authMiddleWare = async (req, res, done) => {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) return done(true, null);
    const token = bearerToken.split(" ");

    const { userId } = jsonwebtoken.verify(token[1], JWT_SECRET);
    const user = await User.findOne({ _id: userId });
    if (!user) return done(true, null);
    req.user = user;
    return done(null, user);
  };

  app.post("/api/login", async (req, res) => {
    const {
      body: { password, email },
    } = req;
    if (!email || !password)
      return res.status(404).send("Invalid email or password");

    const user = await User.findOne({ email });
    if (!user) return res.status(404).send("Invalid email or password");

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(404).send("Invalid email or password");

    const token = jsonwebtoken.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: 60 * 60 * 24 * 3,
    });

    return res.json({
      data: {
        token,
        user,
      },
    });
  });

  app.post("/api/logout", (req, res) => {
    return res.json({ data: "success" });
  });

  app.post("/api/register", async (req, res) => {
    const {
      body: { email, password },
    } = req;
    if (!email || !password)
      return res.status(404).send("Invalid details. Please check again");

    const user = await User.findOne({ email });
    if (user) return res.status(404).send("Email already taken");

    const newUser = await User.create({ email, password });

    const token = jsonwebtoken.sign({ userId: newUser.id }, JWT_SECRET, {
      expiresIn: 60 * 60 * 24 * 3,
    });

    return res.json({
      data: {
        token,
        user: newUser,
      },
    });
  });

  app.get("/api/me", authMiddleWare, (req, res) => {
    console.log(req.user);
    return res.json({ data: "you got mail" });
  });

  app.listen(4000, () => {
    console.log("app is running on port 4000");
  });
}

main();
