const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');
const navItemEls = document.querySelectorAll('.nav__item');

hamburgerEl.addEventListener('click', () => {
  navEl.classList.toggle('nav--open');
  hamburgerEl.classList.toggle('hamburger--open');
});

navItemEls.forEach(navItemEl => {
  navItemEl.addEventListener('click', () => {
    navEl.classList.remove('nav--open');
    hamburgerEl.classList.remove('hamburger--open');
  });
});


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    // lerp:0.09
});


const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const company = document.getElementById("company");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const submit = document.getElementsByClassName("form-control")[0];

console.log(fname.value);
console.log(email.value);

submit.addEventListener('submit',(e)=>{
  e.preventDefault();

  let ebody = `
  <b> Name: </b> ${fname.value}&nbsp;${lname.value}
  <br>
  <b>Company:</b> ${company.value}
  <br>
  <b>Email:</b> ${email.value}
  <br>
  <b>Phone:</b>  ${phone.value}
  `

  alert("Simple Mail Transfer Protocol server not working");

  // EMAIL CODE HERE 
  Email.send({
    SecureToken : "0d48ec32-c777-4f0a-bfad-9d3eb7ba0be6",
    To : 'printustaadofficial@gmail.com',
    From : "printustaadofficial@gmail.com",
    Subject : email.value,
    Body : ebody,
  }).then(
  message => alert(message)
  );


})


// 0d48ec32-c777-4f0a-bfad-9d3eb7ba0be6
// AF1801F28D0DBB6C106254DA3DA4CAFD05DE