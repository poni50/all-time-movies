/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array) {
    return array.map((element) => {
        element.duration = getCorrectTime(element.duration);
    });
}

function getCorrectTime(str) {

    if (str.includes("h")) {
        if (str.includes("min")) {
            let strings = str.split("h");
            let horas = parseInt(strings[0]) * 60;
            let minutes = strings[1].split("min")[0].trim();
            let result = horas + parseInt(minutes);
            return result + "min";
        }

        let strings = str.split("h");
        let horas = parseInt(strings[0]) * 60;
        return horas + "min";
    }
    return str;
}
// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average