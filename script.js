var lang = 'eng';
var sound_eng = new Audio('./open_eng.wav');
var sound_hin = new Audio('./open_hin.mp3');
var tts_hin = new Audio('./tts_hin.mp3');
var tts_eng = new Audio('./tts_eng.mp3');
var eng_playing = false;
var hin_playing = false;

sound_eng.play();

function change_language() {
    lang = lang == 'eng' ? 'hin' : 'eng';
    document.getElementById('lang').innerHTML = lang == 'eng' ? 'English' : 'हिंदी';
    document.getElementById(lang).style.display = 'block';
    document.getElementById(lang == 'eng' ? 'hin' : 'eng').style.display = 'none';
    if (lang == 'eng') {
        sound_hin.pause();
        sound_hin.currentTime = 0;
        sound_eng.play();
    } else {
        sound_eng.pause();
        sound_eng.currentTime = 0;
        sound_hin.play();
    }
}

document.getElementById('change_lang').onclick = function() {
    change_language();
}

document.addEventListener("keypress", function onEvent(event) {
    event. preventDefault();
    console.log(event)
    sound_eng.pause();
    sound_hin.pause();
    if (event.key === " ") {
        if(lang == 'eng') {
            if(!eng_playing) {
                tts_hin.pause();
                tts_eng.play();
                eng_playing = true;
            } else {
                tts_eng.pause();
                eng_playing = false;
            }
        } else {
            if(!hin_playing) {
                tts_eng.pause();
                tts_hin.play();
                hin_playing = true;
            } else {
                tts_hin.pause();
                hin_playing = false;
            }
        }
    } else if (event.key == '1') {
        change_language();
    } else if (event.key == '2') {
        tts_eng.pause();
        tts_hin.pause();
        tts_eng.currentTime = 0;
        tts_hin.currentTime = 0;
    }
});
