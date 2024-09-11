const rs = require("readline-sync");

// VARIABLES

const menuHome = ["Balance","Deposit","Withdraw", "Log Off"];
const menuDeposit = ["Cash", "Cheque", "Main Menu"];
const menuWithdraw = [10, 20, 50, 100, 200, "Choose Amount", "Main Menu"];

const pin = 1234;
let getPin;

let balance = 100;

let userInput;
let cashAmount;
let chequeAmount;
let withdrawalAmount;
totalDeposit = (cashDeposit, chequeDeposit) => {
    sum = cashDeposit + chequeDeposit;
    return balance += sum;
}

// FUNCTIONS

atmStart = () =>{
    pinMatch = () => {
        getPin = rs.questionInt("Enter PIN: ", {hideEchoBack: true});
        getPin === pin ? mainMenu() : console.log("Incorrect. Please try again. "), pinMatch();
    }    
    pinMatch();
}

    mainMenu = () => {
        
        console.log(`\nYour balance is: £${balance}`)
        userInput = rs.keyInSelect(menuHome, "Please select an option: \n", (userInput) );
        console.log(`\nYou selected ${menuHome[userInput]}\n`);
        
        switch(menuHome[userInput]){
            case "Balance":
                selectBalance();
                break;
            case "Deposit":
                selectDeposit();
                break;
            case "Withdraw":
                selectWithdraw();
                break;
            case "Log Off":
                console.log("Goodbye!\n");
                process.exit();
                break;
            default:
                console.log("Goodbye!\n");
                process.exit();
                break;
        }
    }
      
    selectBalance = () =>{
        console.log(`\nYour total balance is: £${balance}.\n`)
        returnHome = rs.keyInYN("Return to main menu? ");
        if (returnHome === true){
            mainMenu();
        } else {
            console.log("Goodbye!");
            process.exit();
        }
    };
        
    selectDeposit = () => {
        userInput = rs.keyInSelect(menuDeposit, `Please select an option: \n`, (userInput));
        switch(menuDeposit[userInput]) {
            case menuDeposit[0]: // Cash
                console.log(`${menuDeposit[userInput]} selected.\n`);cashAmount = rs.questionInt(`How much would you like to deposit? `, {limitMessage: "Not a valid number.",});
                balance += cashAmount;
                console.log(`£${balance}`);
                anotherDeposit = rs.keyInYN("Would you like to make another deposit? ");
                anotherDeposit === true ? selectDeposit() : mainMenu();
                break;
            case menuDeposit[1]: // Cheque
                console.log(`${menuDeposit[userInput]} selected.\,`)
                chequeAmount = rs.questionInt(`How much would you like to deposit? `, {limitMessage: "Not a valid number."});
                balance += chequeAmount;
                console.log(`£${balance}`);
                anotherDeposit = rs.keyInYN("Would you like to make another deposit? ");
                anotherDeposit === true ? selectDeposit() : mainMenu();
                break;
            case menuDeposit[2]: // Main Menu
                mainMenu();
                break;
            default: // Cancel
                mainMenu();
                break;            
        }
    }
   
    selectWithdraw = () => {
        userInput = rs.keyInSelect(menuWithdraw, `How much would you like to withdraw? \n`, (userInput));
    
        switch(menuWithdraw[userInput]) {
            case 10: // 10
                withdrawalAmount = menuWithdraw[userInput];
                if(balance < withdrawalAmount){
                    console.log("\nInsufficient Funds");
                } else if(balance > userInput) {
                    balance -= withdrawalAmount;
                    console.log(`\nNew balance: £${balance}`);
                }
                anotherWithdrawal = rs.keyInYN(`\nWould like to make another withdrawal? `),
                anotherWithdrawal === true ? selectWithdraw() : mainMenu();
                break;          
                
            case 20: // 20
                withdrawalAmount = menuWithdraw[userInput];
                if(balance < withdrawalAmount){
                    console.log("\nInsufficient Funds");
                } else if(balance > userInput) {
                    balance -= withdrawalAmount;
                    console.log(`\nNew balance: £${balance}`);
                }
                anotherWithdrawal = rs.keyInYN(`\nWould like to make another withdrawal? `),
                anotherWithdrawal === true ? selectWithdraw() : mainMenu();
                break;  
            case 50: // 50 
                withdrawalAmount = menuWithdraw[userInput];
                if(balance < withdrawalAmount){
                    console.log("\nInsufficient Funds");
                } else if(balance > userInput) {
                    balance -= withdrawalAmount;
                    console.log(`\nNew balance: £${balance}`);
                }
                anotherWithdrawal = rs.keyInYN(`\nWould like to make another withdrawal? `),
                anotherWithdrawal === true ? selectWithdraw() : mainMenu();
                break;  
            case 100: // 100
                withdrawalAmount = menuWithdraw[userInput];
                if(balance < withdrawalAmount){
                    console.log("\nInsufficient Funds");
                } else if(balance > userInput) {
                    balance -= withdrawalAmount;
                    console.log(`\nNew balance: £${balance}`);
                }
                anotherWithdrawal = rs.keyInYN(`\nWould like to make another withdrawal? `),
                anotherWithdrawal === true ? selectWithdraw() : mainMenu();
                break;  
            case 200: // 200
                withdrawalAmount = menuWithdraw[userInput];
                if(balance < withdrawalAmount){
                    console.log("\nInsufficient Funds");
                } else if(balance > userInput) {
                    balance -= withdrawalAmount;
                    console.log(`\nNew balance: £${balance}`);
                }
                anotherWithdrawal = rs.keyInYN(`\nWould like to make another withdrawal? `),
                anotherWithdrawal === true ? selectWithdraw() : mainMenu();
                break;  
            case "Choose Amount": // Choose Amount
                amountChosen = rs.questionInt(`\nHow much would you like to withdraw?`, {limitMessage: "Not a valid number."});
                if(balance < amountChosen){
                    console.log("\nInsufficient Funds");
                } else if(balance > amountChosen){
                    balance -= amountChosen;
                    console.log(`\nNew balance: £${balance}`);
                }
                anotherWithdrawal = rs.keyInYN(`\nWould like to make another withdrawal? `),
                anotherWithdrawal === true ? selectWithdraw() : mainMenu();
                break;  
            case "Main Menu": // Main Menu
                atm();
                break;
            default: // Cancel
                mainMenu();
                break;
        }
    }

atmStart();

