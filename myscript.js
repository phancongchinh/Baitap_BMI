function bmi() {
    let w = parseFloat(document.getElementById("weight").value);
    let h = parseFloat(document.getElementById("height").value);


    if ((w <= 0) || (h <= 0)) {
        document.getElementById("result").innerHTML = "Input invalid.";
    } else {
        let result = (w / (Math.pow(h,2))).toFixed(2);
        if (result < 18) {
            document.getElementById("result").innerHTML = "Underweight: " + result;
        } else if (result < 25.0) {
            document.getElementById("result").innerHTML = "Normal: " + result;
        } else if (result < 30.0) {
            document.getElementById("result").innerHTML = "Overweight: " + result;
        } else {
            document.getElementById("result").innerHTML = "Obese: " + result;
        }
    }
}



