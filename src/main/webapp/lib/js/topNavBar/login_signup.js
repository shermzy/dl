/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var email = false,
        password = false,
        confirmPassword = false,
        dob = false;
var date_count = 0;
//fb signup
$('#fb_login').click(function() {
    fb_login();
});
//sign up link at the bottom of login/signup modal
function enableSignup() {
    $('#signup_link').click(function() {
        $('#login_body').slideToggle(function() {
            $('#user_authentication_title').text("Sign Up");
            $('#signup_body').slideToggle();
            $('#login_footer').html("Already have an account? <span class='clickable' id='login_link'><a>Log in</a></span>");
            enableLogin();
        });


    });
}

//log in link at the bottom of login/signup modal

function enableLogin() {

    $('#login_link').click(function() {
        $('#signup_body').slideToggle(function() {
            $('#user_authentication_title').text("Log in");
            $('#login_body').slideToggle();
            $('#login_footer').html("Don't have an account yet? <span class='clickable' id='signup_link'><a>Sign up now!</a></span>");
            enableSignup();
        });
    });
    initSignupValidation();

}

function signupInit() {
    $('button#login_btn').click(function() {
        console.log("processSignup")
        $.post('processRegister',
                {type: 'signup',
                    email: $('#email_signup').val(),
                    password: $('#password_signup').val(),
                    dob: $('#birthdate').val()}
        , function(success) {

        })
    })
}
function update() {

    if ((email + password + confirmPassword + dob) == 4) {

        $('button#login_btn').removeClass('blockedOff');
        signupInit();
    }
}
function initSignupValidation() {
    //check for email

    $("#email_signup").change(function() {
        $('#email-help').html('');
        var $this = $('#email_signup').val().trim();
        var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var validEmail = false;
        if (filter.test($this)) {
            validEmail = true;

        }

        $.ajax({url: "processAuthenticate", type: 'GET',
            data: {type: 'checkEmail', email: $this},
            success: function(response) {

                if ($.trim(response) === "available" && validEmail) {

                    //no existing email in database and it is a valid email
                    $('#email_signup').removeClass('error');
                    $('#email-help').html('Email is available <i class="fa fa-check"></i>').addClass('success green');
                    email = true;
                    update();
                } else if ($.trim(response) === "unavailable" && validEmail) {
                    //email has been used to registered before but it is a valid email
                    email = false;
                    update()
                    $("#email_signup").addClass('border-red');
                    $('#email-help').html("Sorry, it looks like " + $('#email_signup').val() + " belongs to an existing account.<i class='fa fa-warning'></i> ").addClass('error').removeClass('success');
                } else {
                    //email entered is not valid
                    email = false;
                    update()
                    $("#email_signup").addClass('border-red');
                    $('#email-help').html("Please enter a valid email address. <i class='fa fa-warning'></i>").addClass('error').removeClass('success');
                }
            },
            error: function(response) {
                alert(response);
            }
        });
    });

//check if password is weak or very weak
    $('#password_signup').change(function() {
        $('#password-help').html('');
        if ($('#pw_strength').hasClass('weak') || $('#pw_strength').hasClass('veryweak')) {
            $('#password-help').html("Password should contain at least an Uppercase letter, a lowercase letter, numbers and at least 6 chracters long.").addClass('error');
            password = false;
            update();
        } else {
            password = true;
            update();
        }
    })
    //validate password confirmation
    $("#confirm_password").change(function() {
        $('#confirmPassword-help').removeClass('error red green');
        var $this = $('#confirm_password').val().trim();
        if ($this != $('#password_signup').val().trim()) {
            $('#confirmPassword-help').html("Passwords do not tally. <i class='fa fa-warning'></i>").addClass('error red');
            confirmPassword = false;
            update();
        } else {
            $('#confirmPassword-help').html('Password Matched. <i class="fa fa-check"></i>').addClass('success').addClass('green');
            confirmPassword = true;
            update();
        }
    });
    $("#birthdate").change(function() {
        if (date_count == 2) {
            dob = true;
            update();
            date_count = 0;
        } else {
            date_count++
        }
    })

}

/*!
 * strength.js
 * Original author: @aaronlumsden
 * Further changes, comments: @aaronlumsden
 * Licensed under the MIT license
 */
;
(function($, window, document, undefined) {

    var pluginName = "strength",
            defaults = {
                strengthClass: 'strength',
                strengthMeterClass: 'strength_meter',
                strengthButtonClass: 'button_strength',
                strengthButtonText: 'Show Password',
                strengthButtonTextToggle: 'Hide Password'
            };

    // $('<style>body { background-color: red; color: white; }</style>').appendTo('head');

    function Plugin(element, options) {
        this.element = element;
        this.$elem = $(this.element);
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {


            var characters = 0;
            var capitalletters = 0;
            var loweletters = 0;
            var number = 0;
            var special = 0;

            var upperCase = new RegExp('[A-Z]');
            var lowerCase = new RegExp('[a-z]');
            var numbers = new RegExp('[0-9]');
            var specialchars = new RegExp('([!,%,&,@,#,$,^,*,?,_,~])');

            function GetPercentage(a, b) {
                return ((b / a) * 100);
            }

            function check_strength(thisval, thisid) {
                if (thisval.length > 8) {
                    characters = 1;
                } else {
                    characters = 0;
                }
                ;
                if (thisval.match(upperCase)) {
                    capitalletters = 1
                } else {
                    capitalletters = 0;
                }
                ;
                if (thisval.match(lowerCase)) {
                    loweletters = 1
                } else {
                    loweletters = 0;
                }
                ;
                if (thisval.match(numbers)) {
                    number = 1
                } else {
                    number = 0;
                }
                ;

                var total = characters + capitalletters + loweletters + number + special;
                var totalpercent = GetPercentage(7, total).toFixed(0);



                get_total(total, thisid);
            }

            function get_total(total, thisid) {

                var thismeter = $('div[data-meter="' + thisid + '"]');
                if (total == 0) {
                    thismeter.removeClass().html('');
                } else if (total <= 1) {
                    thismeter.removeClass();
                    //thismeter.addClass('veryweak').html('<p>Strength: very weak</p>');
                    thismeter.addClass('veryweak')
                } else if (total == 2) {
                    thismeter.removeClass();
                    // thismeter.addClass('weak').html('<p>Strength: weak</p>');
                    thismeter.addClass('weak')
                } else if (total == 3) {
                    thismeter.removeClass();
                    //thismeter.addClass('medium').html('<p>Strength: medium</p>');
                    thismeter.addClass('medium')
                } else {
                    thismeter.removeClass();
                    // thismeter.addClass('strong').html('<p>Strength: strong</p>');
                    thismeter.addClass('strong');
                }

            }





            var isShown = false;
            var strengthButtonText = this.options.strengthButtonText;
            var strengthButtonTextToggle = this.options.strengthButtonTextToggle;


            thisid = this.$elem.attr('id');

            this.$elem.addClass(this.options.strengthClass).attr('data-password', thisid).after('<input style="display:none" class="input_text ' + this.options.strengthClass + '" placeholder=" Password" data-password="' + thisid + '" type="text" name="" value=""><div class="' + this.options.strengthMeterClass + '"><div id="pw_strength" data-meter="' + thisid + '"><p></p></div></div>');

            this.$elem.bind('keyup keydown', function(event) {
                thisval = $('#' + thisid).val();
                $('.strength_meter div').slideDown();
                $('input[type="text"][data-password="' + thisid + '"]').val(thisval);
                check_strength(thisval, thisid);

            });

            $('input[type="text"][data-password="' + thisid + '"]').bind('keyup keydown', function(event) {
                thisval = $('input[type="text"][data-password="' + thisid + '"]').val();

                $('input[type="password"][data-password="' + thisid + '"]').val(thisval);
                check_strength(thisval, thisid);

            });



            $(document.body).on('click', '.show_pw', function(e) {
                e.preventDefault();

                thisclass = 'hide_' + $(this).attr('class');




                if (isShown) {
                    $('input[type="text"][data-password="' + thisid + '"]').hide();
                    $('input[type="password"][data-password="' + thisid + '"]').show().focus();
                    $('a[data-password-button="' + thisid + '"]').removeClass(thisclass).html(strengthButtonText);
                    isShown = false;

                } else {
                    $('input[type="text"][data-password="' + thisid + '"]').show().focus();
                    $('input[type="password"][data-password="' + thisid + '"]').hide();
                    $('a[data-password-button="' + thisid + '"]').addClass(thisclass).html(strengthButtonTextToggle);
                    isShown = true;

                }



            });




        },
        yourOtherFunction: function(el, options) {
            // some logic
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);





$('#password_signup').strength({
    strengthClass: 'strength',
    strengthMeterClass: 'strength_meter',
    strengthButtonClass: 'button_strength',
    strengthButtonText: 'Show Password',
    strengthButtonTextToggle: 'Hide Password'
});