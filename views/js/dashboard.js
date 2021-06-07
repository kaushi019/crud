

$(document).ready(()=>{

    if(sessionStorage.length){
        var uname = sessionStorage.getItem("sessionUser")
        console.log(uname)
        $("#username").html("Profile : "+uname);
    }
    else{
        alert("Please Login to access Dashboard")
        window.location = 'login';
    }

    $("#logout-btn").click(()=>{
        sessionStorage.clear();
        window.location = 'login';
    })

})