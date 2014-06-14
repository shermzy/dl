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
    console.log(user_id);
    if (user_id != null) {
        $.get("getUser", function(user) {
console.log(user);
        },"json")
    } else {
        target = user;
    }
}