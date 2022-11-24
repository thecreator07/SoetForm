
const emails = document.querySelector("#email");
const emailerr = document.querySelector("#emailerror");
const password = document.querySelector("#pass");
const cPassword = document.querySelector("#c-pass");
const passErr = document.querySelectorAll("#passError");
const conctnumber = document.querySelector("#conctnumber");
const numberror = document.querySelector("#numberror");
 
const fname=document.getElementById("fname");
const lname=document.getElementById("lname");
const mname=document.getElementById("mname");
const faname=document.getElementById("faname");
const gender=document.getElementById("gender");
const dob=document.getElementById("dob");
const address=document.getElementById("address");
const district=document.getElementById("district");
const city=document.getElementById("city");
const state=document.getElementById("state");
const pincode=document.getElementById("pincode");



console.log(conctnumber,numberror);
// for mobile number validation
if (conctnumber) {
  conctnumber.addEventListener('input', () => {
    const numbvalue = conctnumber.value;
    console.log(numbvalue);
    if (numbvalue === "") {
      numberror.textContent = "Enter your mobile number ";
    }
    else {
      numberror.textContent = "";
    }
  });
}

if(fname && lname && mname && faname && gender && dob && address && district && city && state && pincode===" "){
  next1.removeAttribute("disabled");
  next1.style.cursor="pointer";
}
// for gmail validation
// if (emails) {
//   emails.oninput = () => {
//     const emailvalue = emails.value;
//     const regEx =
//       (/^[0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
//     if (emailvalue.match(regEx)) {
//       emailerr.textContent = "Strong Password!";
//       emailerr.style.color = "green";
//       emails.style.border = "1px solid green";
//     } else {
//       emailerr.textContent =
//         "Password must contain atleast 8 character,  one capital alphabet [A-Z],  one small alphabet [a-z],  one number [0-9] and a special character (@,$,*,/) ";
//       emailerr.style.color = "red";
//       emails.style.border = "1px solid red";
//     }
//   };
// }

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");

const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const back1 = document.getElementById("back1");
const back2 = document.getElementById("back2");
const submit = document.getElementById("submit");

const prslninfo = document.getElementById("prslninfo");
const eduinfo = document.getElementById("eduinfo");
const prfsnlinfo = document.getElementById("prfsnlinfo");
const welcome = document.getElementById("welcome");

const sliding = document.querySelector("#sliding");

if (next1) {

  if(fname==" " && lname== " " && mname==" " && faname==" " && gender==" " && dob==" " && address==" " && district==" " && city==" " && state==" " && pincode==" "){
    next1.removeAttribute("disabled");
    next1.style.cursor="pointer";
  }
  next1.onclick = function () {
    sliding.classList.add("translation_25")
    prslninfo.classList.add("jaddu");
    eduinfo.classList.remove("jaddu");
    prfsnlinfo.classList.add("jaddu");
    // step1.classList.remove("borderbottom");
    // step2.classList.add("borderbottom");
  };
}

if (back1) {

  back1.onclick = function () {
    sliding.classList.remove("translation_25")
    prslninfo.classList.remove("jaddu");
    eduinfo.classList.add("jaddu");
    prfsnlinfo.classList.add("jaddu");
    // step1.classList.add("borderbottom");
    // step2.classList.remove("borderbottom");
  };
}

if (next2) {

  next2.onclick = function () {
    sliding.classList.add("translation_50")
    sliding.classList.remove("translation_25")
    eduinfo.classList.add("jaddu");
    prfsnlinfo.classList.remove("jaddu");
    // step2.classList.remove("borderbottom");
    // step3.classList.add("borderbottom");
  };
}

if (back2) {
  back2.onclick = function () {
    sliding.classList.remove("translation_50")
    sliding.classList.add("translation_25")
    eduinfo.classList.remove("jaddu");
    prfsnlinfo.classList.add("jaddu");
    // step3.classList.remove("borderbottom");
    // step2.classList.add("borderbottom");
  };
}

if (submit) {
  submit.onclick = function () {
    sliding.classList.remove("translation_50")
    sliding.classList.add("translation_75")
    welcome.classList.remove("jaddu")
    prfsnlinfo.classList.add("jaddu");
    // step4.classList.add("borderbottom");
    // step3.classList.remove("borderbottom");
  };
}

// For deparment 
document.getElementById("department").addEventListener('change', (event) => {
  let selectoption = event.target.value
  const Courses = document.getElementById("Courses");
  if (selectoption === "CSE") {
    Courses.classList.remove("jaddu");
  }
  console.log(selectoption);
});


function myFunction() {
  var checkBox = document.getElementById("checkBox");
  var checking = document.getElementById("checking");
  if (checkBox.checked == true){
    checking.classList.add("jaddu");
  } else {
    checking.classList.remove("jaddu");
  }
}