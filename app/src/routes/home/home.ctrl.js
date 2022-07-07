"use strict";

/*
이거랑 같은 문법임
function hello(req, res){
    res.render("home/index");
}
*/

const home = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

//밖으로 내보내기
module.exports = {
    home,
    login,
};