var config = {
    apiKey: "AIzaSyC0nxnVXZzW35Pb9Dh3C7DMO71VX42_Kt0",
    authDomain: "train-times-d688e.firebaseapp.com",
    databaseURL: "https://train-times-d688e.firebaseio.com",
    projectId: "train-times-d688e",
    storageBucket: "train-times-d688e.appspot.com",
    messagingSenderId: "1024112073368"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  //database.ref().push(newEmp);

$(document).ready(function() {
  setInterval(updateTimer, 1000);
    
    
    
});

function updateTimer() {
  var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a'); 
  
  console.log(currentTime)                                                                //for each database.ref()
}

function addRecord(trainName, destination, frequency, firstTrainTime) {
    
    
    
    var nextArrival = "";
    var minuetsAway = "";
     

    $("#traintable").append('<tr> <td>' + trainName + '</td>' + '<td>' + destination + '</td>' + '<td>' + 
    frequency + '</td>' + '<td>' + nextArrival + '</td>' + '<td>' + minuetsAway + '</td>' + '</tr>');
    
};

$('#submit').on('click', function(){
    
    var userChoiceTrainName = $('#userName').val();
    var userChoiceDestination = $('#destination').val();
    
    var userChoiceTrainTime = $('#trainTime').val();
    var userChoiceFrequency = $('#frequency').val();
    // Creates local "temporary" object for holding employee data
  var newRecord = {
    trainName: userChoiceTrainName,
    destination: userChoiceDestination,
    trainTime: userChoiceTrainTime,
    frequency: userChoiceFrequency
  };

  // Uploads employee data to the database
  database.ref().push(newRecord);
    
});

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var trainName = childSnapshot.val().trainName;
    var destination = childSnapshot.val().destination;
    var trainTime = childSnapshot.val().trainTime;
    var frequency = childSnapshot.val().frequency;

    
    addRecord(trainName, destination, frequency, trainTime );
});
  








