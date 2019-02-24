//use window.setTimeout(function, milliseconds);
$(document).ready(function () {
    var startButton = $('<button id="startBtn">');
    startButton.text("Start");
    startButton.appendTo('#mainSection');
    //Variable that will hold our setInterval that runs the 30 second timer
    var intervalId;
    var correctAnswers = 0;
    var number = 30;

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
        var myScore = countScore();
        console.log(myScore);
        clearInterval(intervalId);
        $('#title').nextAll().remove();
        $('<p>Times Up!</p>').appendTo('#mainSection');
        $('<p>Correct Answers: ' + myScore.correct + '</p>').appendTo('#mainSection');
        $('<p>Incorrect Answers: ' + myScore.incorrect + '</p>').appendTo('#mainSection');
        $('<p>Unanswered: ' + myScore.unanswered + '</p>').appendTo('#mainSection');
    }

    function countScore() {
        var scoreData = { correct: 0, incorrect: 0, unanswered: 0 };
        var a1 = $('input[name="form1"]:checked').val();
        var a2 = $('input[name="form2"]:checked').val();
        var a3 = $('input[name="form3"]:checked').val();
        var a4 = $('input[name="form4"]:checked').val();
        console.log(a1);
        console.log(a2);
        console.log(a3);
        console.log(a4);
        if (a1 == "c4") {
            scoreData.correct++;
        }
        else {
            if (a1 == "undefined") {
                scoreData.unanswered++;
                scoreData.incorrect++;
            }
            else {
                scoreData.incorrect++;
            }
        }

        if (a2 == "c3") {
            scoreData.correct++;
        }
        else {
            if (a1 == "undefined") {
                scoreData.unanswered++;
                scoreData.incorrect++;
            }
            else {
                scoreData.incorrect++;
            }
        }

        if (a3 == "c3") {
            scoreData.correct++;
        }
        else {
            if (a1 == "undefined") {
                scoreData.unanswered++;
                scoreData.incorrect++;
            }
            else {
                scoreData.incorrect++;
            }
        }

        if (a4 == "c1") {
            scoreData.correct++;
        }
        else {
            if (a1 == "undefined") {
                scoreData.unanswered++;
                scoreData.incorrect++;
            }
            else {
                scoreData.incorrect++;
            }
        }


        return scoreData;

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
        var q1 = $('<p>In 1952, Albert Einstein was offered the presidency of which country?</p>');
        q1.appendTo('#mainSection');
        var form1 = $('<form>');
        form1.append('<input type="radio" name="form1" id="q1c1" value="c1">');
        form1.append('<label for="q1c1">China');
        form1.append('<input type="radio" name="form1" id="q1c2" value="c2">');
        form1.append('<label for="q1c1">Germany');
        form1.append('<input type="radio" name="form1" id="q1c3" value="c3">');
        form1.append('<label for="q1c3">Russia');
        form1.append('<input type="radio" name="form1" id="q1c4" value="c4">');
        form1.append('<label for="q1c4">Israel');
        form1.appendTo('#mainSection');

        var q2 = $('<p>What U.S. nonprofit organization sells about 200 million boxes of cookies per year?</p>');
        q2.appendTo('#mainSection');
        var form2 = $('<form>');
        form2.append('<input type="radio" name="form2" id="q2c1" value="c1">');
        form2.append('<label for="q2c1">UNICEF');
        form2.append('<input type="radio" name="form2" id="q2c2" value="c2">');
        form2.append('<label for="q2c2">SickKids Foundation');
        form2.append('<input type="radio" name="form2" id="q2c3" value="c3">');
        form2.append('<label for="q2c3">The Girl Scouts');
        form2.append('<input type="radio" name="form2" id="q2c4" value="c4">');
        form2.append('<label for="q2c4">Ronald McDonald House Charities');
        form2.appendTo('#mainSection');

        var q3 = $('<p>What is the only country that displays the Bible on its national flag?</p>');
        q3.appendTo('#mainSection');
        var form3 = $('<form>');
        form3.append('<input type="radio" name="form3" id="q3c1" value="c1">');
        form3.append('<label for="q3c1">Cuba');
        form3.append('<input type="radio" name="form3" id="q3c2" value="c2">');
        form3.append('<label for="q3c1">United States');
        form3.append('<input type="radio" name="form3" id="q3c3" value="c3">');
        form3.append('<label for="q3c3">The Dominic Republic');
        form3.append('<input type="radio" name="form3" id="q3c4" value="c4">');
        form3.append('<label for="q3c4">Brazil');
        form3.appendTo('#mainSection');

        var q4 = $('<p>Oliver Twist was the second novel published by which English author?</p>');
        q4.appendTo('#mainSection');
        var form4 = $('<form>');
        form4.append('<input type="radio" name="form4" id="q4c1" value="c1">');
        form4.append('<label for="q4c1">Charles Dickens');
        form4.append('<input type="radio" name="form4" id="q4c2" value="c2">');
        form4.append('<label for="q4c1">Jane Austin');
        form4.append('<input type="radio" name="form4" id="q4c3" value="c3">');
        form4.append('<label for="q4c3">Mark Twain');
        form4.append('<input type="radio" name="form4" id="q4c4" value="c4">');
        form4.append('<label for="q4c4">Agatha Christie');
        form4.appendTo('#mainSection');
        //create submit button
        //find out how to retrieve the form data 
        var submitButton = $('<button>');
        submitButton.text("Submit");
        submitButton.appendTo('#mainSection');

        submitButton.on("click", function () {
            var myScore = countScore();
            console.log(myScore);
            clearInterval(intervalId);
            $('#title').nextAll().remove();
            $('<p>All Done!</p>').appendTo('#mainSection');
            $('<p>Correct Answers: ' + myScore.correct + '</p>').appendTo('#mainSection');
            $('<p>Incorrect Answers: ' + myScore.incorrect + '</p>').appendTo('#mainSection');
            $('<p>Unanswered: ' + myScore.unanswered + '</p>').appendTo('#mainSection');
        });

    });
});