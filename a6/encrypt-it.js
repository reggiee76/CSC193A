/*
 * Starter file 
 */
(function() {
  "use strict";

  /*
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /*
   * Initialization function that sets up event listeners for the 
   * Encrypt-It and Reset buttons once the DOM is fully loaded.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log("Window Loaded!");

    // Part II -> add event listener for encrypt it btn
    let encryptBtn = document.getElementById("encrypt-it");
    encryptBtn.addEventListener("click", handleEncrypt);

    // Part III -> add event listener for the reset btn
    let resetBtn = document.getElementById("reset");
    resetBtn.addEventListener("click", handleReset);

  }

  /*
   * Handles the encryption process by retrieving input text, 
   * applying the shift cipher, and displaying the result.
   */
  function handleEncrypt(){
    // get txt from text area
    let text = document.getElementById("input-text").value;
    // encryopt text with shift cipher fxn
    let encryptedText = shiftCipher(text);
    // output result 
    document.getElementById("result").innerText = encryptedText;
    console.log("Text Encrypted!");
  }

  /*
   * Clears the input textarea when the reset button is clicked.
   */
  function handleReset(){
    // Part III -> clear text area
    document.getElementById("input-text").value = "";
    console.log("Input Cleared");
  }

  /*
   * Returns an encrypted version of the given text, where
   * each letter is shifted alphabetically ahead by 1 letter,
   * and 'z' is shifted to 'a' (creating an alphabetical cycle).
   */
  function shiftCipher(text){
    text = text.toLowerCase();
    let result = "";

    for (let i= 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else{
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }        
    }
    return result;
  }

})();
