    var userChoice='';
    var csScore = 0;
    var uScore = 0;
    function rock()
    {
        userChoice="rock";
    }   
    function paper()
    {
        userChoice="paper";
    }  
    function scissors()
    {
        userChoice="scissors";
    }  

     function user(){ 
         
        console.log(userChoice);
        document.getElementById('take').value = "User: " + userChoice;
       
        //console.log("User: " + userChoice)
        var computerChoice =Math.floor( Math.random()*2);
            if (computerChoice = 0) {
            computerChoice = "rock";
            }else if(computerChoice =1) {
            computerChoice = "paper";
            }else{
            computerChoice = "scissors";
            }
            document.getElementById('num').value = "Computer: " + computerChoice;
            
            if(computerChoice == userChoice){
                document.getElementById('result').innerHTML="The result is a tie!";
                console.log('test');
            }
            else if(computerChoice == 'rock' && userChoice=='scissors'){
                document.getElementById('result').value= "rock wins";
                csScore++;
            }else if(computerChoice == 'rock' && userChoice == 'paper'){
                document.getElementById('result').value= "paper wins";
                uScore++;
            }else if(computerChoice == 'paper' && userChoice == 'rock'){
                document.getElementById('result').value= "paper wins";
                csScore++;
            }else if(computerChoice == 'paper' && userChoice == 'scissors'){
                document.getElementById('result').value= "scissors wins";
                uScore++;
            }else if(computerChoice == 'scissors' && userChoice == 'paper'){
                document.getElementById('result').value= "scissors wins";
                csScore++;
            }else if(computerChoice == 'scissors' && userChoice == 'rock'){
                document.getElementById('result').value= "rock wins";
                uScore++;
            }
        //console.log("Computer: " + computerChoice);
        //var temp = compare(userChoice, computerChoice);
        //document.getElementById('num').value = temp;
        //console.log(compare(userChoice, computerChoice)); 
    }
    function compare(choice1, choice2) {
        if (choice1 === choice2) {
            document.getElementById('result').value="The result is a tie!";
        }
        if (choice1 === "rock") { 
        if (choice2 === "scissors") {
            document.getElementById('result').value= "rock wins";
        }else{
            document.getElementById('result').value= "paper wins";
        }
        }
        if (choice1 === "paper") {
        if (choice2 === "rock") {
            document.getElementById('result').value= "paper wins";
        } else {
            document.getElementById('result').value= "scissors wins";
        }
        }       
        if (choice1 === "scissors") {
        if (choice2 === "rock") {
            document.getElementById('result').value= "rock wins";
        } else {
            document.getElementById('result').value= "scissors wins";
        }
        }
    }
