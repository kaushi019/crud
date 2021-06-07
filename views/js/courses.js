
var temp = ""

function del(c){
    console.log(c)

    $.ajax({
        url : `/api/courses/${c}`,
        type : 'DELETE',
        success : (result)=>{
            console.log(result)
        }
        // success : display()
    });

    display();
}

function addextra(){
    var x = $("#editText").val();
    //console.log(temp);
    // console.log(x)

    $.ajax({
        url : `/api/courses/${temp}/${x}`,
        type : 'PUT',
        success : (result)=>{
            console.log(result)
        }
    })

    $('#myModal').modal('hide')

    display();
}

function edit(c){
    temp = c;

    $('#myModal').modal('show')

}

function display(){

    $.get('/api/courses',function(data,status){
        console.log(data);
        var t = "", n = data.objects.length;
        if(n==0)t = "";
        else t = "<tr><th>Courses</th><th>Articles</th><th style='text-align:center;' >Action</th></tr>"
        
        for(let i=n-1;i>=0;i--){
            // if(data.objects[i].isDeleted == false)
                t += "<tr height='px | %' ><td>"+data.objects[i].course+"</td><td>"+data.objects[i].articles+"</td><td align='center' ><button id='"+data.objects[i]._id+"' data-toggle='modal' onclick='edit(this.id)' class='btn btn-primary'>Edit</button><button id='"+data.objects[i]._id+"' style='margin-left:5px' class='btn btn-danger' onclick='del(this.id)' >Delete</button></td></tr>";
        }

        $("#tlist").html(t);

    })
    .fail(function(xhr,status){
        console.log('Failed')
    }) (result)

}

$(document).ready(()=>{

    display();


});

// data-toggle='modal' data-target='#myModal'