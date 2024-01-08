let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

let sections = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header nav a");

window.onscroll = ()=>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        
        if (top >= offset && top < offset + height) {
            navLink.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
            })
        }
    })
}
menuicon.onclick = () =>{
    menuicon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "mickyroy85@gmail.com",
        Password : "0130424F24023AE676D14AFB020D78500C0A",
        To : 'sonalishakya71@gmail.com',
        From : "mickyroy85@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

