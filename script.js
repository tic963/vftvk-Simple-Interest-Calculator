
//update principal value
let principalInput = document.getElementById("principal");
let validatePrincipal = () => {
    if (!(principalInput.value > 0) || isNaN(principalInput.value) ){
        alert(`Please enter a positive number`);
    };
    // principalInput.focus();
    
}

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
let yearNum = document.getElementById("years");

//calculate yearly interest rate
let showResultText = document.getElementById("showResult");
let compute = () => {
    return principalInput.value * (((rangeRateValue.value / 100) * yearNum.value));
}


const d = new Date();
let year1 = d.getFullYear();
let yearNumShow = parseInt(yearNum.value,10);
let endYear = year1 + yearNum.value;

let dueDate = () => {
    return Number(yearNum.value) + Number(year1);
}

console.log(compute());
let showCalculationResult = () => {
    if (!(principalInput.value > 0) || isNaN(principalInput.value) || principalInput.value ==null) {
        alert(`Please enter a positive number`);
        principalInput.focus();
    } else {
    let grossAmount = parseInt(compute());
    showResultText.innerHTML = `if you deposti <span class="highlight-yellow">${principalInput.value}</span>,<br>
    at an interest rate of <span class="highlight-yellow">${rangeRateValue.value}%</span>.<br>
    You will receive an amount of <span class="highlight-yellow">${grossAmount}</span>.<br>
    in the year <span class="highlight-yellow">${ dueDate()}</span>`
    }
}