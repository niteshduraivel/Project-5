function toggleMode() {
    var body = document.body;
    var button = document.getElementById('colorButton');

    body.classList.toggle('dark-mode');

    var isDarkMode = body.classList.contains('dark-mode');
    button.innerHTML = isDarkMode ? '<b>Light Mode</b>' : '<b>Dark Mode</b>';

    localStorage.setItem('darkModeEnabled', isDarkMode);
}

window.onload = function() {
    var darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
        document.getElementById('colorButton').innerHTML = '<b>Light Mode</b>';
    }
};