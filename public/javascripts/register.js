$(document).ready(function(){
    $.validator.setDefaults({
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });
    $("#registerForm").validate({
        onkeyup:false,
        rules: {
            username: {
                required: true,
                remote: {
                    url: '/users/usernameExists',
                    type: 'post'
                }
            },
            password: {
                required: true,
                minlength: 3
            },
            passwordConfirm: {
                required: true,
                minlength: 3,
                equalTo: "#password"
            },
        },
        messages: {
            username: {
                required: "Please entry your username",
                remote: $.validator.format("{0} is already in use")
            },
            password: {
                required: "password cannot be blank",
                minlength: "at least 3 character"
            },
            passwordConfirm: {
                required: "passwordConfirm cannot be blank",
                minlength: "at least 3 character",
                equalTo: "confirm password not same as password"
            }
        }
    });
})