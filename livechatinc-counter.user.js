/* globals $ */
// ==UserScript==
// @name         Livechatinc-Counter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Script to add a counter to the chat window since the last message sent or received in LiveChat Inc using Javascript
// @author       Esterlin Polanco esterlinpol@gmail.com
// @match        https://my.livechatinc.com/*
// @match        http://localhost/monkey/
// @icon         https://www.livechat.com/wp-content/themes/livechat2.0/media/img/fav.ico
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(document).ready(function () {
  var seconds = 0;
  var tens = 0;
  var minutes = 0;

  var counter = document.getElementsByClassName("css-m5plh9");

  $(counter).append('<br><span id="minutes">00</span>:<span id="seconds">00</span>')

  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var appendMinutes = document.getElementById("minutes")
  var Interval;
  var textArea = document.querySelector('[data-testid="chat-feed-text-area-test-id"]');

  textArea.onkeyup = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    Interval = setInterval(startTimer, 10);
  }

  function startTimer() {
    tens++;
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
    if (seconds > 58) {
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
    }

    if (minutes > 9) {
      appendSeconds.innerHTML = seconds;
    }
    if (minutes > 9) {
      appendMinutes.innerHTML = minutes;
    }
  }
});