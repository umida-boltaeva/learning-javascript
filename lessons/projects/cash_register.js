function round(num) {
    var roundedString = num.toFixed(2);
    var rounded = Number(roundedString);
    return rounded;
}

function calculateAmount(change, notes, candidate, noteName, noteAmount) {
    var numNotes = notes[noteName] / noteAmount;
    var neededNotes = Math.floor(change / noteAmount);
    var amount = noteAmount * Math.min(numNotes, neededNotes);

    if(amount > 0){
        candidate.push([noteName, amount]);
    }

    return amount;
}

function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    var total = 0;
    var notes = {};
    for(let i = 0; i < cid.length; i++) {
      total += cid[i][1];
      notes[cid[i][0]] = cid[i][1];
    }
    if(total === change) {
      return {status: "CLOSED", change: cid};
    }

    var candidate = [];
    change =round(change - calculateAmount(change, notes, candidate, "ONE HUNDRED", 100));
    change =round(change - calculateAmount(change, notes, candidate, "TWENTY", 20));
    change =round(change - calculateAmount(change, notes, candidate, "TEN", 10));
    change =round(change - calculateAmount(change, notes, candidate, "FIVE", 5));
    change =round(change - calculateAmount(change, notes, candidate, "ONE", 1));
    change =round(change - calculateAmount(change, notes, candidate, "QUARTER", 0.25));
    change =round(change - calculateAmount(change, notes, candidate, "DIME", 0.1));
    change =round(change - calculateAmount(change, notes, candidate, "NICKEL", 0.05));
    change =round(change - calculateAmount(change, notes, candidate, "PENNY", 0.01));

    if(change === 0) {
      return {status: "OPEN", change: candidate};
    }else{
      return {status: "INSUFFICIENT_FUNDS", change: []}; 
    }
  }
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]
  
  console.log(JSON.stringify(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])));
  