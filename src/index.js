"use strict";
document.addEventListener('DOMContentLoaded', () => {
    console.log("content loaded");
    document.getElementById('username').addEventListener("input", () => {
        let elem = document.getElementById('username');
        console.log(elem.textContent);
        if (parseInt(elem.innerText) <= 5) {
            console.log("tul rovid a jelszo");
        }
    });
});
