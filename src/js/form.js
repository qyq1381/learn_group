window.onload = function () {
    let zip = document.getElementById("zipcode");
    let year = document.getElementById("Yearid");
    let make1 = document.getElementById("Makeid1");
    let make2 = document.getElementById("Makeid2");
    let make3 = document.getElementById("Makeid3");
    let make1obj = { m1: "abc", m2: "bcd" };
    let make2obj = { m1: "2_abc", m2: "2_bcd"};
    let make3obj = {m1:"3_abc", m2: "3_bcd"};
    create_year_options(year, 2018, 2017);
    create_make1_options(make1, make1obj);
    create_make2_options(make2, make2obj);
    create_make3_options(make3, make3obj);
    make1.disabled = true;
    make2.disabled =true;
    make3.disabled = true;
    zip.oninput = function () {
        check("zipcode");
    }
    year.onchange = function () {
        make1.disabled = false;
    }
    make1.onchange = function(){
        make2.disabled = false;
    }
    make2.onchange = function(){
        make3.disabled = false;
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
function create_make2_options(make2, make2obj){
    let option = new Option(make2obj.m1, make2obj.m1, false, false);
    make2.appendChild(option);
    option = new Option(make2obj.m2, make2obj.m2, false, false);
    make2.appendChild(option);
}
function create_make3_options(make3, make3obj){
    let option = new Option(make3obj.m1, make3obj.m1, false, false);
    make3.appendChild(option);
    option = new Option(make3obj.m2, make3obj.m2, false, false);
    make3.appendChild(option);
}