
function del(c){
    console.log(c)

    $.ajax({
        url : `/api/courses/${c}`,
        type : 'DELETE',
        success : (result)=>{
            console.log(result)
        }
    });

    display();
}

function edit(c){
    console.log(c)

    $.ajax({
        url : `/api/courses/${c}`,
        type : 'PUT',
        success : (result)=>{
            console.log(result)
        }
    })

    display();
}

function display(){

    $.get('/api/courses',function(data,status){
        console.log(data);
        var t = "", n = data.objects.length;
        t = "<tr><th>Courses</th><th>Articles</th><th style='text-align:center;' >Action</th></tr>"
        for(let i=n-1;i>=0;i--){
            // if(data.objects[i].isDeleted == false)
                t += "<tr><td>"+data.objects[i].course+"</td><td>"+data.objects[i].articles+"</td><td align='center' ><button id='"+data.objects[i]._id+"' onclick='edit(this.id)' class='btn btn-primary'>Edit</button><button id='"+data.objects[i]._id+"' style='margin-left:5px' class='btn btn-danger' onclick='del(this.id)' >Delete</button></td></tr>";
        }
        
        if(n>0)
            $("#tlist").html(t);

    })
    .fail(function(xhr,status){
        console.log('Failed')
    })

}

$(document).ready(()=>{

    display();


});