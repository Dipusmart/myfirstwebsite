function calculateInterest() {

    let choice =document.getElementById("choice").value;
    let principal =Number(document.getElementById("principal").value);
    let rate =Number(document.getElementById("rate").value);
    let duration =Number(document.getElementById("duration").value);
    let result =document.getElementById("result");
    let interest;

    switch (choice) {
        case "1":
            interest =(principal * rate * duration) / 100;
            result.innerHTML ="Simple Interest = ₹" + interest;
            break;
        case "2":
            interest = principal * Math.pow((1 + rate / 100), duration) - principal;
            result.innerHTML = "Compound Interest = ₹" + interest;
            break;
        default:
            result.innerHTML = "Invalid Choice";
    }
}


function clearResult() {
    document.getElementById("principal").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("result").innerHTML = "";
}