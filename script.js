$(function () {
    var requiredCheckboxes = $('.options :checkbox[required]');
    requiredCheckboxes.change(function () {
        if (requiredCheckboxes.is(':checked')) {
            requiredCheckboxes.removeAttr('required');
        } else {
            requiredCheckboxes.attr('required', 'required');
        }
    });
});

// get today's date 
var today = new Date();
console.log("today's date is " + today);
var pubDomainYear;
var result;


// calculate 77 years after the song was released and display
function calc77(authorDeath, songTitle) {
    pubDomainYear = authorDeath + 70;
    return `${songTitle} will enter the public domain in ${pubDomainYear}. `;
}

function calcBC() {
    pubDomainYear = songYear + 95;
    document.getElementById('result').innerHTML = `${songTitle} will enter the public domain in ${pubDomainYear}. `;
}

function antique() {
    pubDomainYear = (songYear + 95);
    document.getElementById('result').innerHTML = `${songTitle} was placed into the public domain in ${pubDomainYear}. `;
}

function stillAlive(songYear, songTitle) {
    pubDomainYear = (songYear + 95);
    return `${songTitle} won't be placed into the public domain until at least ${pubDomainYear}. `;
}


function checkSong() {
    var songTitle = document.getElementById('songTitle').value;
    var songYear = parseInt(document.getElementById('songYear').value);
    var authorYes = document.getElementById("authorYes").checked;
    var authorNo = document.getElementById("authorNo").checked;
    var authorDeath = parseInt(document.getElementById("authorDeath").value);

    if ((songYear >= 1977) && (authorYes)) {
        console.log(songYear);

        result = stillAlive(songYear, songTitle);
        document.getElementById('result').innerHTML = result;
    } 
    else if ((songYear >= 1977) && (authorNo)) {
        result = calc77(authorDeath, songTitle);
        document.getElementById('result').innerHTML = result;
    }
    else if (songYear < 1977) {
        result = calcBC();
    }

}
