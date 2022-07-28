//Deposit
let depositvalue=document.getElementById("deposit-value")
let depositoutput=document.getElementById("deposit-output")


//withdraw
let withdrawValue=document.getElementById("withdraw-value")
let withdrawOutput=document.getElementById("withdraw-output")

//balance
let balanceoutput=document.getElementById("balance-output")


function addmoney(currentAmount, newAmount){
  const addresult= Number(currentAmount) + Number(newAmount);
  return addresult
}

function getMoney(currentAmount,newAmount){

  return Number(currentAmount) - Number(newAmount)

}




function deposit(){


  // depositoutput.innerText=Number(depositoutput.innerText) + Number(depositvalue.value)

  const totaldeposit=addmoney(depositoutput.innerText,depositvalue.value)
  depositoutput.innerText=totaldeposit


    // balanceoutput.innerText=Number(balanceoutput.innerText) + Number(depositvalue.value)

  const totalbalnce=addmoney(balanceoutput.innerText,depositvalue.value)
  balanceoutput.innerText=totalbalnce
  

  depositvalue.value=""

}

function withdraw(){


  // withdrawOutput.innerText=Number(withdrawOutput.innerText) + Number(withdrawValue.value)

  const totalWithdraw=addmoney(withdrawOutput.innerText,withdrawValue.value)
  withdrawOutput.innerText=totalWithdraw

  // balanceoutput.innerText = Number(balanceoutput.innerText) - Number(withdrawValue.value);

  const totalbalnce=getMoney(balanceoutput.innerText,withdrawValue.value)
   balanceoutput.innerText=totalbalnce

  withdrawValue.value="";



}