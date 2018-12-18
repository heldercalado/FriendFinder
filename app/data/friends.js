var friends = [
    {
        name:'John',
        photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores:[5,1,4,4,5,1,2,5,4,1]

    },
    {
        name:'Helder',
        photo:"https://media.licdn.com/dms/image/C5603AQEP84AHhyAZJw/profile-displayphoto-shrink_200_200/0?e=1550707200&v=beta&t=9mRmPsYbPTxduPWQvGFqfQVle5ertw5BQIzwUs5Yhrw",
        scores:[4,2,3,2,5,2,3,4,3,2]

    },
    {
        name:'Louis',
        photo:"https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Chewbacca-2-.jpg/220px-Chewbacca-2-.jpg",
        scores:[3,2,3,3,2,2,1,4,3,1]

    }





]

function addFriends(argNumber){
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

for (var i = 0; i < argNumber; i++) {
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

friends.push(obj);
};
//console.log(friends);


}
addFriends(40);



module.exports =friends;