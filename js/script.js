let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n))
}

        
function showDivs(n) {
    let i;
    let imglist = document.getElementsByClassName("img-slideshow");
    if (n > imglist.length) slideIndex = 1;
    else if (n<1) slideIndex = imglist.length;
    for(i=0; i < imglist.length; i++) {
        imglist[i].style.display = "none"
     }
    imglist[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 3000)
 

//form
function validation() {
    let username = document.getElementById("form-username");
    console.log(username.value);
    if (username.value == "" || username.value == null) {
        username.style.border = "2px solid red"
        alert("Please fill in your name")
    } else {
        alert("Welcome " + username.value);
    } 
    let email = document.getElementById("form-email");
    console.log(email.value);
    if (email.value == "" || email.value == null) {
        email.style.border = "2px solid red"
        alert("Please fill in your email address")
    }    
}


document.getElementById("submit-btn").addEventListener("click", () => validation())

