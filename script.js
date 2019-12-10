// get today's date 
var pubDomainYear;
var result;



// calculate 77 years after the song was released and display
function calc77(authorDeath, songTitle) {
    console.log('ran calc77');
    pubDomainYear = authorDeath + 70;
    return `${songTitle} will enter the public domain in ${pubDomainYear}. `;
}

function calcBC(songYear, songTitle) {
    console.log('ran calcbc');
    pubDomainYear = songYear + 95;
    return `${songTitle} will enter the public domain in ${pubDomainYear}. `;
}

function antique(songYear, songTitle) {
    pubDomainYear = (songYear + 95);
    console.log('ran antique');
    return `${songTitle} was placed into the public domain in ${pubDomainYear}. `;
}

function stillAlive(songYear, songTitle) {
    console.log('ran still alive');
    pubDomainYear = (songYear + 95);
    return `${songTitle} won't be placed into the public domain until at least ${pubDomainYear}. `;
}

// function checkForm() {
//     if (songTitle == null) {
//         var empty = `Please input the song title.`;
//         document.getElementById('empty').innerHTML = empty;
//     }
//         // || songYear == null || (authorYes == null && authorNo == null)) {
//         // var empty =  `Please fill out all fields.`;
//         // document.getElementById('empty').innerHTML = empty;
//    // }
//     else {
//     checkSong();
//     }
// }

function checkSong() {
    var today = new Date();
    var month = today.getUTCMonth() + 1; //months from 1-12
    var day = today.getUTCDate();
    var year = today.getUTCFullYear();
    var songTitle = document.getElementById('songTitle').value;
    var songYear = parseInt(document.getElementById('songYear').value);
    var authorYes = document.getElementById("authorYes").checked;
    var authorNo = document.getElementById("authorNo").checked;
    var authorDeath = parseInt(document.getElementById("authorDeath").value);
    
    if ((songYear >= 1977) && (authorYes)) {
        // console.log(songYear);
        result = stillAlive(songYear, songTitle);
        document.getElementById('result').innerHTML = result;
    } 
    else if ((songYear >= 1977) && (authorNo)) {
        result = calc77(authorDeath, songTitle);
        document.getElementById('result').innerHTML = result;
    }
    else if (songYear < (year - 95)) {
        result = antique(songYear, songTitle);
        document.getElementById('result').innerHTML = result;
    }
    else if (songYear < 1977) {
        result = calcBC(songYear, songTitle);
        document.getElementById('result').innerHTML = result;
    }
    

}
