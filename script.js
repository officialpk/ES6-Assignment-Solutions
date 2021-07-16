var form = document.querySelector('form');
var checkbox = document.querySelector('input[type="checkbox"]');
var tbody = document.querySelector('tbody');
var dataArray =[];

const display=()=>{
    tbody.innerHTML="";
    dataArray.map((itm,index)=>{
        tbody.innerHTML += `
        <tr>
            <td>${index+1}</td>
            <td>${itm.fullname}</td>
            <td>${itm.mobile}</td>
            <td>${itm.email}</td>
            <td>${itm.gender}</td>
            <td>${itm.mode}</td>
        </tr>
        `
    })
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    if(checkbox.checked){
        var textbox = document.querySelectorAll('input[type="text"]');
        // 0 first 1 last 2 mob 3email
        var gender = document.querySelector('input[name="gender"]:checked');
        var mode = document.querySelector('select');
        var pass = document.querySelector('input[type="password"]');

        if(textbox[0].value==''){
            alert("first name field is mandatory");
            return;
        }
        
        if(textbox[1].value==''){
            alert("last name field is mandatory");
            return;
        }
        
        if(textbox[2].value==''){
            alert("check mobile number is valid & field is mandatory");
            return;
        }
        
        if(textbox[3].value==''){
            alert("Check Email Format is correct & field is mandatory");
            return;
        }
        
        if(pass.value==''){
            alert("check password is of valid format & field is mandatory");
            return;
        }
        
        var obj = {
           "fullname": ` ${textbox[0].value} ${textbox[1].value} `,
           "mobile" :`${textbox[2].value}`,
           "email":`${textbox[3].value}`,
           "gender":`${gender.value}`,
           "mode":`${mode.value}`,
           "password":`${pass.value}`
        };

        dataArray.push(obj);
        display();
    }
    else{
        alert("Please accept the Terms and condition to submit the form")
    }
    form.reset();
})