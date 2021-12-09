function solution() {
    
    //person
    if(document.getElementById('type_person').checked) {

        let firstName = document.getElementById('first_name').value;
        let lastName = document.getElementById('last_name').value;
        let email = document.getElementById('email').value;


        function validateEmail(email) {
            const regExEmail = new RegExp('(?=.{1,64}@)^([A-Za-z0-9\.])+@(?=.{1,64}$)([A-Za-z0-9\.])+$');
            return regExEmail.test(String(email).toLowerCase());
        }

        //name & email validation 
        if (firstName !== null && lastName !== null && validateEmail(email)){
            return true;
        }
        else {
            return false;
        }
    }

    //company
    else if(document.getElementById('type_company').checked) {

        let companyName = document.getElementById('company_name').value;
        let phone = document.getElementById('phone').value;

        function validatePhone(phone) {
            const regExPhone = /^(?![^\d\- ]$)([\- ]*\d){6,}$/;
            if(phone.match(regExPhone)) {
                return true;
            } else {
                return false;
            }
        }
        
        //company name & phone validation
        if (companyName !== null && validatePhone(phone)){
            return true;
        } else {
            return false;
        }
    }

}

solution();