

function calculate(){ 
      let payPeriod = document.querySelector('input[name="period"]:checked')
      if(payPeriod && payPeriod.value==="monthly"){ 
        monthlyCalculation()

        }else if(payPeriod && payPeriod.value==="annual"){ 
            annualCalculation()
    
     }
}
function monthlyCalculation(){
    let taxableIncome=0
    let basicSalary=parseFloat(document.getElementById("salary").value)
    let lifeInsurance=document.querySelector('input[name="insurance":checked')
    if(basicSalary>24000){
        if(lifeInsurance==="yes"){
        taxableIncome=basicSalary + 5000
        document.getElementById("result").innerHTML= `your salary is ${taxableIncome}`

        }else if(lifeInsurance==="no"){
            taxableIncome=basicSalary
            document.getElementById("result").innerHTML= "your salary is "+ taxableIncome
        }
    }else if(basicSalary<24000){
     alert("You are exempted from taxation!")
     document.getElementById("result").innerHTML= "your salary is "+ basicSalary

    }
 


    document.getElementById("result").innerHTML= "your salary is "+ taxableIncome
  }


   // }else if(document.getElementById("annual")==true){
     //   annualCalculation()


