/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var assignmentArray = [];
var categories = ["Business", "IT", "Writing"];
var Business = ["Branding Services", "Market Research", "Psychological Consulting", "IT Consulting", "Business Consulting", "Financial Consulting", "Legal Consulting", "Others"]
var namespace = ["Tom", "swagger", "hogger", "liansian", "xubarsaid", "Lex"];
for (var i = 0; i < 45; i++) {
    var testAssignment = {};
    var catrandom = Math.floor(Math.random() * 3);
    var subrandom = Math.floor(Math.random() * 8);
    var namerandom = Math.floor(Math.random() * 6);
    testAssignment.id = i;
    testAssignment.name = "I will do a job for you in 5 days";
    testAssignment.category = categories[catrandom];
    testAssignment.subCategory = Business[subrandom];
    testAssignment.image = "images/placeholders/1503705.jpg";
    testAssignment.duration = Math.floor(Math.random() * 30);
    testAssignment.required = '<ul><li><span style="line-height: 1.42857143;">the writeup of the things you need</span><br></li><li><span style="line-height: 1.42857143;">upfront 50% of the price</span><br></li></ul>';
    testAssignment.tags = ["HTML5", "CSS3", "web design"];
    testAssignment.owner = namespace[namerandom];

    assignmentArray.push(testAssignment);

}
var count = 0;
assignmentArray.forEach(function(data) {
    var content = "";
   /* content += '<div class="assignment_wrapper"><figure><div><img src="' + data.image + '" alt="img05"></div><figcaption>';
            content += '<h5 class="green">' + data.name + '</h5>';
    content += '		<span>' + data.owner + '</span>';
    content += '	';
    content += ' </figcaption>';
    content += '</figure>';
    content += '</div>';*/
     content += '  <div class="assignment_wrapper clickable grid cs-style44" id="' + data.id + '">';
     content += '  <div class="assignment_body">';
     content += '    <div class="merc_pic">';
     content += '      <img src="' + data.image + '" class="assignment_img"/>';
     content += '   </div>';
     content += '     <div class="merc_desc">' + data.name + ' I will do something that I am good at</div>';
     content += '</div>';
     content += '<div class="assignment_footer">';
     content += '<div class="assignment_merc pull-left">by ' + data.owner + '</div> ';
     content += '</div>';
     content += '</div>';
     if(count % 3 == 0){
     $(content).appendTo('#col-1');
     }else if (count % 3 ==1){
     $(content).appendTo('#col-2');
     }
     else if (count % 3 ==2){
     $(content).appendTo('#col-3');
     }
   
    
    count++;
    showAssignment();

})
/*$('.assignment_wrapper').click(function(){
 var id = this.id;
 var assignment = assignmentArray[id];
 $('#services').hide("fast",function(){
 $('#assignment').show();
 })
 })*/


function showAssignment() {
    $('.assignment_wrapper').click(function() {
        $('#assignmentModal').modal("show");

    })
}
initOffer();
function initOffer() {

    $('#offer').click(function() {
        //pass in assignment id
        window.open('offer', '_blank');
    })
}