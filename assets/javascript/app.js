//use window.setTimeout(function, milliseconds);
$(document).ready(function () {
    var startButton = $('<button id="startBtn">');
    startButton.text("Start");
    startButton.appendTo('#mainSection');
    //Variable that will hold our setInterval that runs the 30 second timer
    var intervalId;
    var correctAnswers = 0;
    var number = 3;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        number--;
        $('#timeRemaining').text(number);
        if (number === 0) {
            stop();
        }
    }
    function stop() {
        clearInterval(intervalId);
        $('#title').nextAll().remove();
        $('<p>Times Up!</p>').appendTo('#mainSection')
        //get the input values
        var a1 = $('input[name="form1"]:checked').val();
        var a2 = $('input[name="form2"]:checked').val();
        console.log(a1);
        console.log(a2);
    }

    function countScore() {
        var score = 0;
        var a1 = $('input[name="form1"]:checked').val();
        var a2 = $('input[name="form2"]:checked').val();
        var a3 = $('input[name="form3"]:checked').val();
        var a4 = $('input[name="form4"]:checked').val();
        
    }

    startButton.on("click", function () {
        var timerDiv = $('<div id="timerDiv"><p>Time Remaining: <span id="timeRemaining">30</span></p></div>');
        timerDiv.appendTo('#mainSection');

        run();
        //console.log("detaching button");
        startButton.detach();
        //start populating the quiz
        //create a form tag
        //append to mainsection
        //add attributes
        //add radio buttons for form
        var q1 = $('<p>This is question number ONE ...</p>');
        q1.appendTo('#mainSection');
        var form1 = $('<form>');
        form1.append('<input type="radio" name="form1" id="q1c1" value="c1">');
        form1.append('<label for="q1c1">Answer 1');
        form1.append('<input type="radio" name="form1" id="q1c2" value="c2">');
        form1.append('<label for="q1c1">Answer 2');
        form1.append('<input type="radio" name="form1" id="q1c3" value="c3">');
        form1.append('<label for="q1c3">Answer 3');
        form1.append('<input type="radio" name="form1" id="q1c4" value="c4">');
        form1.append('<label for="q1c4">Answer 4');
        form1.appendTo('#mainSection');

        var q2 = $('<p>This is question number TWO ...</p>');
        q2.appendTo('#mainSection');
        var form2 = $('<form>');
        form2.append('<input type="radio" name="form2" id="q2c1" value="c1">');
        form2.append('<label for="q1c1">Answer 1');
        form2.append('<input type="radio" name="form2" id="q2c2" value="c2">');
        form2.append('<label for="q1c1">Answer 2');
        form2.append('<input type="radio" name="form2" id="q2c3" value="c3">');
        form2.append('<label for="q1c3">Answer 3');
        form2.append('<input type="radio" name="form2" id="q2c4" value="c4">');
        form2.append('<label for="q1c4">Answer 4');
        form2.appendTo('#mainSection');
        //create submit button
        //find out how to retrieve the form data 
        var submitButton = $('<button>');
        submitButton.text("Submit");
        submitButton.appendTo('#mainSection');

        submitButton.on("click", function () {
            
        });

    });
});