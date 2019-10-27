$( document ).ready(function() {
    
    document.getElementById('bathroom-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('I want to go to the bathroom'));
    });
    
    document.getElementById('water-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('I want water'));
    });
    
    document.getElementById('hungry-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('I am hungry'));
    });
    
    document.getElementById('fatigue-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('I feel tired'));
    });
    
    document.getElementById('medicine-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('I need my medicine'));
    });
    
    document.getElementById('sleepy-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('I feel sleepy'));
    });
    
    document.getElementById('surprise-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('SURPRISE!!'));
    });
    
    document.getElementById('sad-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('I am sad'));
    });
    
    document.getElementById('happy-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('I am happy'));
    });
    
    document.getElementById('angry-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('I am angry'));
    });
    
    document.getElementById('confused-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('I am confused'));
    });
    
    document.getElementById('fear-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('I am scared'));
    });
    
    document.getElementById('paper-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('I want more paper'));
    });
    
    document.getElementById('books-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('I want to read'));
    });
    
    document.getElementById('pens-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('I want a writing utensils'));
    });
    
    document.getElementById('markers-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('I want colored markers'));
    });
    
    
    document.getElementById('birthday-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('Happy Birthday!'));
    });
    
    document.getElementById('present-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('Thank you!'));
    });
    
    document.getElementById('idea-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('I have an Idea'));
    });
    
    document.getElementById('movie-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('I want to watch a video'));
    });
    
    document.getElementById('tickets-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('I want to watch a movie'));
    });
    
    document.getElementById('karaoke-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('I want to sing'));
    });
    
    document.getElementById('games-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('I want to play video games'));
    });
    
    document.getElementById('vacation-speak').addEventListener('click', function() {
            	speechSynthesis.speak(new SpeechSynthesisUtterance('I want a break'));
    });
    
}); // close document ready
