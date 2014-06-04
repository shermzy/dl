/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var BUSINESSSUB = ["Branding Services", "Market Research", "IT Consulting", "Business Consulting", "Financial Consulting", "Legal Consulting", "Others"]
var ITSUB = ["Mobile Application", "Debugging", "Web Design", "System Architecture", "Databases", "Others"];
var WRITINGSUB = ["Speech Writing", "Proof Reading & Editing", "Resumes & Cover Letter", "Reviews", "Website Content", "Translation", "Creative Writing", "Voice overs", "Others"]
var errors = [];
console.log($.cookie('dl_user'))
//start image input
+function($) {
    "use strict";

    var isIE = window.navigator.appName == 'Microsoft Internet Explorer'

    // FILEUPLOAD PUBLIC CLASS DEFINITION
    // =================================

    var Fileupload = function(element, options) {
        this.$element = $(element)

        this.$input = this.$element.find(':file')
        if (this.$input.length === 0) {
            $('#cover-x').hide();
            return
        }

        this.name = this.$input.attr('name') || options.name

        this.$hidden = this.$element.find('input[type=hidden][name="' + this.name + '"]')
        if (this.$hidden.length === 0) {
            this.$hidden = $('<input type="hidden" />')
            this.$element.prepend(this.$hidden)
        }

        this.$preview = this.$element.find('.fileinput-preview')
        var height = this.$preview.css('height')
        if (this.$preview.css('display') != 'inline' && height != '0px' && height != 'none')
            this.$preview.css('line-height', height)


        this.original = {
            exists: this.$element.hasClass('fileinput-exists'),
            preview: this.$preview.html(),
            hiddenVal: this.$hidden.val()
        }

        this.listen()

    }

    Fileupload.prototype.listen = function() {
        this.$input.on('change.bs.fileinput', $.proxy(this.change, this))
        $(this.$input[0].form).on('reset.bs.fileinput', $.proxy(this.reset, this))

        this.$element.find('[data-trigger="fileinput"]').on('click.bs.fileinput', $.proxy(this.trigger, this))
        this.$element.find('[data-dismiss="fileinput"]').on('click.bs.fileinput', $.proxy(this.clear, this))
    },
            Fileupload.prototype.change = function(e) {
                if (e.target.files === undefined)
                    e.target.files = e.target && e.target.value ? [{name: e.target.value.replace(/^.+\\/, '')}] : []
                if (e.target.files.length === 0)
                    return

                this.$hidden.val('')
                this.$hidden.attr('name', '')
                this.$input.attr('name', this.name)

                var file = e.target.files[0]

                if (this.$preview.length > 0 && (typeof file.type !== "undefined" ? file.type.match('image.*') : file.name.match(/\.(gif|png|jpe?g)$/i)) && typeof FileReader !== "undefined") {
                    var reader = new FileReader()
                    var preview = this.$preview
                    var element = this.$element

                    reader.onload = function(re) {
                        var $img = $('<img>') // .attr('src', re.target.result)
                        $img[0].src = re.target.result
                        e.target.files[0].result = re.target.result
                        $('#cover-x').show();
                        element.find('.fileinput-filename').text(file.name)

                        // if parent has max-height, using `(max-)height: 100%` on child doesn't take padding and border into account
                        if (preview.css('max-height') != 'none')
                            $img.css('max-height', parseInt(preview.css('max-height'), 10) - parseInt(preview.css('padding-top'), 10) - parseInt(preview.css('padding-bottom'), 10) - parseInt(preview.css('border-top'), 10) - parseInt(preview.css('border-bottom'), 10))

                        preview.html($img)
                        element.addClass('fileinput-exists').removeClass('fileinput-new')

                        element.trigger('change.bs.fileinput', e.target.files)
                    }

                    reader.readAsDataURL(file)
                } else {
                    this.$element.find('.fileinput-filename').text(file.name)
                    this.$preview.text(file.name)

                    this.$element.addClass('fileinput-exists').removeClass('fileinput-new')

                    this.$element.trigger('change.bs.fileinput')
                }
            },
            Fileupload.prototype.clear = function(e) {
                if (e)
                    e.preventDefault()
                $('#cover-x').hide();
                this.$hidden.val('')
                this.$hidden.attr('name', this.name)
                this.$input.attr('name', '')

                //ie8+ doesn't support changing the value of input with type=file so clone instead
                if (isIE) {
                    var inputClone = this.$input.clone(true);
                    this.$input.after(inputClone);
                    this.$input.remove();
                    this.$input = inputClone;
                } else {
                    this.$input.val('')
                }

                this.$preview.html('')
                this.$element.find('.fileinput-filename').text('')
                this.$element.addClass('fileinput-new').removeClass('fileinput-exists')

                if (e !== false) {
                    this.$input.trigger('change')
                    this.$element.trigger('clear.bs.fileinput')
                }
            },
            Fileupload.prototype.reset = function() {
                this.clear(false)

                this.$hidden.val(this.original.hiddenVal)
                this.$preview.html(this.original.preview)
                this.$element.find('.fileinput-filename').text('')

                if (this.original.exists)
                    this.$element.addClass('fileinput-exists').removeClass('fileinput-new')
                else
                    this.$element.addClass('fileinput-new').removeClass('fileinput-exists')

                this.$element.trigger('reset.bs.fileinput')
            },
            Fileupload.prototype.trigger = function(e) {
                this.$input.trigger('click')
                e.preventDefault()
            }


    // FILEUPLOAD PLUGIN DEFINITION
    // ===========================

    $.fn.fileinput = function(options) {
        return this.each(function() {
            var $this = $(this)
                    , data = $this.data('fileinput')
            if (!data)
                $this.data('fileinput', (data = new Fileupload(this, options)))
            if (typeof options == 'string')
                data[options]()
        })
    }

    $.fn.fileinput.Constructor = Fileupload


    // FILEUPLOAD DATA-API
    // ==================

    $(document).on('click.fileinput.data-api', '[data-provides="fileinput"]', function(e) {
        var $this = $(this)
        if ($this.data('fileinput'))
            return
        $this.fileinput($this.data())

        var $target = $(e.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');
        if ($target.length > 0) {
            e.preventDefault()
            $target.trigger('click.bs.fileinput')
        }
    })

}(window.jQuery);


//end image input

//start html5 editor
$('#description').summernote({height: 300,
    onkeyup: function(e) {
        /*   var temp = $('#description').code().replace(/(<([^>]+)>)/ig, "");
         var num = temp.length;
         console.log("last test: " + temp.substring(num - 5, num));
         console.log(num);
         while (temp.substring(num - 5, num) === 'nbsp;') {
         
         temp = temp.substring(0,temp.length-6)
         console.log(temp);
         }
         
         $('#desc_wordcount').html(num + '/1000 chars');*/
    }
});
//end html5 editor

$('#itemsreq').summernote({height: 300});
//slider for amount
/*$("#time_range").ionRangeSlider({
 min: 0,
 max: 30,
 type: 'single',
 step: 1,
 maxPostFix: "+",
 postfix: " days",
 prettify: true
 //hasGrid: true
 });*/

preventCharsInput($('#time'));
function preventCharsInput(ele) {
    ele.keypress(function(e) {
        var a = [];
        var k = e.which;

        for (i = 48; i < 58; i++)
            a.push(i);

        if (!($.inArray(k, a) >= 0))
            e.preventDefault();
    });
}
//tags input

$('#tags').tagsInput({
    width: 'auto',
    'onAddTag': function() {
        //alert(1);
    }


});

//max length for assignment intro

$('#title').maxlength({
    alwaysShow: true,
    warningClass: "label label-success",
    limitReachedClass: "label label-danger",
    separator: ' out of ',
    preText: 'You typed ',
    postText: ' chars available.',
    validate: true
});

//handles the change in category


$('#category-options').change(function() {
    $('#subcategory-options').html("");
    if ($('#category-options').val() == "Business") {
        BUSINESSSUB.forEach(function(data) {
            $('#subcategory-options').append('<option>' + data + '</option');
        })
        $('#subcategory').show();
    } else if ($('#category-options').val() == "IT") {
        ITSUB.forEach(function(data) {
            $('#subcategory-options').append('<option>' + data + '</option');
        })
        $('#subcategory').show();
    } else if ($('#category-options').val() == "Writing") {
        WRITINGSUB.forEach(function(data) {
            $('#subcategory-options').append('<option>' + data + '</option');
        });
        $('#subcategory').show();
    } else {
        $('#subcategory').hide();
    }


})

//tooltips


var assignment = {title: "<h5><b>Introduce your service</b></h5>", content: "This is the title of your service. It is also the first impression. Make it good."};
var category = {title: "<h5><b>Categorise your Assignment</b></h5>", content: "Choose the most suitable category for your service. This allows people to find it more easily."};
var gallery = {title: "<h5><b>Strut your stuff</b></h5>", content: "A picture speaks a thousand words. Show an image of you or what you can do!"};
var desc = {title: "<h5><b>Decribe your service</b></h5>", content: "Giving a description of what you can do can allow buyers to know your skills and abilities better. <b>Be true</b> and <b>be detailed</b>!"};
var timereq = {title: "<h5><b>Time and costs for your service</b></h5>", content: "How long will take to complete the above service? Make an accurate estimation of the <b>maximum</b> time you need to complete it. Failing to deliver it on time will result in forfeiting of payment and downgrading of your ratings."};
var itemreq = {title: "<h5><b>What do you need</b></h5>", content: "Specify the things you need the client to present to you that is critical for the completion of the assignment. <b>Do not</b> request for more than the things you need."};
var tag = {title: "<h5><b>Keywords. Makes searching easier</b></h5>", content: "Specify keywords to identify your service. This helps buyers to find relevant results based on how you classify your service!"};
var tips = {assignment: assignment, category: category, gallery: gallery, desc: desc, timereq: timereq, itemreq: itemreq, tag: tag};
$('.form-group').on({
    mouseover: function() {
        var e = this.id;
        $('.tips').remove();

        var popover = '<div class="popover tips right"><div class="arrow"></div>\n\
                        <div class="popover-title">' + tips[e].title + '</div>\n\
                        <div class="popover-content"><p>' + tips[e].content + '</p>\n\
                        </div></div>';
        $(popover).insertBefore($(this).find('.tipsarea'));
        $('.tips').show();
    },
    mouseleave: function() {
        $('.tips').remove();
    },
    click: function() {
        $(this).off('mouseleave');
    }
})
save();
function save() {
    $('#save_btn').click(function() {
//execute validate here
        var proceed = false;
        proceed = validateService();
        
        if (proceed) {

            var user_service = {};
            user_service.user_id = "1234"
            user_service.title = "I can " + $('#title').val();
            user_service.category = $('#category-options').val();
            user_service.subcategory = $('#subcategory-options').val();
            user_service.image = "1234_" + new Date().getTime() ;
            user_service.description = $('#description').code();
            user_service.maxtime = $('#maxtime').val();
            user_service.itemreq = $('#itemsreq').code();
            user_service.tags = $('#tags').val();
            user_service.timeCreated = new Date().getTime();
            console.log(user_service);
            $.post("postService",
                    {service: JSON.stringify(user_service)}, function(data) {
                data.response;
            }, "json")
        }
    })
}

function validateService() {
    errors.length = 0;
    // check for title
    if ($('#title').val() == '') {
        errors.push('title');
        $('#title').addClass('border-red');
        $('#assignment').find('span.help-block').text("You seemed to miss out the most important aspect of your service!")
    }

    //check for category
    if ($('#category-options').val() == 'nil') {
        errors.push('category-options');
        $('#category-options').addClass('border-red');
        $('#category').find('span.help-block').text("Add a category to your service.")
    }

    //check for picture
    if ($('div.fileinput-preview img').attr('src') == undefined) {
        errors.push('coverpic_wrapper');
        $('#coverpic_wrapper').addClass('border-red');
        $('#coverPic').find('span.help-block').text('As the saying goes..."No Pic No Talk"')
    }
    //check for description
    var num = $('#description').code().replace(/(<([^>]+)>)/ig, "").length;
    if (num < 100) {
        errors.push('desc');
        $('#desc').find('span.help-block').text("The description of your service must be more than 100 words!")
    }

    
    if (errors.length > 0) {
         $.smoothScroll({
        scrollElement: $('html,body'),
        scrollTarget: '#' + errors[0],
        speed: 1000
    });
        return false;
    }
    return true;
}