$( document ).ready(function() {
    
    document.getElementById('button-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('Hello World'));
    });
    
}); // close document ready
