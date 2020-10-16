$.validator.setDefaults({
    submitHandler: function() {
        alert("已上傳！");
        $("form").reset();
        $("form")[0].querySelectorAll('.form-control').forEach(element => {
            element.classList.remove('is-valid');
            element.classList.remove('is-invalid');
        });
    }
});
$(document).ready(function() {
    $('#twzipcode').twzipcode();
    //override jquery validate plugin defaults
    // http://stackoverflow.com/a/18754780
    /*
	$.validator.setDefaults({
	    highlight: function(element) {
	        $(element).closest(".form-group").addClass("has-error");
	    },

	    unhighlight: function(element) {
	        $(element).closest(".form-group").removeClass("has-error");
	    },

	    errorElement: "span",

	    errorClass: "help-block",

	    errorPlacement: function(error, element) {
	        if (element.parent(".input-group").length ||
	        	element.prop("type") === "checkbox" ||
	        	element.prop("type") === "radio"
	        ) {
	            error.insertAfter(element.parent());
	        } else {
	            error.insertAfter(element);
	        }
	    }
	});
    */
    $("form").validate({
        lang: 'zh_TW',
        rules: {
            email: {
                required: true,
                maxlength: 255
            },
            emailConfirm: {
                required: true,
                equalTo: "#email",
                maxlength: 255
            },
            zipCode: {
                maxlength: 32
            },
            password: {
                required: true,
                minlength: 5
            },
            passwordConfirm: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            termsOfUse: "required"
        },
        messages: {
            email: {
                required: "請輸入您的電子郵件地址。",
            },
            emailConfirm: {
                required: "請確認您的電子郵件地址。",
                equalTo: "電子郵件地址不相符。"
            },
            password: {
                required: "請選擇一個密碼。"
            },
            passwordConfirm: {
                required: "請確認您的密碼。",
                equalTo: "密碼不相符。"
            },
            termsOfUse: {
                required: "您必須同意服務條款。"
            }
        },
        errorElement: "em",
        errorPlacement: function(error, element) {
            // Add the `invalid-feedback` class to the error element
            error.addClass("invalid-feedback");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.next("label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        }
    });
});