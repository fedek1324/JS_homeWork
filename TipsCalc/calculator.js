document.addEventListener("DOMContentLoaded", function (event) {

    function addSelectValues() {
        var options = [];
        options.push( ["Choose...", "Choose..."]);
        options.push(["30% - Outstanding", "0.3"]);
        options.push(["20% - Good", "0.2"]);
        options.push(["15% - OK", "0.15"]);
        options.push(["10% - Bad", "0.1"]);
        options.push(["5% - Terrible", "0.05"]);

        var select = document.getElementById("service_quality");

        options.forEach(option => {
            select.append(new Option(option[0], option[1]));
        });
    }

    function calculate() {
        var bill_count = document.getElementById("bill_count").value;
        var service_quality = document.getElementById("service_quality").value;
        var people_num = document.getElementById("people_num").value;

        if (!bill_count || bill_count == '0') {
            var bill_count_el = document.getElementById("bill_count");
            bill_count_el.style.border = "1.5px solid red";
            return;
        } else {
            var bill_count_el = document.getElementById("bill_count");
            bill_count_el.style.border = "";
        }

        if (service_quality == "Choose...") {
            var service_quality_el = document.getElementById("service_quality");
            service_quality_el.style.border = "1.5px solid red";
            return;
        } else {
            var service_quality_el = document.getElementById("service_quality");
            service_quality_el.style.border = "";
        }

        if (!people_num || people_num <= 1) {
            people_num = 1;
        } else {
            document.getElementById("each").style.display = "block";
        }

        var total = (bill_count * service_quality) / people_num;
        total = total.toFixed(2);

        document.getElementById("totalTip").style.display = "block";
        document.getElementById("tip").innerHTML = total;
    }

    document.getElementById("totalTip").style.display = 'none';
    document.getElementById("each").style.display = 'none';

    document.getElementById("calculate").onclick = calculate;

    addSelectValues();

});