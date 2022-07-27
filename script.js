


function deposit(){
  let depositvalue=document.getElementById("deposit-value")
  let depositoutput=document.getElementById("deposit-output")
  let balanceoutput=document.getElementById("balance-output")

  depositoutput.innerText=Number(depositoutput.innerText) + Number(depositvalue.value)
 

  balanceoutput.innerText=Number(balanceoutput.innerText) + Number(depositvalue.value)

  depositvalue.value=""

}

function withdraw(){
  let withdrawValue=document.getElementById("withdraw-value")
  let withdrawOutput=document.getElementById("withdraw-output")

  withdrawOutput.innerText=Number(withdrawOutput.innerText) + Number(withdrawValue.value)

  withdrawValue.value="";



}