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
document.getElementsByTagName('style')[0].innerHTML += '.text{display:block!important}' + '.watermark{display:block!important;visibility:visible!important;text-indent:0!important;position:static!important;font-size:inherit!important;line-height:inherit!important;animation:fadein .2s' + (paragraphs + 1) / 10 + 's forwards ease-out!important;opacity:0;}' + '@media(max-width:700px){.watermark{font-size:inherit!important;line-height:inherit!important}}';
if (fs > 3.49) {
    document.getElementsByTagName('style')[0].innerHTML += '.text{display:block!important}' + '.watermark{font-size:' + fs / 2 + 'vw!important;line-height:' + fs / 2 + 'vw!important;}' + '@media(max-width:700px){.watermark{font-size:inherit!important;line-height:inherit!important}}';
}