let today = new Date();
const weekDays = ['Sonntag', 'Montag', 'Dienstag', 'Mittwich', 'Donerstag', 'Freitag', 'Samstag'][new Date().getDay()]
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

today = weekDays + ' ' + dd + '.' + mm + '.' + yyyy;


document.getElementsByClassName("date")[0].innerHTML = today;