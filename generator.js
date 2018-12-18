friendsArray = require("./app/data/friends");

var name = '';
var photo;
var ans1;
var ans3;
var ans4;
var ans5;
var ans6;
var ans7;
var ans8;
var ans9;
var ans10;
var scores = [];
var obj = {};

for (var i = 0; i < 10; i++) {
name = 'n' + i;
photo = `https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/${name}.jpg`
ans1 = Math.floor((Math.random() * 5)+1);
ans2 = Math.floor((Math.random() * 5)+1);
ans3 = Math.floor((Math.random() * 5)+1);
ans4 = Math.floor((Math.random() * 5)+1);
ans5 = Math.floor((Math.random() * 5)+1);
ans6 = Math.floor((Math.random() * 5)+1);
ans7 = Math.floor((Math.random() * 5)+1);
ans8 = Math.floor((Math.random() * 5)+1);
ans9 = Math.floor((Math.random() * 5)+1);
ans10 = Math.floor((Math.random() * 5)+1);

scores = [ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10];
obj = {name, photo, scores};

friendsArray.push(obj);
};
console.log(friendsArray);

