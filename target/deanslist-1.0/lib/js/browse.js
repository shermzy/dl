/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {
    getServices("-1");
    getCategories();
    initOffer();
})

var serviceArray = [];
var categories = ["Business", "IT", "Writing"];
var Business = ["Branding Services", "Market Research", "Psychological Consulting", "IT Consulting", "Business Consulting", "Financial Consulting", "Legal Consulting", "Others"]
var namespace = ["Tom", "John", "Jerry", "Dicky", "Sally", "Lex"];
for (var i = 0; i < 15; i++) {
    var testAssignment = {};
    var catrandom = Math.floor(Math.random() * 3);
    var subrandom = Math.floor(Math.random() * 8);
    var namerandom = Math.floor(Math.random() * 6);
    testAssignment.service_id = i;
    testAssignment.title = "I will do a job for you in 5 days";
    testAssignment.category = categories[catrandom];
    testAssignment.subCategory = Business[subrandom];
    testAssignment.piclink = "images/placeholders/1503705.jpg";
    testAssignment.duration = Math.floor(Math.random() * 30);
    testAssignment.description = '<div class="desc-service justify">\n<h3><b><u>The best and most realistic book or e-book cover on Fiverr.</u></b><br></h3>\n\
<u><b><br></b></u>You will get the feeling you are actually seeing at a real thing! <b>YOUR real book.</b><b><br></b><u><b><br></b></u><b>You have 3 finishing \n\
choices for your cover:<u><br></u><br></b><b><u>YOU NEED TO PROVIDE AT LEAST THE FRONT COVER IMAGE FOR OPTION 1 AND 2, PREFERABLY IN PNG, BUT I CAN ACCEPT ANY \n\
IMAGE FORMAT.</u></b><b><br><br>1.- The 2 standing, back to back, showing the Back Cover as well. I will create this as default. *BEST ONE*<br><br>2.- The laid down one,\n\
 only showing the Front Cover.<br><br></b><b>3.- <u>If you do not have a cover designed</u>, for extra $5 I will create the cover from scratch, just like the first photo \n\
of the gig, with a SIMPLE and EFFECTIVE desing, with one free modification! Just give me the TITLE, AUTHOR, and power phrase to be at the top. You can give me logo and\n\
 which colors you want as well.</b><u><b><br></b></u><b><br></b><br></div>';
    testAssignment.required = '<ul><li><span style="line-height: 1.42857143;">the writeup of the things you need</span><br></li><li><span style="line-height: 1.42857143;">upfront 50% of the price</span><br></li></ul>';
    testAssignment.tags = ["HTML5", "CSS3", "web design"];
    testAssignment.user_id = namespace[namerandom];

    //  serviceArray.push(testAssignment);

}
//testService();
function testService() {
    var count1 = 0
    serviceArray.forEach(function(data) {
        var content = "";
        content += '  <div class="service_wrapper clickable" id="' + data.service_id + '">';
        content += '  <div class="service_body">';
        content += '    <div class="merc_pic">';
        content += '      <img src="' + data.piclink + '" class="service_img"/>';
        content += '   </div>';
        content += '     <div class="merc_desc">' + data.title + '</div>';
        content += '<div class="service_merc center">' + data.username+ '</div> ';
        content += '</div>';
        content += '<div class="service_footer">';
        content += '<div class="inline service_meta"><i class="icon-eye"></i></div>';
        content += '<div class="inline service_meta"><i class="icon-star"></i></div>';
        content += '<div class="inline service_meta"><i class="icon-graduation"></i></div>';
        content += '</div>';
        content += '</div>';
        if (count1 % 3 == 0) {
            $(content).appendTo('#col-1');
        } else if (count1 % 3 == 1) {
            $(content).appendTo('#col-2');
        }
        else if (count1 % 3 == 2) {
            $(content).appendTo('#col-3');
        }
        count1++;
    })
    //showAssignment();
}
var count = 0;
//MAIN PAGE SERVICES
function getServices(category) {
    $('#services').html('');
    $('#services').html('<div class="col-md-4" id="col-1"></div><div class="col-md-4" id="col-2"></div><div class="col-md-4" id="col-3"></div>')
    $.get("getServices", {type: "pages", rowFrom: '0', category_id: category}, function(response) {
        var count = 0;
        var services = response.services;

        services.forEach(function(data) {

            var content = "";
            content += '  <div class="service_wrapper clickable" id="' + data.service_id + '">';
            content += '  <div class="service_body">';
            content += '    <div class="merc_pic">';
            content += '      <img src="' + data.piclink + '" class="service_img"/>';
            content += '   </div>';
            content += '     <div class="merc_desc">' + data.title + '</div>';
            content += '<div class="service_merc center">' + data.username + '</div> ';
            content += '</div>';
            content += '<div class="service_footer">';
            content += '<div class="inline service_meta"><i class="icon-eye"></i></div>';
            content += '<div class="inline service_meta"><i class="icon-star"></i></div>';
            content += '<div class="inline service_meta"><i class="icon-graduation"></i></div>';
            content += '</div>';
            content += '</div>';

            $('#createdAt').livestamp(data.timeCreated);
            $('#createdAt').data("livestamp", data.timeCreated)
            if (count % 3 == 0) {
                $(content).appendTo('#col-1');
            } else if (count % 3 == 1) {
                $(content).appendTo('#col-2');
            }
            else if (count % 3 == 2) {
                $(content).appendTo('#col-3');
            }
            serviceArray.push(data);

            count++;


        })
        showAssignment();

    }, "json")
}

var serviceID;

//ON CLICK OF A SPECIFIC ITEM
function showAssignment() {
    $('.service_wrapper').click(function() {
        var id = $(this).attr("id");

        serviceArray.forEach(function(service) {
            if (service.service_id == id) {
                //get user of gig 's details
                $.get("getUser", {userid: service.user_id}, function(user) {
                    $('#service_profilepic').attr('src', user.profilepic);
                    $('#service_userName').text(user.username);
                }, "json");

                //insert details into different components of the modal with their respective IDs
                for (key in service) {
                    if (key == 'piclink') {
                        $('#' + key).attr("src", function() {
                            return service[key];
                        })

                    } else if (key == 'itemreq') {
                        var s = service[key].split(";");
                        var b = "";
                        s.forEach(function(a) {
                            b += "<span class='reqItems block'><i class='icon-key'></i><span class='marginleft15'>" + a + "</span></span>";
                        })
                        $('#' + key).html(b)
                    } else if (key == 'total_revenue') {
                        if (service.total_revenue == 0 || service.offers == 0) {
                            $('#average_revenue').text('$0');
                        } else {
                            $('#average_revenue').text('$' + service.total_revenue / service.offers)
                        }
                    } else if(key == 'offers'){
                        $('#no_of_offers').text(service.offers)
                    }else {
                        $('#' + key).html(service[key]);
                    }
                }
                $('#createdAt').livestamp(service.timeCreated / 1000);
                serviceID = id;
                return false;
            }
        })

        $('#serviceModal').modal("show");

    })
}

function initOffer() {

    $('#offer').click(function() {
        //pass in assignment id
        window.open('offer?service_id=' + serviceID, '_blank');
    })
}
function getCategories() {
    $.get("getCategories", {type: 'category'}, function(data) {
        var content = "";
        data.forEach(function(response) {
            $.each(response, function(key, value) {
                content += '<li class="cat_sidenav" data-category="' + key + '"><span class="cat_icon"><i class="' + cat_icons(value) + '"></i></span>' + value + " </li>";
                content += '  <li><span class="menu-divider"></span></li>';
            })
        })
        /*        $.each(data, function(key, value) {
         content += '<li class="cat_sidenav" data-category="' + key + '"><span class="cat_icon"><i class="' + cat_icons(value) + '"></i></span>' + value + " </li>";
         content += '  <li><span class="menu-divider"></span></li>';
         })*/
        $('#cat-menu').html(content);
        initbtns();
    }, "json")
}

function cat_icons(category) {
    switch (category) {
        case "Business":
            return "icon-briefcase"
            break;
        case "Online Marketing":
            return "icon-call-end"
            break;
        case "Writing & Translation":
            return "icon-pencil";
            break;
        case "Video & Animation":
            return "icon-camcorder";
            break;
        case "Music & Audio":
            return "icon-playlist";
            break;
        case "Programming & IT":
            return "icon-screen-desktop";
        case "Lifestyle":
            return "icon-emoticon-smile"
        case "Graphics & Design":
            return "icon-picture"
        default:
            return"null"
    }
}
function initbtns() {

    $('.cat_sidenav').click(function() {
        var id = $(this).data("category");
        console.log('category: ' + id)
        var count = 0
        getServices(id);

    });
}
function clearPage() {
    $('#col-1').html("");
    $('#col-2').html("");
    $('#col-3').html("");
}