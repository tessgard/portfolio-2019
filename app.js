
let aboutBtn = document.querySelector("#about-btn")
let projBtn = document.querySelector("#project-btn")
let contactBtn = document.querySelector("#contact-btn")

let about = document.querySelector(".about")
let project = document.querySelector(".project")
let contact = document.querySelector(".contact")

// clicking on ABOUT button
aboutBtn.addEventListener("click", function (event) {
  
  about.classList.remove("about-landing-page-right-inner-bottom-hide")
  about.classList.add("about-landing-page-right-inner-bottom")

  project.classList.remove("project-landing-page-right-inner-bottom")

  contact.classList.remove("contact-landing-page-right-inner-bottom")
  contact.classList.add("contact-landing-page-right-inner-bottom-hide")
});


// clicking on PROJECT button
projBtn.addEventListener("click", function (event) {

  project.classList.add("project-landing-page-right-inner-bottom")

  about.classList.add("about-landing-page-right-inner-bottom-hide")

  contact.classList.remove("contact-landing-page-right-inner-bottom")
  contact.classList.add("contact-landing-page-right-inner-bottom-hide")

});

// clicking on CONTACT button
contactBtn.addEventListener("click", function (event) {

  contact.classList.add("contact-landing-page-right-inner-bottom")
  contact.classList.remove("contact-landing-page-right-inner-bottom-hide")

  about.classList.add("about-landing-page-right-inner-bottom-hide")

  project.classList.remove("project-landing-page-right-inner-bottom")

});