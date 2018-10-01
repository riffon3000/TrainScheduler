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

// handle for firebase.database();
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

    // Push newTrain data to database
    database.ref().push(newTrain);

    // Reset form fields
    $("#train-input").val("");
    $("#dest-input").val("");
    $("#start-input").val("");
    $("#rate-input").val("");
});

// Event listener for addition to Firebase database and adding row to #new-trains tbody
database.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val());
    
    // handle for childSnapshot.val();
    var snap = childSnapshot.val();

    // grab variables from snap
    var trainName = snap.name;
    console.log(trainName);
    var trainDest = snap.dest;
    console.log(trainDest);
    var trainStart = snap.start;
    console.log(moment(trainStart,"X").format("HH:mm a"));
    var trainRate = snap.rate;
    console.log(trainRate);

    // calculate next train arrival
    var trainNext = ;

    // calculate minutes away until next train arrival
    var trainAway = ;

    // create new row
    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(trainDest),
        $("<td>").text(trainRate),
        $("<td>").text(trainNext),
        $("<td>").text(trainAway)
      );

    // append new row to table
    $("new-trains > tbody").append(newRow);
});