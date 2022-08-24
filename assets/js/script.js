/* Author: 

*/

//form validation 
let fname = document.forms['sign-in']['fname'];
let lname = document.forms['sign-in']['lname'];
let email = document.forms['sign-in']['email'];
let phone = document.forms['sign-in']['phone'];
let email = document.forms['sign-in']['email'];
let btn = document.querySelector('input[type=submit');

btn.addEventListener('click', validate);

function validate() {
    console.log('i am clicked');
}