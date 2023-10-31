
const storageKey = 'theme-preference';
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
    document.body.setAttribute('data-layout-mode', theme.value);
    //let logos = document.querySelectorAll('.logo-lg >img')
   // console.log(logos)

    //for(let i=0; i<=logos.length; i++){
    //logos[0].setAttribute('src', 'images' + '/' + 'logo_' + theme.value + '.svg');
    //logos[1].setAttribute('src', 'images' + '/' + 'logo_' + theme.value + '.svg')

    //}
  
   
   
    if(theme.value=='dark'){
        //const style1='[style^="background-color:var(--bs-sidebar-alert)"]';

        //console.log(document.querySelector('.logo-'+theme.value).classList);
        document.querySelector('.logo-'+theme.value).classList.add("d-block");
        document.querySelector('.logo-'+theme.value).classList.remove("d-none");
        document.querySelector('.logo-light').classList.remove("d-block");
        document.querySelector('.logo-light').classList.add("d-none");
        //data-bs-target=".bs-example-modal-insta"
       
   
   
    

    //buttons-print
    //console.log(document.querySelector(".buttons-print"));
    //for(i=0;i<document.querySelectorAll(style1).length;i++){
           // document.querySelectorAll(style1)[i].setAttribute('style','background-color:#141527');
           // console.log(document.querySelectorAll(style1)[i]);
            
        //}
        //for(k=0;j<document.querySelectorAll(style1).length;k++){
           // document.querySelectorAll(style2)[k].setAttribute('style','background-color:var(--bs-sidebar-alert)');
           // console.log(document.querySelectorAll(style1)[j]);
            
        //}  
    }
    else{
        
        document.querySelector('.logo-'+theme.value).classList.add("d-block");
        document.querySelector('.logo-'+theme.value).classList.remove("d-none");
        document.querySelector('.logo-dark').classList.remove("d-block");
        document.querySelector('.logo-dark').classList.add("d-none");  
        //linkedin
      
        //document.getElementById("#datatable-buttons_wrapper1").querySelector('.button.buttons-print').querySelector('img').setAttribute('src', 'assets/images/social-icons/facebook.png');
        //
        //console.log( document.getElementById("#datatable-buttons_wrapper1"));

       // document.querySelector(".buttons-print").querySelector('img').setAttribute('src', 'assets/images/printer_b.png');
        //for(j=0;j<document.querySelectorAll(style1).length;j++){
           // document.querySelectorAll(style1)[j].setAttribute('style','background-color:var(--bs-sidebar-alert)');
            //console.log(document.querySelectorAll(style1)[j]);
            
       // }  
       
    }

    
    //style="background-color:var(--card);
    //document.querySelector('.logo-'+theme.value).css
    document
        .querySelector('#mode-setting-btn')
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
        .querySelector('#mode-setting-btn')
        .addEventListener('click', onClick)
}

// sync with system changes
window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', ({ matches: isDark }) => {
        theme.value = isDark ? 'dark' : 'light'
        setPreference()
    })
