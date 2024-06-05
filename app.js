let speech =  new SpeechSynthesisUtterance();

function convert(){
   let textarea= document.querySelector("textarea").value
      speech.text = textarea
      window.speechSynthesis.speak(speech);

}