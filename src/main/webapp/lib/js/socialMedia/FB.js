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

            var content = '<li class="top_nav_btn" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">';
            content += '<img class="profilePic"><span class="username"></span></li>';
            content += '<ul class="dropdown-menu userDropDown"  role="menu" aria-labelledby="dLabel">';
            content += '<li class="userDropDown-list"><i class="fa fa-cogs"></i><span class="icon-text">Settings</span></li>';
            content += '<li class="userDropDown-list" id="logout"><i class="fa fa-sign-out"></i><span class="icon-text">Log Out</span></li>';
            content += '</ul>';
            content += '</li>';
            content += '<li class="top_nav_btn" id="st-trigger-effects" data-effect="st-effect-1"><i class="fa fa-bars"></i></li>';
            $('#nav-btns').html(content);
            fb_token = response.authResponse.accessToken;
            fb_userId = response.authResponse.userID;

            FB.api('/me', function(response) {
                var picSrc = ("https://graph.facebook.com/" + response.id + "/picture?width=120");

                $('.username').text(response.name);
                // document.getElementById("profilePic").src = picSrc;                            
                $(".profilePic").attr('src', picSrc);
            });
            //enable all js buttons for logged in user
            
            initUserNav();

        } else {
            var content = '<div class="top_nav_btn" id="sign_in_btn">Sign in</div>';
            $('#nav-btns').html(content);
            initUserNav();
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
    FB.api('/me/permissions', 'delete', function(response) {
        console.log(response); // true
    });
}
function fb_login() {
    FB.login(function(response) {
        if (response.authResponse) {
            //access_token = response.authResponse.accessToken;
            window.location.href = "index.jsp";
            //  check if user has an account in it. If email is available (have not signed up),create a new user
            /*    FB.api("/me", function(rsp) {
             if (rsp && !rsp.error) {
             
             $.ajax({url: "/sports/processSignUp", type: 'POST',
             data: {email: rsp.email},
             success: function(suc) {
             
             if ($.trim(suc) === "available") {
             $.ajax({url: "/sports/fbSignUp", type: 'POST',
             data: {type: "fb", mSignup: "fb", email: rsp.email, name: rsp.first_name, gender: rsp.gender, dob: rsp.birthday}
             });
             $.cookie("user",rsp.email, { path: '/' });  
             window.location.href = "../Admin/main.jsp";
             } else {
             $.cookie("user",rsp.email, { path: '/' }); 
             
             window.location.href = "../Admin/main.jsp";
             }
             ;
             },
             error: function(err){
             
             }
             });
             }
             ;
             });*/
        } else {
            //user hit cancel button
            console.log('User cancelled login or did not fully authorize.');
        }
    }, {
        scope: 'publish_stream,email,user_birthday'
    });

}
;
