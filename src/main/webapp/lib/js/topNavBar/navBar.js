/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * Display sign in modal
 * Show only login screen 1st. Otherwise there will be a problem where user exits the modal when signup is shown and on next click of the
 * sign in button causes delay in the hiding of the signup-login bodies.
 */

function initSignup() {
    $('#sign_in_btn').click(function() {
        $('#login').modal('show');
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
        fb_logout();
        
    })
}
