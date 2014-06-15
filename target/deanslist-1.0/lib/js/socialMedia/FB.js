/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var fb_token;
var fb_userId = null;
var fb_email;


window.fbAsyncInit = function() {
    FB.init({
        appId: '257806494399597',
        oauth: true,
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true // parse XFBML
    });
    FB.getLoginStatus(function(response) {
        if (response.authResponse) {

            var parts = location.pathname.split('/');
            
            //change header
            loggedInNav();
            fb_token = response.authResponse.accessToken;
            fb_userId = response.authResponse.userID;

            FB.api('/me', function(response) {
                var picSrc = ("https://graph.facebook.com/" + response.id + "/picture?width=120");
                $('.username').text(response.name);
                $(".profilePic").attr('src', picSrc);

                //handle session creation for user 

                if (user == null) {
                    console.log("user not created")
                    $.post('processLogin',
                            {type: 'fb_login',
                                email: response.email,
                                username: response.name,
                                profilepic:"https://graph.facebook.com/" + response.id + "/picture?width=120",
                                channel: 'facebook'
                            }
                    , function(success) {
                        console.log("session created for user")
                    })
                }
                //user logged in via facebook
         
            });
            //enable all js buttons for logged in user



        } else {
            //check if a session has been created from manual log in
            $.post('processLogin',
                    {type: 'checkSession'
                    }
            , function(success) {
                if (success) {
                    console.log(success + "session exist")
                    loggedInNav();

                } else {
                    loggedOutNav();
                }
            })

        }

    });
};
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id))
        return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function fb_logout() {


}
function fb_login() {
    FB.login(function(response) {
        if (response.authResponse) {
            FB.api('/me', function(response) {
                //for all facebook logins, check if the email has been registered
                $.ajax({url: "processAuthenticate", type: 'GET',
                    data: {type: 'checkEmail', email: response.email},
                    success: function(validateEmail) {

                        if ($.trim(validateEmail) === 'available') {
                            //if user is not registered, do a registration for them

                            $.post('processRegister',
                                    {type: 'facebook_login',
                                        email: response.email,
                                        password: $('#password_signup').val(),
                                        dob: response.birthday,
                                        username:response.name,
                                        profile_pic:"https://graph.facebook.com/" + response.id + "/picture?width=120"
                                    }
                            , function(success) {
                                console.log(success);
                                if (success) {
                                    window.location.href = "home";
                                } else {
                                    alert("Something went wrong with registering your email")
                                }
                            })
                        } else {
                            window.location.href = "home";
                        }
                    }

                })

            });


        } else {
            //user hit cancel button
            console.log('User cancelled login or did not fully authorize.');
        }
    }, {
        scope: 'publish_stream,email,user_birthday'
    });

}
;

