document.getElementById('calculatebtn').addEventListener('click',calculateLoan);

function calculateLoan(){
    const loanAmount = parseFloat(document.getElementById('loanamount').value);
    const Interest = parseFloat(document.getElementById('interest').value);
    const months = parseInt(document.getElementById('loanterm').value);

    if (isNaN(loanAmount) || isNaN(Interest) || isNaN(months)) {
        alert("Please Enter Valid Inputs in all fields");
        return;
    }

    const monthlyInterest = Interest / 100/ 12; 
    const totalPayments = months;
    const monthlyPayment = (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -totalPayments));
    const totalInterest = (monthlyPayment * totalPayments) - loanAmount;

    displayResult(monthlyPayment, totalInterest);
}

function displayResult(monthlyPayment, totalInterest){
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
     <p><strong>Monthly Payments: ${monthlyPayment.toFixed(2)}<strong/><p/>
     <p><strong>Total Interest: ${totalInterest.toFixed(2)}<strong/><p/>
    `;
}