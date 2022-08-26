/* Author: 

*/
const form = document.querySelector(".sign-in-form");
const error = document.getElementsByClassName("err");
class validator {
    errorMsg = [];
    constructor(values) {
        values.forEach((val, i) => {
            try {
                if (val == "") {
                    throw "this is required";
                } else {
                    throw "";
                }
            } catch (error) {
                this.errorMsg[i] = error;
            }
        });
        this.display();
    }
    display() {
        alert(this.errorMsg);
        this.errorMsg.forEach((msg, i) => {
            alert(msg);
            if (msg != "") {
                console.log(error[i]);
                error[i].innerHTML = msg;
                error[i].style.textIndent = 0;
            } else {
                error[i].innerHTML = "";
            }
        });
    }

}
//form validation 
form.addEventListener('submit', validate);


function validate(e) {
    const fname = document.forms['sign-in']['fname'].value;
    const lname = document.forms['sign-in']['lname'].value;
    const email = document.forms['sign-in']['email'].value;
    const phone = document.forms['sign-in']['phone'].value;
    let fields = [fname, lname, email, phone];
    const valid = new validator(fields);
    e.preventDefault();
}