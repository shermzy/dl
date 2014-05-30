<!--login/signup modals-->
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
                <div class="center"><button id="fb_login" class="button fbLogin"><i class="fa fa-facebook-square"></i><span class="margin10">Log in with Facebook</span></button> </div>
                <div class="center"> <span class="margin15">- or -</span></div>
                <div class="input-group-dl center">

                    <input type="text" class="input_text" placeholder=" Email" id="email">
                </div>
                <div class="input-group-dl center">

                    <input type="password" class="input_text" placeholder=" Password" id="password">
                </div>

                <div class="center"><button id="login_btn" class="button login_btn">Log in</button></div>
                <!--END LOGIN DETAILS-->
            </div>
            <!-- END LOGIN-->

            <!--SIGNUP -->
            <div class="modal-body signup_body invis" id="signup_body">
                <!--SIGNUP DETAILS-->

                <div class='center'>
                    <div class="input-group-dl ">

                        <input type="text" class="input_text" placeholder=" Email" id="email">
                    </div>

                    <div class="input-group-dl ">

                        <input type="password" class="input_text" placeholder=" Password" id="password">
                    </div>
                    <div class="input-group-dl ">

                        <input type="password" class="input_text" placeholder=" Confirm Password" id="confirm_email">
                    </div>
                    <div> Date of Birth: </div>
                    <div class="input-group-dl ">

                        <input type="text" class="input_text span10 input-center" placeholder=" day" id="signup_day">
                        <select class="input_text span35" id="signup_month">
                            <option value='1'>January</option>
                            <option value='2'>February</option>
                            <option value='3'>March</option>
                            <option value='4'>April</option>
                            <option value='5'>May</option>
                            <option value='6'>June</option>
                            <option value='7'>July</option>
                            <option value='8'>August</option>
                            <option value='9'>September</option>
                            <option value='10'>October</option>
                            <option value='11'>November</option>
                            <option value='12'>December</option>
                            
                            
                        </select>
                        <input type="text" class="input_text input_center" placeholder=" year" id="signup_year">

                    </div>


                    <div class="center"><button id="login_btn" class="button login_btn">Sign up</button></div>
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

<script>

</script>