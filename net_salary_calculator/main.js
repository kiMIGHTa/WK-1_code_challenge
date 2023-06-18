const prompt = require("prompt-sync")();

//calculate the NHIF contributions
const nhifDeductions = function (grossSalary) {
    let nhifRates = 0
    if (grossSalary > 0 && grossSalary <= 5999) {
        return nhifRates = 150;
    } else if (grossSalary >= 6000 && grossSalary <= 7999) {
        return nhifRates = 300;
    } else if (grossSalary >= 8000 && grossSalary <= 11999) {
        return nhifRates = 400;
    } else if (grossSalary >= 12000 && grossSalary <= 14999) {
        return nhifRates = 500;
    } else if (grossSalary >= 15000 && grossSalary <= 19999) {
        return nhifRates = 600
    } else if (grossSalary >= 20000 && grossSalary <= 24999) {
        return nhifRates = 750;
    } else if (grossSalary >= 25000 && grossSalary <= 29999) {
        return nhifRates = 850
    } else if (grossSalary >= 30000 && grossSalary <= 34999) {
        return nhifRates = 900
    } else if (grossSalary >= 35000 && grossSalary <= 39999) {
        return nhifRates = 950
    } else if (grossSalary >= 40000 && grossSalary <= 44999) {
        return nhifRates = 1000
    } else if (grossSalary >= 45000 && grossSalary <= 49999) {
        return nhifRates = 1100
    } else if (grossSalary >= 50000 && grossSalary <= 59999) {
        return nhifRates = 1200
    } else if (grossSalary >= 60000 && grossSalary <= 69999) {
        return nhifRates = 1300
    } else if (grossSalary >= 70000 && grossSalary <= 79999) {
        return nhifRates = 1400
    } else if (grossSalary >= 80000 && grossSalary <= 89999) {
        return nhifRates = 1500
    } else if (grossSalary >= 90000 && grossSalary <= 99999) {
        return nhifRates = 1600
    } else if (grossSalary >= 100000) {
        return nhifRates = 1700
    }

    return nhifRates
}

//Calculate the nssf deduction 
const nssfDeductions = function(grossSalary) {
    let nssfRates = 400*12
    return nssfRates

}


 //the function takes the user's basic salary and their total benefits as parameters and calculates their paye.

function salaryCalculator() {
    let basicSalary = prompt("What's your Basic Salary: ")
    let benefits = prompt("What are your total benefits: ")
    let grossSalary = (parseFloat(basicSalary) + parseFloat(benefits))*12
    let payeAmount = 0;
    let taxableIncome = grossSalary -(nhifDeductions(grossSalary) + nssfDeductions(grossSalary))
    if (taxableIncome > 0 && taxableIncome <= 288000) {
        payeAmount = taxableIncome * 0.1
    }else if (taxableIncome >= 288001 && taxableIncome <= 388000) {
        payeAmount = ((taxableIncome-288000) * 0.25)
    }else if (taxableIncome > 388000) {
        payeAmount = ((taxableIncome-388000)* 0.30)
    }
    return (
  ` - Your annual gross salary is: ${grossSalary}\n 
    - Your annual payee is: Ksh${payeAmount}\n 
    - Your annual net salary is: Ksh${(grossSalary - payeAmount)}\n 
    - Your annual NSSF deductions were: Ksh${nssfDeductions(grossSalary)}\n
    - Your annual NHIF contribution were: Ksh${nhifDeductions(grossSalary)}`)
}

console.log(salaryCalculator());
 


