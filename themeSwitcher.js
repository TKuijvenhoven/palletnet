class ThemeSwitcher extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'theme-switch-wrapper');

        const label = document.createElement('label');
        label.setAttribute('class', 'theme-switch');
        label.setAttribute('for', 'checkbox');

        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('id', 'checkbox');

        const div = document.createElement('div');
        div.setAttribute('class', 'slider round');

        const sunIcon = document.createElement('em');
        sunIcon.setAttribute('class', 'theme-icon sun-icon');
        sunIcon.innerHTML = '<i class="fas fa-sun"></i>';

        const moonIcon = document.createElement('em');
        moonIcon.setAttribute('class', 'theme-icon moon-icon');
        moonIcon.innerHTML = '<i class="fas fa-moon"></i>';

        label.appendChild(input);
        label.appendChild(div);
        wrapper.appendChild(label);
        wrapper.appendChild(sunIcon);
        wrapper.appendChild(moonIcon);

        input.addEventListener('change', () => {
            document.body.classList.toggle('dark-theme');
        });

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'styles.css');

        shadow.appendChild(linkElem);
        shadow.appendChild(wrapper);
    }
}
