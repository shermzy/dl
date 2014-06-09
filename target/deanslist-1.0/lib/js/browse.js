/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
getServices();
var assignmentArray = [];
var categories = ["Business", "IT", "Writing"];
var Business = ["Branding Services", "Market Research", "Psychological Consulting", "IT Consulting", "Business Consulting", "Financial Consulting", "Legal Consulting", "Others"]
var namespace = ["Tom", "John", "Jerry", "Dicky", "Sally", "Lex"];
for (var i = 0; i < 15; i++) {
    var testAssignment = {};
    var catrandom = Math.floor(Math.random() * 3);
    var subrandom = Math.floor(Math.random() * 8);
    var namerandom = Math.floor(Math.random() * 6);
    testAssignment.id = i;
    testAssignment.title = "I will do a job for you in 5 days";
    testAssignment.category = categories[catrandom];
    testAssignment.subCategory = Business[subrandom];
    testAssignment.piclink = "images/placeholders/1503705.jpg";
    testAssignment.duration = Math.floor(Math.random() * 30);
    testAssignment.required = '<ul><li><span style="line-height: 1.42857143;">the writeup of the things you need</span><br></li><li><span style="line-height: 1.42857143;">upfront 50% of the price</span><br></li></ul>';
    testAssignment.tags = ["HTML5", "CSS3", "web design"];
    testAssignment.user_id = namespace[namerandom];

    assignmentArray.push(testAssignment);

}
var count1 = 0
assignmentArray.forEach(function(data) {
    var content = "";
    content += '  <div class="service_wrapper clickable" id="' + data.id + '">';
    content += '  <div class="service_body">';
    content += '    <div class="merc_pic">';
    content += '      <img src="' + data.piclink + '" class="service_img"/>';
    content += '   </div>';
    content += '     <div class="merc_desc">' + data.title + '</div>';
    content += '<div class="service_merc center">' + data.user_id + '</div> ';
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
    showAssignment();

})
var count = 0;
function getServices() {
    $.get("getServices", {category: "all", rowFrom: '0'}, function(response) {
        var count = 0;
        console.log(response)
        response.forEach(function(data) {
            var content = "";
            content += '  <div class="service_wrapper clickable" id="' + data.id + '">';
            content += '  <div class="service_body">';
            content += '    <div class="merc_pic">';
            content += '      <img src="' + data.piclink + '" class="service_img"/>';
            content += '   </div>';
            content += '     <div class="merc_desc">' + data.title + '</div>';
            content += '<div class="service_merc center">' + data.user_id + '</div> ';
            content += '</div>';
            content += '<div class="service_footer">';
            
            content += '</div>';
            content += '</div>';
            if (count % 3 == 0) {
                $(content).appendTo('#col-1');
            } else if (count % 3 == 1) {
                $(content).appendTo('#col-2');
            }
            else if (count % 3 == 2) {
                $(content).appendTo('#col-3');
            }


            count++;


        })
        showAssignment();
    }, "json")
}


function showAssignment() {
    $('.service_wrapper').click(function() {
        $('#serviceModal').modal("show");

    })
}
initOffer();
function initOffer() {

    $('#offer').click(function() {
        //pass in assignment id
        window.open('offer', '_blank');
    })
}