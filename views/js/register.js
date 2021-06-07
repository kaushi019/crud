

function check(result){
    if(result.msg == "Fill details")alert("Fill the Details");
    else if(result.msg == "Invalid details")alert("Registration Failed.. Try Again");
    else if(result.msg == "success")window.location = 'login';
}

$(document).ready(()=>{

    $("#regform").submit( (e)=>{
        e.preventDefault();

        $.ajax({
            url : '/register',
            type: 'POST',
            data : $("#regform").serialize(),
            dataType : "json",
            success:(result)=>{
                console.log(result.msg)
                check(result);
            },
            error : ()=>{}
        });

    });

});