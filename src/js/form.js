window.onload = function () {
    var zip = document.getElementById("zipcode");
    zip.oninput = function () {
        check("zipcode");
    }
};
function check(x) {
    let zipstr = document.getElementById(x).value;
    let newstr = "";
    newstr = zipstr.replace(/[^0-9]/ig, "");
    document.getElementById(x).value = newstr;
};
