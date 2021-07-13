function bmi() {
    let inputw = document.getElementById("weight").value;
    let inputh = document.getElementById("height").value;

    if ((inputw === "") || (inputh === "")) {
        document.getElementById("result").innerHTML = "Input invalid.";
    } else {
        let w = parseFloat(inputw);
        let h = parseFloat(inputh);
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
}



