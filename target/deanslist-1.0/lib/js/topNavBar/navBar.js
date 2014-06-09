/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * Display sign in modal. Not to mix up eith enableSignUp which is the toggle on the modal
 */
$(function() {			
			$('#top-nav').scrollUpMenu();
		});
function initSignup() {
    $('#sign_in_btn').click(function() {
        $('#login').on('shown.bs.modal', function() {
            $('#email_login').focus();

        })
        $('#login_body').show();
        $('#signup_body').hide();
        $('#login_footer').html("Don't have an account yet? <span class='clickable' id='signup_link'><a>Sign up now!</a></span>");
        enableSignup();
    });
}

function initUserNav() {
    logout();
    initSignup();
    SidebarMenuEffects();

}

function logout() {
    $('#logout').click(function() {
        var count = 0;
        FB.api('/me/permissions', 'delete', function(response) {
            count++;
            updateLogout();
        });
        $.post('processLogin',
                {type: 'logout'
                }
        , function(success) {
            count++;
            updateLogout();
        })
        function updateLogout() {
            if (count == 2) {
                window.location.href = "home";
            }
        }

    })
}

function loggedInNav() {
    var content = '<li class="top_nav_btn"><i class="icon-magnifier"></i></li>';
    content += '<li class="top_nav_btn"><i class="icon-plus"></i></li>';
    content += '<li class="top_nav_btn"><i class="icon-user"></i></li>';
    content += '<li class="top_nav_btn" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">';
    content += '<img class="profilePic"><span class="username"></span></li>';
    content += '<ul class="dropdown-menu userDropDown"  role="menu" aria-labelledby="dLabel">';
    content += '<li class="userDropDown-list"><i class="fa fa-cogs"></i><span class="icon-text">Settings</span></li>';
    content += '<li class="userDropDown-list" id="logout"><i class="fa fa-sign-out"></i><span class="icon-text">Log Out</span></li>';
    content += '</ul>';
    content += '</li>';
    content += '<li class="top_nav_btn" id="st-trigger-effects" data-effect="st-effect-1"><i class="fa fa-bars"></i></li>';
    $('#nav-btns').html(content);
    initUserNav();
}
function loggedOutNav() {
    var content = '<div class="top_nav_btn" data-toggle="modal" data-target="#login" id="sign_in_btn">Sign in</div>';
    $('#nav-btns').html(content);
    initSignup();
}
