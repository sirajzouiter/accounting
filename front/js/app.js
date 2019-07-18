var users;
(function () {
    function later() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("output").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "http://localhost:3030/users", true);
        xhttp.send();
    };

    setTimeout(later(),10000);
})();

// XmlHTTPRequest / innerHTML / setTimeout / Git 