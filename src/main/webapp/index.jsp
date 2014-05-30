<%@include file="../static/header.jsp" %> 


<div class="content">
    <div class="container" id="services">
        <!-- 3 columns of services-->
        <div class="grid cs-style-4" id="assignments">
            <div class='col-md-4' id="col-1">

            </div>

            <div class='col-md-4' id="col-2">

            </div>

            <div class='col-md-4' id="col-3">

            </div>

            <div class="clearfix"></div>
        </div>
    </div>

</div>

<!--end-->

</div>
<!-- START OF MODAL-->
<div class="modal fade" id="assignmentModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog wide clearfix">
        <div class="modal-content bg_lightgrey clearfix">

            <div class="modal-body" id="assignment_modal_wrapper">
             

                <!--assignment details-->
                <div class="span75  pull-left" id="assignment_details">
                    <div class="title_wrapper ">
                        <div class="title-assignment modal-title">I will code HTML5 CSS3 for you</div>
                        <div class="create_at-assignment">created 2 months ago</div>
                    </div>
                    <div class="col-md-12">
                        <div class="image-assignment"> <img src="images/placeholders/job_testing.jpg" class="assignment_img imageholder" /></div>
                        <div class="desc-assignment justify">
                            <h3><b><u>The best and most realistic book or e-book cover on Fiverr.</u></b><br></h3><u><b><br></b></u>You will get the feeling you are actually seeing at a real thing! <b>YOUR real book.</b><b><br></b><u><b><br></b></u><b>You have 3 finishing choices for your cover:<u><br></u><br></b><b><u>YOU NEED TO PROVIDE AT LEAST THE FRONT COVER IMAGE FOR OPTION 1 AND 2, PREFERABLY IN PNG, BUT I CAN ACCEPT ANY IMAGE FORMAT.</u></b><b><br><br>1.- The 2 standing, back to back, showing the Back Cover as well. I will create this as default. *BEST ONE*<br><br>2.- The laid down one, only showing the Front Cover.<br><br></b><b>3.- <u>If you do not have a cover designed</u>, for extra $5 I will create the cover from scratch, just like the first photo of the gig, with a SIMPLE and EFFECTIVE desing, with one free modification! Just give me the TITLE, AUTHOR, and power phrase to be at the top. You can give me logo and which colors you want as well.</b><u><b><br></b></u><b><br></b><br>        
                        </div>
                    </div>
                
                </div>
                <!--end assignment details-->
                <!--User details-->
                <div class="span25 pull-right" id="assignment_user_details" >
                   
                    <div class="owner-image center">
                        <img src="images/placeholders/sh_profile.jpg" class="owner-image-holder imageholder" />
                    </div>
                     <div class="owner-title-wrapper center">
                        <div class="owner-name">Swag Hau</div>
                        <div class="owner-title"></div>
                    </div>
                    
                    
                    <!-- to add assignment statistics-->
                    
                    
                    
                    <div class="overview-stats">
                        <div class="queue"> 
                            <div class="assignment-variable">2</div>
                            <div class="assignment-info">no. of orders</div>
                        </div>
                        <div class="avgTime">
                            <div class="assignment-variable">4</div>
                            <div class="assignment-info">days on average</div>    
                        </div>
                        <div class="respTime">
                            <div class="assignment-variable">7</div>
                            <div class="assignment-info">Avg hours to respond</div>   
                        </div>
                    </div>
                    <button class="button offer-btn" id="offer"><i class='fa fa-money'></i><span class="margin_left_15">Make an offer!</span></button>
                </div>
                    <div class="clearfix"></div>
            </div>

        </div>
    </div>
</div>
<!-- END OF MODAL-->
<%@include file="../static/footer.jsp" %> 
<script src="lib/js/testing/postingTestScript.js" type="text/javascript"></script>
<script>

      $("#birthdate").datepicker({
          startView:2,
          autoclose:true,
          endDate:new Date()
      });
   
    function sidebarOverlay() {
        var container = document.getElementById('st-container')
        $('#st-trigger-effects').click(function() {
            $('.st-content').toggleClass('overlay');
            if ($('#st-container').hasClass('st-menu-open')) {
                classie.remove(container, 'st-menu-open');
                $('#st-container').removeClass('st-menu-open')
            } else {
                $('#st-container').addClass('st-menu-open')
            }
        })

    }
    idleTime = 0;
    $(document).ready(function() {
        //redirect if movile screen detected (Screen size 699px)
        if ($(window).width() < 699) {
            window.location.href = "error_pages/mobile.jsp";
        }
        initSignup();
        //Increment the idle time counter every minute.
        var idleInterval = setInterval(timerIncrement, 60000); // 1 minute
        if (!fb_userId) {

        }
        //Zero the idle timer on mouse movement.
        $(this).mousemove(function(e) {
            idleTime = 0;
        });
        $(this).keypress(function(e) {
            idleTime = 0;
        });
    });

    function timerIncrement() {
        idleTime = idleTime + 1;
        if (idleTime > 20) { // 20 minutes
            window.location.reload();
        }
    }


</script>






