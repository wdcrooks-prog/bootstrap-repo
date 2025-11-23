/*
Student Name: Will Crooks
File Name: script.js
Today's Date: 11/09/2025
*/

/* Ch10 Lab3 Will Crooks Created scripts.js for hamburger, and article animation functions */

function hamburger() {
    var menu = document.getElementById("mobile-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
}

function article1() {
    var article = document.getElementById('article1');
    if (article.style.display === 'block') {
        article.style.display = 'none'; // Hide it if it's showing
    } else {
        article.style.display = 'block'; // Show it if it's hidden
    }
}

function article2() {
    var article = document.getElementById('article2');
    if (article.style.display === 'block') {
        article.style.display = 'none';
    } else {
        article.style.display = 'block';
    }
}

function article3() {
    var article = document.getElementById('article3');
    if (article.style.display === 'block') {
        article.style.display = 'none';
    } else {
        article.style.display = 'block';
    }
}

function cve_high() {
    var article = document.getElementById('cve_high');
    if (article.style.display === 'block') {
        article.style.display = 'none';
    } else {
        article.style.display = 'block';
    }
}

function fraud_ticker() {
    var article = document.getElementById('fraud_ticker');
    if (article.style.display === 'block') {
        article.style.display = 'none';
    } else {
        article.style.display = 'block';
    }
}
