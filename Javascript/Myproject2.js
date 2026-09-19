function calculate() {
    let c = Number(document.getElementById("c").value);
    let java = Number(document.getElementById("java").value);
    let result = document.getElementById("result");

    if (c > 100 && java > 100) {
        result.value = "C: " + c + " marks (max 100) | Java: " + java + " marks (max 100)";
    }
    else if (java > 100) {
        result.value = "Java: " + java + " marks (exceeds max of 100)";
    }
    else if (c > 100) {
        result.value = "C: " + c + " marks (exceeds max of 100)";
    }
    else if (c < 0 && java < 0) {
        result.value = "C: " + c + " (min 0) | Java: " + java + " (min 0)";
    }
    else if (java < 0) {
        result.value = "Java: " + java + " marks (below min of 0)";
    }
    else if (c < 0) {
        result.value = "C: " + c + " marks (below min of 0)";
    }
    else {
        result.value = "C: " + c + " | Java: " + java + " - Valid marks!";
    }
}

function clearResults() {
    document.getElementById("c").value = "";
    document.getElementById("java").value = "";
    document.getElementById("result").value = "";
}