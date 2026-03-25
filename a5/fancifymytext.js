

function makeBigger(){
    //alert("Hello world!");
    document.getElementById("textInput").style.fontSize = "24pt";
}

function styleText(){
    let textArea = document.getElementById("textInput");
    let isFancy = document.getElementById("fancy").checked;

    if(isFancy){
        // Apply "fancy" styles
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
       // alert("Styles Added!");
    } else{
        // reset to 'boring' styles
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function moo(){
    let textArea = document.getElementById("textInput");
    let text = textArea.value;

    // make text uppercase
    text = text.toUpperCase();

    // Add moo to end of sentence
    let parts = text.split(".");
    text = parts.join("-MOO.");

    textArea.value = text;

}