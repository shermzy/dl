<%-- 
    Document   : profile
    Created on : May 19, 2014, 4:52:49 PM
    Author     : Sherman
--%>

<%@include file="../static/header.jsp" %> 
<link href="lib/plugins/bootstrap-editable-1.14/bootstrap-editable.css" rel="stylesheet" type="text/css" />
<body id="profile">
    <!-- SIDE NAV BAR-->

    <div class="profile_sidenav">
        <div class="profile_profilepic center"><img class="profile_pic" id="profile_profilepic"/></div>
        <div class="profile_navbtn" id="bio">Personal Bio</div>
        <div class="profile_navbtn">Skills</div>
        <div class="profile_navbtn">Achievements</div>
        <div class="profile_navbtn">To do</div>
        <div class="profile_navbtn">Minion Submission Portal</div>
    </div>
    <!--END SIDE NAV BAR-->

    <!-- Main page -->

    <!--TOP COLUMN 1-->
    <div class="content">
        <div class="container " >
            <div class="span30 padding20" id="bio_wrapper">
                <div class="form-group">

                    <span class="bio_field ">

                        <a href="#" class="font25" id="user_name" data-type="text"  data-placement="bottom" data-placeholder="Required" data-original-title="Enter your username">
                        </a>
                    </span>
                </div>
                <!--END TOP COLUMN 1-->        



                <div class="bio_field">
                    <label class="bio_label">Email : </label>
                    <a href="#" id="email" data-type="text" data-placement="bottom" data-placeholder="Required" data-original-title="Enter your email">
                    </a>
                </div>



                <div class="bio_field">
                    <label class="bio_label">Birthday : </label>
                    <a href="#" id="dob" data-type="date" data-format="dd/mm/yyyy" data-pk="1" data-placement="bottom" data-original-title="Date of Birth">
                    </a>
                </div>
                <div class="bio_field">
                    <label class="bio_label">Gender : </label>
                    <a href="#" id="gender" data-type="text" data-placement="bottom" data-placeholder="Required" data-original-title="Enter your gender">
                    </a>
                </div>




                <div class="bio_field">


                    <a href="#" data-original-title="facebook" class="social-icon facebook" id="facebook_link" target="_blank">
                    </a>
                    <a href="#" data-original-title="facebook" class="social-icon twitter">
                    </a>

                </div>


            </div>
            <div class="container" id="skills">
            </div>

        </div>



        <!--END OF MAIN PAGE -->
</body>
<%@include file="../static/footer.jsp" %> 
<script src="lib/plugins/bootstrap-editable-1.14/bootstrap-editable.min.js" type="text/javascript"></script>
<script src="lib/js/profile.js" type="text/javascript"></script>
<script>


    // jQuery.uniform.update('#inline');

</script>