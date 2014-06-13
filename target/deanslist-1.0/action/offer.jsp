<%-- 
    Document   : offer
    Created on : May 20, 2014, 4:13:41 PM
    Author     : Sherman
--%>
<%@include file="../static/header.jsp" %>
<link href="lib/plugins/bootstrap-summernote/summernote.css" rel="stylesheet" type="text/css" />

<div class="content container" id="serviceModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class=" wide clearfix">
        <div class="bg_lightgrey clearfix">

            <div class="" id="service_modal_wrapper">
                <!--service details-->
                <div class="span75  pull-left" id="service_details">
                    <div class="title_wrapper ">
                        <div class="title-service modal-title" id="title"></div>
                        <div class="create_at-service">Created <span id="createdAt" data-livestamp=""></span></div>
                    </div>
                    <div class="col-md-12 padding20">
                        <div class="image-service"> <img id="piclink" class="service_img imageholder" /></div>
                        <div class="col-md-4 marginTop_20 bg_white padding20">
                            <h3>Key Features</h3>
                            <div class="required_service justify" id="itemreq">
                                There are no requirements for hire.
                            </div>
                        </div>
                        <div class="col-md-7  marginTop_20 marginleft15 bg_white justify padding20">
                            <h3>Skill Description</h3>
                            <div class="desc-service justify" id="description">
                            </div>
                        </div>
                    </div>

                </div>
                <!--end service details-->
                <!--User details-->
                <div class="span25 pull-right" id="service_user_details" >

                    <div class="owner-image center">
                        <img src="images/placeholders/sh_profile.jpg" class="owner-image-holder imageholder" />
                    </div>
                    <div class="owner-title-wrapper center">
                        <div class="owner-name" id="service_userName"></div>
                        <div class="owner-title"></div>
                    </div>


                    <!-- to add service statistics-->



                    <div class="overview-stats">
                        <div class="queue"> 
                            <div class="service-variable">2</div>
                            <div class="service-info">no. of orders</div>
                        </div>
                        <div class="avgTime">
                            <div class="service-variable">4</div>
                            <div class="service-info">days on average</div>    
                        </div>
                        <div class="respTime">
                            <div class="service-variable">7</div>
                            <div class="service-info">Avg hours to respond</div>   
                        </div>
                    </div>
                    <button class="button offer-btn" id="offer"><i class='fa fa-money'></i><span class="margin_left_15">Make an offer!</span></button>
                </div>
                <div class="clearfix"></div>
            </div>
            <!--JOB SCOPE-->
            <div class="span75" id="buyer_desc">
                <div class="form-group span100" >
                    <label class="control-label span15">Job Scope</label>
                    <div class="span85 pull-right">
                        <div name="job_description" class="tipsarea " id="job_description">
                        </div>
                        <span class="help-block">

                        </span>
                    </div>
                    <div class="clearfix"></div>
                </div>

                <!-- end job scope -->
                <!-- OFFER -->
                <div class="offerings">
                    <div class="form-group span100" id="offerings" >
                        <label class="control-label span15">Additional Requirements</label>
                        <div class="span85 pull-right">
                            <button class="btn btn-success" id="add_offer">Add offer</button>
                            <table class="table table-striped tipsarea" id="offer_table">
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
                        <span class="help-block"></span>
                        <div class="clearfix"></div>
                    </div>
                    <!-- END OFFER -->
                    <!-- START ESTIMATED TIME REQUIRED-->
                    <div class="form-group span100" id='timereq'>
                        <label class="control-label span15">Estimated time required</label>
                        <div class="span20 marginleft_15p">
                            <div class="input-group">
                                <input type="text" class="form-sharp" placeholder="eg.5" id="hours">
                                <span class="input-group-addon">
                                    hours
                                </span>
                            </div>
                            <span class="help-block">

                            </span>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <!-- END ESTIMATED TIME REQUIRED-->

                    <!-- START MAXIMUM TIME RANGE-->
                    <div class="form-group span100" >
                        <label class="control-label span15">Project's Lifespan</label>
                        <div class="span20 marginleft_15p">
                            <div class="input-group">
                                <input type="text" class="form-sharp" placeholder="eg.5" id="hours">
                                <span class="input-group-addon">
                                    days
                                </span>
                            </div>
                            <span class="help-block">

                            </span>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <!-- END MAXIMUM TIME RANGE-->
                </div>
                <button class="button offer-btn" id="offer"><i class='fa fa-money'></i><span class="margin_left_15">Make an offer!</span></button>
            </div>
        </div>
    </div>
    <%@include file="../static/footer.jsp" %> 
    <script src="lib/plugins/bootstrap-summernote/summernote.js"></script>
    <script src="lib/js/offer.js"></script>