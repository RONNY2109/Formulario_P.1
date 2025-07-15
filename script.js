
// regex

const emailRegexex =    /^(?=.*[a-z])(?=.*[0-9]).{6,16}$/;
const passwordRegex =    /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,16}$/;
const emailRegex =       /^\S+@\S+\.\S{3,4}$/;
const phonenumberRegex = /^[0-9]{6,16}$/;   // esto es un "^" anceto circunflejo, S cualquier letra y numeros, (2,3) el primer numero es el minimo y el segundo el maximo
const userRegex =       /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,16}$/; // esto es un "^" anceto circunflejo, S cualquier letra y numeros, (2,3) el primer numero es el minimo y el segundo el maximo


//para verificar si cumple

//console.log("userRegex:",userRegex.test("angelleal2"))
//console.log("emailRegex",emailRegex.test("angelleal2@gmail.com"))
//console.log("passwordRegex",passwordRegex.test("aNgelleal2"))
// console.log("phonenumberRegex",phonenumberRegex.test("23"))

// let Countries = document.querySelector("#Country");

// // console.log(pais);
// let arrayContries = [...Countries];

// arrayContries.forEach( Country => {

//   console.log(Country.innerText.split(" ")[0]);
  
//   let onlycontries = Country.innerText.split(" ")[0];
//   console.log(onlycontries);
  
//   Countries.innerHTML = onlycontries;
  
//})

let Countries = document.querySelector("#Country");

 [...Countries].forEach(Option => {
 Option.innerHTML = Option.innerHTML.split("(")[0];  
 })

//selectores
let Country = document.querySelector("#Country");
const username = document.querySelector("#n-Usuario");//paso n1 
const  emailInput= document.querySelector("#Email-usuario"); 
const phoneCode = document.querySelector("#phone-code"); 
const phoneNumber = document.querySelector("#phone");
const passwordImput = document.querySelector("#password");
const comfirmPasswordImput = document.querySelector("#confirm password");
const formBtn = document.querySelector("#n-Usuario");

//validaciones
  username.addEventListener("input", (e) => {// paso n2
      // console.log(e.target.value);
      let user = e.target.value;// paso n3

      let usernValidacion = userRegex.test(user);// paso n4

      console.log(usernValidacion);
      
      
  })

  if (usernValidacion) {
    username.classList.add("is-valid");
    username.classList.remove("not-valid");
  } else {
    username.classList.add("not-valid");
    }
// // split 
// // innerhtml


