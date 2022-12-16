let availableBalance = 50000;
function inquiry() {
	alert("Your current balance is $" + availableBalance);
  
}


inquiry();



// Deposit, ode velime isto:ako vrednosta na deposit amount ne e ednakva na vnesenoto i deposit amount ne e null i deposit amount ne e not a number,not ? :(... togas deponiranjeto ke bide uspesno
function deposit() {
	var depositAmount = parseInt(prompt("How much do you want to deposit?"));
	if (depositAmount !== "" && depositAmount !== null && !isNaN(depositAmount)) {
		availableBalance += depositAmount;
		alert("You have successfully deposited $" + depositAmount + "\n" + "You now have $" + availableBalance);
		toContinue();
	} else {
		alert("Error: please enter a number!");
		deposit();
   
	}
}
deposit();


// Withdrawal, ovde velime ako vrednosta na withdrawal ne e endakva & withdrawal ne e null & withdrawal ne e not a number :(..mislam dobro? togas prodolzuvame na sledniot if i velime da e vrednosta negova pogolema od 1000 togas imame drugi dva ifs,dve scenarija kade sto imame da e pomala ili endakva od raspolozvlivite sredstva za uspesna transakcija i odzemana od raspolozlivite sredstva za da dobieme remainig funds na kraj.


function withdrawal() {
	let withdrawalAmount = parseInt(prompt("How much do you want to withdraw? \n" + "The minimum amount you can withdraw is $1000"));
	if (withdrawalAmount !== "" && withdrawalAmount !== null && !isNaN(withdrawalAmount)) {
		if (withdrawalAmount >= 1000) {
			if (withdrawalAmount <= availableBalance) {
				availableBalance -= withdrawalAmount;
				alert("Transaction successful!");
				alert("Your remaining balance is $" + availableBalance);
				toContinue();
			} else {
				alert("You do not have sufficient funds!");
				withdrawal();
			}
		} else {
			alert("You must withdraw at least $1000");
			withdrawal();
		}
	} else {
		alert("Error: please enter a number!");
		withdrawal();
	}
}	

withdrawal();
// Does the user wish to continue using the ATM
function toContinue(){
    let yesOrNo = parseInt(prompt("Do you want to perform another transaction? \n 1. Yes \n 2. No"));
	if (yesOrNo !== "" && yesOrNo !== null) {
    	if (yesOrNo === 2){
			exit();
    	}
	} else {
		alert("Please make a valid selection");
		toContinue();
	}
}

// Exit the ATM
function exit() {
	alert("Thank you for your trust ");
}