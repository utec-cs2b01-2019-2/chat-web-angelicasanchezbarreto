function sendMessage() {
    alert("HEEEEEEEEEEEEEY");
}

var current_id=0;
function getCurrent() {
    $.getJSON("/current", function(data) {
        var current=document.getElementById("current");
        current.innerHTML=data['name']+" "+data['fullname'];
        current_id=data['id'];
        getAllUsers();
    });
}


function getMessage(user_from_id, user_to_id){
    alert("Voy a traer los mensajes entre "+ user_from_id +" y "+ user_to_id);
}

function getAllUsers(user_from_id){
    console.log("Voy a traer todos los usuarios");
    $.getJSON("/users_except_me/"+current_id, function(data){
    var i =0;
    $.each(data, function(){
        user_to = data[i]['id'];
        e = '<div class="alert" role="alert" onclick="getMessages('+user_from_id+','+data[i]['id'] +')" >';
              e= e+' <span class="glyphicon glyphicon-user" aria-hidden="true"></span>';
                        e = e+ data[i]['name']  +" "+ data[i]['fullname'];
                        e= e+ "<div>@"+data[i]['username']+"</div>";
                        e = e+' </div>';
        i = i+1;
        $("<div/>",{html:e}).appendTo("#usuarios");
        });
    });
}


