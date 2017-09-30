$(document).ready(function(){
    $('#loginForm').submit(function(){
        
        $.ajax({
            url: $(this).attr('action'),
            type: $(this).attr('method'),
            data: $(this).serialize(),
            success: function(response){
                location.href="/"
            },
            error: function(response){
                $('#errorMessage').text(response.responseText);
                $('#errorMessage').show();
                //console.log(response)
            }
        })
        return false;
    })
})