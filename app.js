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

// Click event listener for add-train button w/prevent form submission upon page load
$("#add-train").on("click", function(event) {
    event.preventDefault();

    // grab user inputs
    var trainName = $("#train-input").val().trim();
    console.log(trainName);
    var trainDest = $("#dest-input").val().trim();
    console.log(trainDest);
    var trainFirst = moment($("#first-input").val(), "h:mm a").format("X"); 
    console.log(trainFirst);
    var trainFreq = $("#freq-input").val();
    console.log(trainFreq);
}