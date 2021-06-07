

function check(result){
    if(result.msg == "Fill details")alert("Fill the Details");
    else if(result.msg == "Invalid details")alert("Invalid Username or Password. Try Again");
    else if(result.msg == "success"){
        sessionStorage.setItem("sessionUser", result.username)
        window.location = 'dashboard';
    }
}

$(document).ready(()=>{

    $("#logform").submit( (e)=>{
        e.preventDefault();

        $.ajax({
            url : '/login',
            type: 'POST',
            data : $("#logform").serialize(),
            dataType : "json",
            success:(result)=>{
                console.log(result.msg)
                check(result);
            },
            error : ()=>{}
        });

    });

});