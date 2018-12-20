# FriendFinder

This Project's Objective was to present 10 questions to the user and use an algorithm to compare with the other users 
responses and return the one user that answered the closest (a match).

I've used the library Brain.js (https://www.npmjs.com/package/brainjs), which uses machine learning to calculate the closest match based
on feed forward Neural Network(NN) scheme (https://en.wikipedia.org/wiki/Feedforward_neural_network). 
I've used previous users inputs plus a set of randomly generated users inputs as training data.
After the "learning" process is done, the NN algorithm compares with 10 decimals precision points, the user that matches and returns the user name and the picture.
