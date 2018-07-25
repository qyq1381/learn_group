window.onload = function () {
    let zip = document.getElementById("zipcode");
    let year = document.getElementById("Yearid");
    let make1 = document.getElementById("Makeid1");
    let make1obj = { m1: "abc", m2: "bcd" };
    create_year_options(year, 2018, 2010);
    create_make1_options(make1, make1obj);
    make1.disabled = true;
    zip.oninput = function () {
        check("zipcode");
    }
    year.onchange = function () {
        make1.disabled = false;
    }
};
function check(x) {
    let zipstr = document.getElementById(x).value;
    let newstr = "";
    newstr = zipstr.replace(/[^0-9]/ig, "");
    document.getElementById(x).value = newstr;
};
function create_year_options(year, startyear, endyear) {
    if (startyear === endyear) {
        return true;
    }
    let step = (startyear > endyear) ? -1 : 1;
    for (let i = startyear; i !== endyear; i = i + step) {
        let option = new Option(i.toString(), i.toString(), false, false);
        year.appendChild(option);
    }
    let option = new Option(endyear.toString(), endyear.toString(), false, false);
    year.appendChild(option);
};
function create_make1_options(make1, make1obj) {
    let option = new Option(make1obj.m1, make1obj.m1, false, false);
    make1.appendChild(option);
    option = new Option(make1obj.m2, make1obj.m2, false, false);
    make1.appendChild(option);
};