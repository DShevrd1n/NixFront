$(function () {
    var $registerForm = $("#registration");
    $.validator.addMethod("space", function (value, element) {
        return value == ' ' || value.trim().length != 0
    }, "Spaces are not allowed");
    if ($registerForm.length) {
        $registerForm.validate({
            rules: {
                login: {
                    required: true,
                    minlength: 4,
                    space: true
                },
                email: {
                    required: true,
                    space: true
                },
                password: {
                    required: true,
                    minlength: 8
                },
                confirm: {
                    required: true,
                    equalTo: '#password'
                }
            },
            messages:{
                login: {
                    required: 'Enter login',
                    minlength: 'At least 4 symbols'
                },
                email: {
                    required: 'Enter email'
                },
                password: {
                    required: 'Enter password',
                    minlength: 'At least 8 symbols'

                },
                confirm: {
                    required: 'Enter password',
                    equalTo: 'Enter the same password'
                }

        }
        })
    }
})