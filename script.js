
//update principal value
let principalInput = document.getElementById("principal");


// let pricipalText = document.getElementById("principalTest");
// let updateRanchRateValue1 = () => {
//     pricipalText.innerHTML = +principalInput.value;
// }
// updateRanchRateValue1();


//update range value when range has changed
let rangeRateValue = document.getElementById("rate"); 
let showRangeVal = document.getElementById("showRange");
let updateRanchRateValue = () => {
    showRangeVal.innerHTML = rangeRateValue.value;
}
updateRanchRateValue();


//update number of year
let yearNum = document.getElementById("years").value;

//calculate yearly interest rate
let showResultText = document.getElementById("showResult");
let compute = () => {
    return principalInput.value * (((rangeRateValue.value / 100) * yearNum));
}

const d = new Date();
let year = d.getFullYear();
let endYear = parseInt(year) + parseInt(yearNum);
console.log(compute());
let showCalculationResult = () => {
    let grossAmount = parseInt(compute());
    showResultText.innerHTML = `if you deposti ${principalInput.value},<br>
    at an interest rate of ${rangeRateValue.value}%.<br>
    You will receive an amount of ${grossAmount}.<br>
    in the year ${endYear}`
}