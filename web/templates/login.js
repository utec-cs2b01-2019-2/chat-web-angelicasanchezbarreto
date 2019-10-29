    function getData(){
        var username = $('#username').val();
        var password = $('#password').val();
        var message = JSON.stringify({
                "username": username,
                "password": password
            });
        $.ajax({
            url:'/authenticate',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',
            success: function(response){
                console.log("Success");
            	window.location.href="http://127.0.0.1:8000/static/Chat.html"
                }
        });
    }