const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { Op } = require("sequelize");
const { User } = require("../models");

//service
const authService = require("../services/auth");

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

const signIn = async (req,res) => {
  try{

  }catch(error){
    console.log(error);
  }
}

module.exports.signUp = signUp;
module.exports.signIn = signIn;
