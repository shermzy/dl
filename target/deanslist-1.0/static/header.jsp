  
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>DeansList</title>
        <meta name="MobileOptimized" content="320">
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
        <link href="lib/css/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css">
        <link href="lib/css/bootstrap.css" rel="stylesheet" type="text/css" />
        <link href="lib/css/deanslist.css" rel="stylesheet" type="text/css" />
        <script src="lib/js/jquery.js" type="text/javascript"></script>
        <script>var user = null</script>
        <% if (session.getAttribute("user") == null) {
                response.sendRedirect("home");
            } else {
        %><script>user = JSON.parse('<%= session.getAttribute("user")%>')</script><%
            }
        %>
    </head>
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
                <div class="topbar" id="top-nav">
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
