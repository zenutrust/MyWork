
const storageKey = 'theme-preference'

const onClick = () => {
    // flip current value
    theme.value = theme.value === 'light'
        ? 'dark'
        : 'light'

    

    
    setPreference()
}

const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
        return localStorage.getItem(storageKey)
    else
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
}

const setPreference = () => {
    localStorage.setItem(storageKey, theme.value)
    reflectPreference()
}

const reflectPreference = () => {
    document.firstElementChild
        .setAttribute('data-theme', theme.value)
    let logos = document.querySelectorAll('.logo')
    console.log(logos)

    //for(let i=0; i<=logos.length; i++){
    logos[0].setAttribute('src', 'images' + '/' + 'logo_' + theme.value + '.svg');
    logos[1].setAttribute('src', 'images' + '/' + 'logo_' + theme.value + '.svg')


    document
        .querySelector('#theme-toggle')
        ?.setAttribute('aria-label', theme.value)
}

const theme = {
    value: getColorPreference(),
}

// set early so no page flashes / CSS is made aware
reflectPreference()

window.onload = () => {
    // set on load so screen readers can see latest value on the button
    reflectPreference()

    // now this script can find and listen for clicks on the control
    document
        .querySelector('#theme-toggle')
        .addEventListener('click', onClick)
}

// sync with system changes
window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', ({ matches: isDark }) => {
        theme.value = isDark ? 'dark' : 'light'
        setPreference()
    })
