
let speech = new SpeechSynthesisUtterance();

/*This creates a new speech utterance — an object that holds the text you want to speak,
 and various settings like pitch, rate, and voice.
 */


let voice = []; //This will store list of diffrent voices

let voiceSelect = document.querySelector('select');
// Selects the <select> dropdown from the HTML where the voices will be listed.

window.speechSynthesis.onvoiceschanged = () => {    
    voices = window.speechSynthesis.getVoices();
    // getVoices() returns an array of available speech voices.
    speech.voice = voices[0];
 
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
    // Then it loops through the voices and creates <option> elements inside the <select> dropdown so users can choose one.

};

voiceSelect.addEventListener('change', (e) => {
    speech.voice = voices[e.target.value];
    // When the user selects diffrent voice it is listed in the dropdown
});

document.querySelector('button').addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
    /*
    It gets the value of the <textarea>
    Assigns it to speech.text
    Calls speak(speech) to read the text aloud using the selected voice
    */
})