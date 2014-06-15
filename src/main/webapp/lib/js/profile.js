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
        }, "json")
    } else {
        target = user;
        initBio();
    }
    $('#profile_profilepic').attr('src', target.profilepic);
}

function initBio() {
    $.fn.editable.defaults.inputclass = 'form-control';
    $('#username').editable({emptytext: "Username"}, 'validate', function(v) {
        if (!v)
            return 'Required field!';
    });
      $('#email').editable({
          emptytext: "Email"
    });
}