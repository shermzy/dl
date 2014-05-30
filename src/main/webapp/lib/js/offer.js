/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$('#job_description').summernote({height: 300});
$(document).ready(function() {
    function closeEditorWarning() {
        return 'If you leave before submitting your changes will be lost.'
    }

    window.onbeforeunload = closeEditorWarning
    console.log("scroll!");
    $.smoothScroll({
        scrollElement: $('html,body'),
        scrollTarget: '#buyer_desc',
        speed: 1000
    });
    initOffer();
    initGrandTotal();
    return false;


});

function click() {

    $('#test').click(function() {
        console.log("scroll!");
        $('.content').animate({
            scrollTop: $("#buyer_desc").offset().top}, // Tell it to scroll to the top #bottom
        '5000' // How long scroll will take in milliseconds
                );
        return false;
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