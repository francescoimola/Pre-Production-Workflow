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
document.getElementsByTagName('style')[0].innerHTML += '.text{display:block!important}' + '.watermark{display:block!important; visibility:visible!important; text-indent:0!important; position:static!important; font-size: 0!important; line-height:inherit; animation:fadein .2s' + (paragraphs + 1) / 10 + 's forwards ease-out!important; opacity:0;}' + '@media(max-width:700px){.watermark{font-size:0!important; line-height:0!important}}';

if (fs > 3.49) {
    document.getElementsByTagName('style')[0].innerHTML += '.text{display:block!important}' + '.watermark{font-size: 0!important;line-height: 0!important;}' + '@media(max-width:700px){.watermark{font-size: 0!important;line-height:0!importnat}}';
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
    if (y1.innerHTML === "yes" && document.getElementById("yes1").className.match(/(?:^|\s)underline(?!\S)/)) {
        y1.innerHTML = "Obtain approval from Faculty or site owner";
        document.getElementById("yes1").setAttribute("class", "modified");
        n1.innerHTML = "";
    } else {
        y1.innerHTML = "yes";
        document.getElementById("yes1").setAttribute("class", "underline");
        n1.innerHTML = "no";
    }
};

function clickYES2() {
    if (y2.innerHTML === "yes" && document.getElementById("yes3").className.match(/(?:^|\s)underline(?!\S)/)) {
        y2.innerHTML = "Email fmhelpdesk@gre.ac.uk for secondary approval specifying details (e.g. room number, fire route, power and lighting requirements, date, and hours of filming)";
        document.getElementById("yes2").setAttribute("class", "modified");
        n2.innerHTML = "";
    } else {
        y2.innerHTML = "yes";
        document.getElementById("yes2").setAttribute("class", "underline");
        n2.innerHTML = "no";
    }
};

function clickYES3() {
    if (y3.innerHTML === "yes" && document.getElementById("yes3").className.match(/(?:^|\s)underline(?!\S)/)) {
        y3.innerHTML = "Contact the Greenwich Foundation to submit request at facilities@ornc.org specifying details (e.g. location, fire route, power and lighting requirements, date, and hours of filming)";
        document.getElementById("yes3").setAttribute("class", "modified");
        n3.innerHTML = "";
    } else {
        y3.innerHTML = "yes";
        document.getElementById("yes3").setAttribute("class", "underline");
        n3.innerHTML = "no";
    }
};

//// NO FUNCTIONS
function clickNO1() {
    if (n1.innerHTML === "no" && document.getElementById("no1").className.match(/(?:^|\s)underline(?!\S)/)) {
        n1.innerHTML = "Understood. Move to the next question.";
        document.getElementById("no1").setAttribute("class", "modified");
        y1.innerHTML = "";
    } else {
        n1.innerHTML = "no";
        document.getElementById("no1").setAttribute("class", "underline");
        y1.innerHTML = "yes";
    }
};

function clickNO2() {
    if (n2.innerHTML === "no" && document.getElementById("no2").className.match(/(?:^|\s)underline(?!\S)/)) {
        n2.innerHTML = "Sounds good. Move to the next question.";
        document.getElementById("no2").setAttribute("class", "modified");
        y2.innerHTML = "";
    } else {
        n2.innerHTML = "no";
        document.getElementById("no2").setAttribute("class", "underline");
        y2.innerHTML = "yes";
    }
};

function clickNO3() {
    if (n3.innerHTML === "no" && document.getElementById("no3").className.match(/(?:^|\s)underline(?!\S)/)) {
        n3.innerHTML = "Awesome! Your Risk Assessment is approved and you can start filming.";
        document.getElementById("no3").setAttribute("class", "modified");
        y3.innerHTML = "";
    } else {
        n3.innerHTML = "no";
        document.getElementById("no3").setAttribute("class", "underline");
        y3.innerHTML = "yes";
    }
};