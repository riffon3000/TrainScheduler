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
$("#add-train").on("click", function (event) {
    event.preventDefault();

    // grab user inputs
    var trainName = $("#train-input").val().trim();
    console.log(trainName);
    var trainDest = $("#dest-input").val().trim();
    console.log(trainDest);
    var trainStart = moment($("#start-input").val(), "HH:mm a").format("X");
    console.log(moment(trainStart,"X").format("HH:mm a"));
    var trainRate = $("#rate-input").val();
    console.log(trainRate);

    // store user inputs in newTrain object
    var newTrain = {
        name: trainName,
        dest: trainDest,
        start: trainStart,
        rate: trainRate
    };
    console.log(newTrain);

});