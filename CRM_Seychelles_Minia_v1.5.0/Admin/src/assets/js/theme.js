
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
    document.body.setAttribute('data-layout-mode', theme.value);

    if(theme.value=='dark'){

        document.querySelector('.logo-'+theme.value).classList.add("d-block");
        document.querySelector('.logo-'+theme.value).classList.remove("d-none");
        document.querySelector('.logo-light').classList.remove("d-block");
        document.querySelector('.logo-light').classList.add("d-none");

        //social btns
        document.querySelector("[data-bs-target='.bs-example-modal-insta']").querySelector("img").setAttribute("src","assets/images/social-icons/instagram_w.png");
        document.querySelector("[data-bs-target='.bs-example-modal-linkedin']").querySelector("img").setAttribute("src","assets/images/social-icons/linkedin_w.png");
        document.querySelector("[data-bs-target='.bs-example-modal-twitter']").querySelector("img").setAttribute("src","assets/images/social-icons/twitter_w.png");
        document.querySelector("[data-bs-target='.bs-example-modal-facebook']").querySelector("img").setAttribute("src","assets/images/social-icons/facebook_w.png");
        document.querySelector("[data-bs-target='.bs-example-modal-yt']").querySelector("img").setAttribute("src","assets/images/social-icons/yt_w.png");
    }
    else{
        document.querySelector('.logo-'+theme.value).classList.add("d-block");
        document.querySelector('.logo-'+theme.value).classList.remove("d-none");
        document.querySelector('.logo-dark').classList.remove("d-block");
        document.querySelector('.logo-dark').classList.add("d-none");  


           //social btns
           document.querySelector("[data-bs-target='.bs-example-modal-insta']").querySelector("img").setAttribute("src","assets/images/social-icons/instagram.png");
           document.querySelector("[data-bs-target='.bs-example-modal-linkedin']").querySelector("img").setAttribute("src","assets/images/social-icons/linkedin.png");
           document.querySelector("[data-bs-target='.bs-example-modal-twitter']").querySelector("img").setAttribute("src","assets/images/social-icons/twitter.png");
           document.querySelector("[data-bs-target='.bs-example-modal-facebook']").querySelector("img").setAttribute("src","assets/images/social-icons/facebook.png");
           document.querySelector("[data-bs-target='.bs-example-modal-yt']").querySelector("img").setAttribute("src","assets/images/social-icons/yt.png");
    }
    document
    .querySelector('#mode-setting-btn')
    ?.setAttribute('aria-label', theme.value)
}

const theme = {
    value: getColorPreference(),
}



// set early so no page flashes / CSS is made aware
reflectPreference()
//let data=window.performance.getEntriesByType("navigation")[0].type;
//if(data){

   // localStorage.setItem(storageKey, 'dark');
//}


 //alert(pageAccessedByReload);

//console.log(data);
window.onload = () => {
    console.log(window.performance.getEntriesByType("navigation").type==0 && window.getEntriesByType("navigation").type== 1 || window.performance
    .getEntriesByType('navigation')
    .map((nav) => nav.type)
    .includes('reload'));
    const pageAccessedByReload = (
        (window.performance.getEntriesByType("navigation").type && window.getEntriesByType("navigation").type== 1) ||
          window.performance
            .getEntriesByType('navigation')
            .map((nav) => nav.type)
            .includes('reload')
      );
      if(pageAccessedByReload==true){
    
        localStorage.setItem(storageKey, 'dark');
        reflectPreference();
      }
      //alert(pageAccessedByReload);
    // set on load so screen readers can see latest value on the button
    //localStorage.setItem(storageKey, 'dark')
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
