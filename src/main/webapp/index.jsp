<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>DeansList</title>
        <meta name="MobileOptimized" content="320">
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
        <link href="lib/css/bootstrap.css" rel="stylesheet" type="text/css" />
        <link href="lib/css/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css">
        <link href="lib/css/deanslist.css" rel="stylesheet" type="text/css" />

    </head>
    <body id="main">
        <div id="st-container" class="st-container">

            <nav class="st-menu st-effect-1" id="menu-1">
                <h2 class="white">Menu</h2>
                <ul>
                    <a href="home"><li class="sidemenu-list"><i class="fa fa-search"></i><span class="sidenav_title">Browse</span></li></a>
                    <a href="post"><li class="sidemenu-list"><i class="fa fa-plus"></i><span class="sidenav_title">Post</span></li></a>
                    <a href="profile"><li class="sidemenu-list"><i class="fa fa-user"></i><span class="sidenav_title">Profile</span></li>

                </ul>
            </nav>
            <div class="st-content"><!-- this is the wrapper for the content --> 
                <div class="st-content-inner">  
                    <div class="topbar">
                        <div class="container"> 
                            <!--Start logo placement-->
                            <a href="./index.jsp">
                                <div class="company_logo pull-left">
                                    <span class="lato_font font20">  DeansList</span>
                                </div>
                            </a>
                            <!--End logo placement-->

                            <!--start right nav bar-->
                            <nav class="pull-right nav" id="nav-btns">
                            </nav>
                            <div class="clearfix"></div>
                            <!--End Right nav bar-->

                        </div>

                    </div>

                    <!-- End TOP NAVIGATION BAR -->


                    <div class="content">
                        <div class="container" id="services">
                            <!-- 3 columns of services-->
                            <div  id="services">
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
                <div class="modal fade" id="serviceModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog wide clearfix">
                        <div class="modal-content bg_lightgrey clearfix">

                            <div class="modal-body" id="service_modal_wrapper">
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
                                                I am just an average Joe,
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

                        </div>
                    </div>
                </div>
                </body>
                <!-- END OF MODAL-->
                <%@include file="../static/footer.jsp" %> 
                <script src="lib/js/browse.js" type="text/javascript"></script>
                <script>
                    var user = null;


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






