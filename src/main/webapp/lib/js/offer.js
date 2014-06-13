/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$('#job_description').summernote({height: 300});
$(document).ready(function() {
    function closeEditorWarning() {
        return 'If you leave before submitting, your changes will be lost.'
    }

    window.onbeforeunload = closeEditorWarning
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: '#offerings',
        speed: 1000
    });
    initService();
    initOffer();
    initGrandTotal();
    return false;


});
function initService() {
    var service_id = getUrlParameter("service_id");
    $.get('getServices', {type: 'single', id: service_id}, function(response) {

        console.log(response);
        displayService(response);

    }, "json")
}

function displayService(service) {


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
        } else {
            $('#' + key).html(service[key]);
        }
    }
    $('#createdAt').livestamp(service.timeCreated / 1000);

tipsInit();

    preventCharsInput($('#hours'));
}
function tipsInit(){
        $('#offerings').on({
        mouseover: function() {
            var e = this.id;
            $('.tips').remove();

            var popover = '<div class="popover tips right"><div class="arrow"></div>\n\
                        <div class="popover-title"><b>How does an offer works?</b></div>\n\
                        <div class="popover-content"><p>State the amount for the primary job scope that is required to be done. Additional offers can be added to\n\
incentivise the student to do more if it is within his/her means.<br/></br/>\n\
<b>eg. of additional offers includes (but not limited to) :</b><ul>\n\
<li>Completing the required job scope within a shorter period of time</li>\n\
<li>Using standards commonly used by professionals to complete the job</li>\n\
<li>Providing additional solutions on top of what is required</li>\n\
</ul> </p>\n\
                        </div></div>';
            $(popover).prependTo($(this));
            $('.tips').show();
        },
        mouseleave: function() {
            $('.tips').remove();
        }
    })
    
            $('#timereq').on({
        mouseover: function() {
            var e = this.id;
            $('.tips').remove();

            var popover = '<div class="popover tips right"><div class="arrow"></div>\n\
                        <div class="popover-title"><b>How many estimated manhours are required to complete the primary job?</b></div>\n\
                        <div class="popover-content"><p>Giving a rough gauge of how long this project will take based on past experience will\n\
allow students to know if they are suitable for the job.</p>\n\
                        </div></div>';
            $(popover).prependTo($(this));
            $('.tips').show();
        },
        mouseleave: function() {
            $('.tips').remove();
        }
    })
}
function addOffer() {

    var table = '';
    table += '<tr>';
    table += '<td> <input class="form-control"></td>';
    table += '<td> <input class="form-control offer_amount" ></td>';
    table += '<td class="center"> <i class="fa fa-times-circle delete_button"></i></td>';
    table += '</tr>';
    $(table).appendTo($('#offer_table'));
    initGrandTotal();
    deleteRow();
}
function initOffer() {
    $('#add_offer').click(function() {
        addOffer();
    });
}
function initGrandTotal() {

    $('input').keyup(function() {
        var total_amount = 0;

        $('.offer_amount').each(function() {

            total_amount += Number($(this).val())
        })

        $('#grand_total').text('$' + total_amount);
    })
}
function deleteRow() {
    $('.delete_button').click(function() {
        $(this).closest('tr').remove();
        var total_amount = 0;
        $('.offer_amount').each(function() {
            total_amount += Number($(this).val())
        })
        $('#grand_total').text('$' + total_amount);
    })

}