$(document).ready(()=>{




        $.get('/api/courses',function(data,status){
            console.log(data);
            var t = "", n = data.objects.length;
            t = "<tr><th>Courses</th><th>Articles</th><th style='text-align:center;' >Action</th></tr>"
            for(let i=n-1;i>=0;i--)
                t += "<tr><td>"+data.objects[i].course+"</td><td>"+data.objects[i].articles+"</td><td align='center' ><button class='btn btn-primary'>Edit</button><button style='margin-left:5px' class='btn btn-danger'>Delete</button></td></tr>";
            
            $("#tlist").html(t);

        })
        .fail(function(xhr,status){
            console.log('Failed')
        })

});