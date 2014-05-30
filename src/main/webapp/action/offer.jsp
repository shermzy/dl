<%-- 
    Document   : offer
    Created on : May 20, 2014, 4:13:41 PM
    Author     : Sherman
--%>
<%@include file="../static/header.jsp" %>
<link href="lib/plugins/bootstrap-summernote/summernote.css" rel="stylesheet" type="text/css" />

<div class="content container" id="assignmentModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">

    <div class="wide clearfix">
        <div class="bg_lightgrey clearfix">

            <div class="modal-body" id="assignment_modal_wrapper">
                <!--LEFT PANEL - assignment details-->

                <!--assignment details-->
                <div class="span75 pull-left" id="assignment_details">
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
                    <div class="clearfix"></div>

                    <!--end assignment details-->

                    <!--JOB SCOPE-->

                    <div class="form-group" id="buyer_desc">
                        <label class="control-label">Job Scope</label>
                        <div name="job_description" class="tipsarea" id="job_description">
                        </div>
                        <span class="help-block">

                        </span>
                    </div>

                    <!-- end job scope -->

                    <!-- OFFER -->
                    <div class="offerings">
                        <button class="btn btn-success" id="add_offer">Add offer</button>
                        <table class="table table-striped" id="offer_table">
                            <tr>
                                <th class="span70">Specification </th><th class="span20"> Amount</th><th class="span10">Delete</th>
                            <tr><td> <input class="form-control" value="The above job scope" disabled></td><td> <input class="form-control offer_amount"></td><td class="center">NA</td></tr>
                            </tr>

                        </table>
                        <table class="table table-striped">
                            <tr>
                                <th class="span70">Grand Total</th><th id="grand_total"></th>
                            </tr>
                        </table>
                    </div>
                    <!-- END OFFER -->
                    <button class="button offer-btn marginTop_20" id="offer"><i class='fa fa-money'></i><span class="margin_left_15">Make an offer!</span></button>
                </div>
                <!--END LEFT PANEL - assignment details-->
                <!--User details-->
                <div class="span25 pull-right" id="assignment_user_details" >

                    <div class="owner-image center">
                        <img src="images/placeholders/sh_profile.jpg" class="owner-image-holder imageholder" />
                    </div>
                    <div class="owner-title-wrapper center">
                        <div class="owner-name">Swag Hau</div>
                        <div class="owner-title"></div>
                    </div>
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

                </div>
            </div>

        </div>
    </div>
</div>
<%@include file="../static/footer.jsp" %> 
<script src="lib/plugins/bootstrap-summernote/summernote.js"></script>
<script src="lib/js/offer.js"></script>