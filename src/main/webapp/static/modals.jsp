<!--login/signup modals-->
<link rel="stylesheet" type="text/css" href="lib/plugins/bootstrap-datepicker/css/datepicker3.css"/>
<div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog login_dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h2 class="center" id="user_authentication_title">Login</h2>
            </div>

            <!-- LOGIN-->
            <div class="modal-body login_body" id="login_body">
                <!--LOGIN DETAILS-->

                <!--FACEBOOK LOGIN -->
                <div class="span100"><button id="fb_login" class="button fbLogin"><i class="fa fa-facebook-square"></i><span class="margin10">Log in with Facebook</span></button> </div>
                <!--FACEBOOK LOGIN -->

                <div class="center"> <span class="margin15">- or -</span></div>
                <div class="input-group-dl center">

                    <input type="text" class="input_form" placeholder=" Email" id="email_login">
                </div>
                <div class="input-group-dl center">

                    <input type="password" class="input_form" placeholder=" Password" id="password_login">
                    <span class="help-block" id="msignUp_help"></span>
                </div>

                <div class="center"><button id="login_btn" class="button login_btn">Log in</button></div>
                <!--END LOGIN DETAILS-->
            </div>
            <!-- END LOGIN-->

            <!--SIGNUP -->
            <div class="modal-body signup_body invis" id="signup_body">
                <!--SIGNUP DETAILS-->

                <div class='span100'>
                    <div class="input-group-dl ">

                        <input type="text" class="input_form" placeholder=" Email" id="email_signup">
                        <span id="email-help" class="font10 block"></span>
                    </div>

                    <div class="input-group-dl">

                        <input type="password" class="input_form" placeholder=" Password" id="password_signup">

                        <i class="fa fa-eye show_pw"></i>
                        <span id="password-help" class="font10 block"></span>
                    </div>
                    <div class="input-group-dl ">

                        <input type="password" class="input_form" placeholder=" Confirm Password" id="confirm_password">
                        <span id="confirmPassword-help" class="font10 block"></span>
                    </div>
                    <div class="input-group-dl" data-date-viewmode="years">
                        <input class="input_form datepicker" data-date-format= "dd/mm/yyyy" size="16" type="text" id="birthdate" placeholder=" Date Of Birth" readonly>
                    </div>

                    <div class="center"><button id="signup_btn" class="button login_btn blockedOff">Sign up</button></div>
                    <!--END SIGNUP DETAILS-->
                </div>
            </div>
            <!--END SIGNUP-->



            <div class="modal-footer login_footer">
                <div class="center" id="login_footer">Don't have an account yet? <span class='clickable' id='signup_link'><a>Sign up now!</a></span></div>
            </div>
        </div>
    </div>
</div>
<!-- end login/signup modals-->


<!--verify email modal -->
<div class="modal fade in" id="verifyemail" tabindex="-1" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                A verification email has been sent to <span id="user_email"></span>. Activate your account now by clicking on the link in the email now!
            </div>
        </div>
    </div>
</div>
<!--end of verification email -->

<!--shiny loading buttons-->
