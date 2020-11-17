"use strict";

const fs = 3.95;

document.getElementsByTagName('style')[0].style.display = "none";
document.getElementsByTagName('body')[0].style.display = "block";

var watermark = document.createElement("p");
var watermarklink = document.createElement("a");
var watermarklinkspan = document.createElement("span");
var watermarklinkspantext = document.createTextNode("built with temper");
watermarklink.setAttribute("href", "https://temper.one");
watermarklink.setAttribute("target", "_blank");
watermarklink.appendChild(watermarklinkspan);
watermarklinkspan.appendChild(watermarklinkspantext);
watermark.appendChild(watermarklink);
watermark.classList.add("watermark");
document.getElementsByClassName("text")[0].appendChild(watermark);

var paragraphs = document.getElementsByTagName("p").length;
document.getElementsByTagName('style')[0].innerHTML += '.text{display:block!important}' + '.watermark{display:block!important; visibility:visible!important; text-indent:0!important; position:static!important; font-size: 0!important; line-height:inherit; animation:fadein .2s' + (paragraphs + 1) / 10 + 's forwards ease-out!important; opacity:0;}' + '@media(max-width:700px){.watermark{font-size:0; line-height:0}}';

if (fs > 3.49) {
    document.getElementsByTagName('style')[0].innerHTML += '.text{display:block!important}' + '.watermark{font-size: 0;line-height: 0;}' + '@media(max-width:700px){.watermark{font-size: 0;line-height:0}}';
}

/*  --- SWAPPING TEXT --- */

const y1 = document.getElementById("yes1");
const y2 = document.getElementById("yes2");
const y3 = document.getElementById("yes3");

const n1 = document.getElementById("no1");
const n2 = document.getElementById("no2");
const n3 = document.getElementById("no3");

///YES FUNCTIONS
function clickYES1() {
    if (y1.innerHTML === "yes") {
        y1.innerHTML = "Obtain approval from Faculty or site owner";
        n1.innerHTML = "";
    } else {
        y1.innerHTML = "yes";
        n1.innerHTML = "no";
    }
};

function clickYES2() {
    if (y2.innerHTML === "yes") {
        y2.innerHTML = "Email fmhelpdesk@gre.ac.uk for secondary approval specifying details (e.g. room number, fire route, power and lighting requirements, date, and hours of filming)";
        n2.innerHTML = "";
    } else {
        y2.innerHTML = "yes";
        n2.innerHTML = "no";
    }
};

function clickYES3() {
    if (y3.innerHTML === "yes") {
        y3.innerHTML = "Contact the Greenwich Foundation to submit request at facilities@ornc.org specifying details (e.g. location, fire route, power and lighting requirements, date, and hours of filming)";
        n3.innerHTML = "";
    } else {
        y3.innerHTML = "yes";
        n3.innerHTML = "no";
    }
};

//// NO FUNCTIONS
function clickNO1() {
    if (n1.innerHTML === "no") {
        n1.innerHTML = "Awesome! Your RAMS is approved and you can start filming.";
        y1.innerHTML = "";
    } else {
        n1.innerHTML = "no";
        y1.innerHTML = "yes";
    }
};

function clickNO2() {
    if (n2.innerHTML === "no") {
        n2.innerHTML = "Awesome! Your RAMS is approved and you can start filming.";
        y2.innerHTML = "";
    } else {
        n2.innerHTML = "no";
        y2.innerHTML = "yes";
    }
};

function clickNO3() {
    if (n3.innerHTML === "no") {
        n3.innerHTML = "Awesome! Your RAMS is approved and you can start filming.";
        y3.innerHTML = "";
    } else {
        n3.innerHTML = "no";
        y3.innerHTML = "yes";
    }
};