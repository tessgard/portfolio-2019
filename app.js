
let aboutBtn = document.querySelector("#about-btn")
let projBtn = document.querySelector("#project-btn")
let contactBtn = document.querySelector("#contact-btn")
let contactBtn2 = document.querySelector("#contact-btn-2")


let about = document.querySelector(".about")
let project = document.querySelector(".project")
let contact = document.querySelector(".contact")
let drawing = document.querySelector(".drawing")
let rightBox = document.querySelector(".right-box")

// clicking on ABOUT button
aboutBtn.addEventListener("click", function (event) {
  
  about.classList.remove("about-landing-page-right-inner-bottom-hide")
  about.classList.add("about-landing-page-right-inner-bottom")

  project.classList.remove("project-landing-page-right-inner-bottom")

  contact.classList.remove("contact-landing-page-right-inner-bottom")
  contact.classList.add("contact-landing-page-right-inner-bottom-hide")

  drawing.classList.remove("landing-page-left-hide")
  drawing.classList.add("landing-page-left-wink")

});


// clicking on PROJECT button
projBtn.addEventListener("click", function (event) {

  project.classList.add("project-landing-page-right-inner-bottom")

  about.classList.add("about-landing-page-right-inner-bottom-hide")

  contact.classList.remove("contact-landing-page-right-inner-bottom")
  contact.classList.add("contact-landing-page-right-inner-bottom-hide")

  drawing.classList.add("landing-page-left-hide")
  drawing.classList.remove("landing-page-left-wink")

  rightBox.classList.add("landing-page-right-full")
  rightBox.classList.remove("landing-page-right")

});

// clicking on CONTACT button
contactBtn.addEventListener("click", function (event) {

  contact.classList.add("contact-landing-page-right-inner-bottom")
  contact.classList.remove("contact-landing-page-right-inner-bottom-hide")

  about.classList.add("about-landing-page-right-inner-bottom-hide")

  project.classList.remove("project-landing-page-right-inner-bottom")

  drawing.classList.add("landing-page-left-hide")
  drawing.classList.remove("landing-page-left-wink")
  

});

// clicking on CONTACT button 2
contactBtn2.addEventListener("click", function (event) {

  contact.classList.add("contact-landing-page-right-inner-bottom")
  contact.classList.remove("contact-landing-page-right-inner-bottom-hide")

  about.classList.add("about-landing-page-right-inner-bottom-hide")

  project.classList.remove("project-landing-page-right-inner-bottom")

  drawing.classList.add("landing-page-left-hide")
  drawing.classList.remove("landing-page-left-wink")
  

});

