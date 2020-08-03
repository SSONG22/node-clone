const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

const express = require("express");
const passport = require("passport");
const { Op } = require("sequelize");

//service
const authService = require("../services/auth");

//jwt
const jwt = require("../utils/jwt");

const signUp = async (req, res, next) => {
  try {
    //중복검사
    const data = req.body;
    const exUser = await authService.checkUser(data.email);
    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디입니다"); //응답은 1번만
    }
    const hashedPassword = await bcrypt.hash(data.password, 10); //해시화
    const result = await authService.createUser(
      data.email,
      data.nickname,
      hashedPassword
    );
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    next(error); //next 로 에러를 보낸다 express 가 브라우저로 error 보냄
  }
};

const signIn = async (req, res, next) => {
  try {
    console.log(req.body);
    const exUser = await authService.checkUser(req.body.email);
    if (exUser) {
      const token = await jwt.getJwt(req.body);
      res.status(200).send(token);
    } else {
      res.status(404).send("존재하지 않는 유저입니다.");
    }
  } catch (error) {
    next(error);
  }
};

const certification = async (req, res, next) => {
  const token = crypto.randomBytes(20).toString("hex"); // token 생성
  const data = {
    token,
    email: req.body.email,
  };
  const result = await authService.settingToken(data);
  console.log(result);

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL, // gmail 계정 아이디를 입력
      pass: process.env.NODEMAILER_EMAIL_PASSWORD, // gmail 계정의 비밀번호를 입력
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: req.body.email,
    subject: "가입인증 메일입니다",
    html:
      "<p>아래의 url로 이동 해주세요</p>" +
      `http://localhost:3065/user/auth/${token}`,
  };

  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error(error);
      next(error);
    } else {
      res.send("이메일을 확인해 주세요");
      console.log("Email sent: " + info.response + " " + token);
    }
  });
};

const verify = async (req, res, next) => {
  try {
    const result = await authService.checkEmail(req.params.token);
    if (result) {
      res.status(200).send("이메일 인증 성공");
    } else res.status(403).send("이메일 인증 실패");
  } catch (error) {
    next(error);
  }
};

module.exports.signUp = signUp;
module.exports.signIn = signIn;
module.exports.certification = certification;
module.exports.verify = verify;
