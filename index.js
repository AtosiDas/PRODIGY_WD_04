var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabName){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

var sidemenu = document.getElementById("sideMenu");
function openMenu(){
    sidemenu.style.right="0";
}
function closeMenu(){
    sidemenu.style.right="-200px";
}
var year = new Date().getFullYear();

const scriptURL = 'https://script.google.com/macros/s/AKfycbxHlnRKSMnX2qOnaHDvefeJbl1ckkrweqr_18VMGXsjGewA4iFFULVcpfNILTfNhm7QSg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully..."
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
});


