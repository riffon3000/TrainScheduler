// Initialize Firebase TrainScheduleData; copy paste from Firebase
var config = {
    apiKey: "AIzaSyDhvKX-mtYdotrBxStuQO946O9xg-mAnXQ",
    authDomain: "trainscheduledata.firebaseapp.com",
    databaseURL: "https://trainscheduledata.firebaseio.com",
    projectId: "trainscheduledata",
    storageBucket: "trainscheduledata.appspot.com",
    messagingSenderId: "81718754773"
};
firebase.initializeApp(config);

// handle for database
var database = firebase.database();