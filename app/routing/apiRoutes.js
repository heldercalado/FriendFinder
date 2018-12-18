var express = require('express');
var router = express.Router();
var brain = require('brain.js');
var friendsArray = require('../data/friends');

router.use(express.urlencoded({
    extended: true
}));
router.get('/friends', function (req, res, next) {
    res.json(friendsArray);
});
router.post('/friends', function (req, res, next) {

for (var i = 0 ; i <req.body.scores.length;i++ ){
    req.body.scores[i] = parseInt(req.body.scores[i]);
}
 
    
    var t = getClosestMatch(req.body)
    
    res.send(friendsArray[t]);


    ;
});



function getClosestMatch(argRequest) {
    var newFriendAnswers = {
        q1: argRequest.scores[0],
        q2: argRequest.scores[1],
        q3: argRequest.scores[2],
        q4: argRequest.scores[3],
        q5: argRequest.scores[4],
        q5: argRequest.scores[5],
        q5: argRequest.scores[6],
        q5: argRequest.scores[7],
        q5: argRequest.scores[8],
        q5: argRequest.scores[9],
    }
    var trainArray = [];
    const net = new brain.NeuralNetwork();
    for (var i = 0; i < friendsArray.length; i++) {
        var name = friendsArray[i].name
        var trainObject = {
            input: {
                q1: friendsArray[i].scores[0],
                q2: friendsArray[i].scores[1],
                q3: friendsArray[i].scores[2],
                q4: friendsArray[i].scores[3],
                q5: friendsArray[i].scores[4],
                q5: friendsArray[i].scores[5],
                q5: friendsArray[i].scores[6],
                q5: friendsArray[i].scores[7],
                q5: friendsArray[i].scores[8],
                q5: friendsArray[i].scores[9],
            },
            output: {
                [name]: 1,

            }
        };
        trainArray.push(trainObject);
    }



    // net.train([{input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 }},
    //            {input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 }},
    //            {input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 }}]);
    net.train(trainArray);
    //const output = net.run({ r: 1, g: 0.4, b: 0 });  // { white: 0.99, black: 0.002 }
    const output = net.run(newFriendAnswers); // { white: 0.99, black: 0.002 }


    var keys = Object.entries(output);
    //console.log(keys[0][1]);
    var closest = {
        name: "",
        value: 0
    };
    for (var i = 0; i < keys.length; i++) {
       console.log(`value: ${parseFloat(keys[i][1])} is greater than Value: ${parseFloat(closest.value)}  =` + (parseFloat(keys[i][1]) > parseFloat(closest.value)));
        if (parseFloat(keys[i][1]) > parseFloat(closest.value)) {
            closest.name = keys[i][0],
                closest.value = keys[i][1]

        }

    }
    friendsArray.push(argRequest);
    //console.log(newFriendAnswers);
   console.log(output);
    
    //console.log(friendsArray);
    //console.log(friendsArray.name.indexOf(closes.name));
    pos = friendsArray.map(function(e) { return e.name; }).indexOf(closest.name);
    console.log(argRequest);
    console.log(friendsArray[pos]);
    return pos;

}


module.exports = router;