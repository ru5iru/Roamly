import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = (req, res) => {

  //Check user if exists

  const q1 = 'SELECT * FROM public."user" WHERE email = $1';

  db.query(q1, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.rows.length) return res.status(409).json("User already exists");


      //Create user
    //hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q2 = 'INSERT INTO public."user" ("email", "firstName", "lastName", "password") VALUES ($1, $2, $3, $4)';

    const values = [req.body.email, req.body.firstName, req.body.lastName, hashedPassword]

    db.query(q2,values, (err, data) => {
      if(err) return res.status(500).json(err);
      return res.status(200).json("User created");
    });

  });

};

export const login = (req, res) => {

  const q1 = 'SELECT * FROM public."user" WHERE email = $1';

  db.query(q1, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.rows.length === 0) return res.status(404).json("User not found!");

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data.rows[0].password
    );

    if (!checkPassword)
      return res.status(400).json("Wrong password or username!");

    const token = jwt.sign({ email: data.rows[0].email }, "secretkey" , {expiresIn: "1h"});

    const { password, ...others } = data.rows[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });

}

export const logout = (req, res) => {

  res.clearCookie("accessToken",{
    secure: true,
    sameSite: "none"
  })
  .status(200)
  .json("User logged out");

}