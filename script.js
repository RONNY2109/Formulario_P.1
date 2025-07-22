
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

let Countries = document.querySelector("#countries");

 [...Countries].forEach(Option => {
 Option.innerHTML = Option.innerHTML.split("(")[0];  
 })

//selectores
//let Country = document.querySelector("#Countries");
const usernameImput = document.querySelector("#username");//paso n1 
const  emailInput= document.querySelector("#Email-usuario"); 
let phoneCode = document.querySelector("#phone-code"); 
const phoneImput = document.querySelector("#phone");
const passwordImput = document.querySelector("#password");
const comfirmPasswordImput = document.querySelector("#confirm-password");
//const formBtn = document.querySelector("#n-Usuario");


let userValidacion = false; // paso n5
let emailValidacion = false; // paso n5
let phoneValidacion = false; // paso n5
let passwordValidacion = false; // paso n5
let comfirmPasswordValidacion = false; // paso n5

//validaciones
  // username.addEventListener("input", (e) => {// paso n2
  //     // console.log(e.target.value);
  //     let user = e.target.value;// paso n3

  //     let usernValidacion = userRegex.test(user);// paso n4

  //     console.log(usernValidacion);
      
      
  // })

  // username. addEventListener("input", (e) => { // paso n2
  //   // console.log(e.target.value);
  //    usernValidacion = userRegex.test(e.target.value); // paso n3

  //    const information = e.target.parentElement.children[1];
     
  //   if (usernValidacion) { // paso n4
  //     username.classList.add("correcto");
  //     username.classList.remove("incorrecto");
  //     information.classList.remove("show-information")
  //   } else {
  //     username.classList.add("incorrecto");
  //     username.classList.remove("correcto");
  //      information.classList.add("show-information")
  //   }
  //   });

    const validation = (e, validation, element)=> { // paso n2
      // console.log(e.target.value);
       const information = e.target.parentElement.children[1];
       
      if (validation) { // paso n4
        element.classList.add("correcto");
        element.classList.remove("incorrecto");
        information.classList.remove("show-information")
      } else {
        element.classList.add("incorrecto");
        element.classList.remove("correcto");
         information.classList.add("show-information")
      }
      };

  // if (usernValidacion) {
  //   username.classList.add("is-valid");
  //   username.classList.remove("not-valid");
  // } else {
  //   username.classList.add("not-valid");
  //   }
// // split 
// // innerhtml

//"===" estrictamente igual, que sean igual en un tipo de dato 

//?= operador termario ?=if, :=else  

usernameImput.addEventListener("input", (e) => { // paso n2
userValidacion = userRegex.test(e.target.value); // paso n3
validation(e, userValidacion, usernameImput); // paso n4
});

emailInput.addEventListener("input", (e) => { // paso n2
emailValidacion = emailRegex.test(e.target.value); // paso n3
validation(e, emailValidacion, emailInput); // paso n4
});


Countries.addEventListener("imput", (e) => {
 const optionSelected = [...e.target.children].find(option => option.selected );
  phoneCode.innerHTML = `+${optionSelected.value}`; // paso n2
  Countries.classList.add("correcto");
  phoneCode.classList.remove("correcto");
});

  phoneImput.addEventListener("input", (e) => { // paso n2
    // console.log(e.target.value);
     phoneCode = phonenumberRegex.test(e.target.value); // paso n3

    const information = e.target.parentElement.parentElement.children[1];
     
     if (phoneValidacion) { // paso n4
       phone.classList.add("correcto");
       phone.classList.remove("incorrecto");
       information.classList.remove("show-information")
     } else {
       phone.classList.add("incorrecto");
       phone.classList.remove("correcto");
       information.classList.add("show-information")

      console.log(information);
      
     }
    });

passwordImput.addEventListener("input", (e) => { // paso n2
passwordValidacion = passwordRegex.test(e.target.value); // paso n3
validation(e, passwordValidacion, passwordImput); // paso n4
});

comfirmPasswordImput.addEventListener("input", (e) => { // paso n2
passwordValidacion = passwordImput.value== e.target.value; // paso n3
validation(e, comfirmPasswordValidacion, comfirmPasswordImput); // paso n4
});
    