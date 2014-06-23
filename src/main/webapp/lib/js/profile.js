/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var target;
$(document).ready(function() {
    getUser();

})


function getProfilePic() {
    if (user.profilepic != '') {
        $('#profile_profilepic').attr('src', user.profilepic);
    }
}

function getUser() {
    var user_id = getParameterByName("user_id");

    //this handles when viewing someoneelse's profile page
    if (user_id != "") {
        $.get("getUser", {userid: user_id}, function(user) {
            target = user;
            initTarget(target);
        }, "json")
    } else {
        $.get("getUser", {userid: user.id}, function(user) {
            target = user;
            initTarget(target);
            initBio();
        }, "json")


    }


}
function initTarget(target) {
    $('#bio').addClass('active');
    $('#profile_profilepic').attr('src', target.profilepic);
    $('#user_name').text(target.username);
    $('#email').text(target.email);
    $('#dob').text(target.date_of_birth);
    $('#gender').text(target.gender);
    $('#facebook_link').attr("href",target.fb_link)

}
function initBio() {
    $.fn.editable.defaults.inputclass = 'form-control';
    
    $('#user_name').editable({
        pk: target.user_id,
        emptytext: "Username",
        name: 'username',
        url: "UpdateBio"
    });
    $('#email').editable({
        emptytext: "Email",
        name: 'email',
        url: "UpdateBio",
        pk: target.user_id
    });
    $('#gender').editable({
        emptytext: "Amoeba",
        name: 'gender',
        url: "UpdateBio",
        pk: target.user_id
    });
    $('#fb_link').editable({
        emptytext: "Facebook"
    });
    $('#dob').editable({
        emptytext: "Date of Birth",
    });

}