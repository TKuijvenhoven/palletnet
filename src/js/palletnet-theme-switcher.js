document.addEventListener('DOMContentLoaded', (event) => {
    const body = document.querySelector('body');
    const themeSwitch = document.querySelector('.palletnet-theme-switch');

    themeSwitch.addEventListener('change', (e) => {
        body.classList.toggle('palletnet-dark-theme');  // toggle the class on body
    });

    const colorClasses = [
        'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure',
        'beige', 'bisque', 'black', 'blanchedalmond', 'blue',
        'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse',
        'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson',
        'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray',
        'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen',
        'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen',
        'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise',
        'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey',
        'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia',
        'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey',
        'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred'
       
    ];

    body.className.split(' ').forEach(c => {
        if (colorClasses.includes(c)) {
            if (['black', 'darkblue', 'darkcyan', 'darkgreen', 'darkred'].includes(c)) {
                body.classList.remove('palletnet-dark-theme');
            } else {
                body.classList.add('palletnet-dark-theme');
            }
        }
    });
});