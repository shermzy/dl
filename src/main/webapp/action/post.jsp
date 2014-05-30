<%-- 
    Document   : post
    Created on : May 5, 2014, 1:50:28 PM
    Author     : Sherman
--%>
<%@include file="../static/header.jsp" %> 
<link href="lib/plugins/dropzone/css/dropzone.css" rel="stylesheet" type="text/css" />
<link href="lib/plugins/bootstrap-summernote/summernote.css" rel="stylesheet" type="text/css" />
<link href="lib/plugins/ion.rangeslider/css/ion.rangeSlider.css" rel="stylesheet" type="text/css"/>


<div class="content container">
    <div class="leftbreak10 posting-intro">
        <h1></h1>
    </div>
    <div class="leftbreak10 posting-wrapper">

        <!--Assignment Introduction - 100 char limit-->
        <div class="form-group" id="assignment">
            <label class="control-label">Title:</label>
            <textarea class="form-control tipsarea font20 assignment-intro-text" id="title" maxlength='80' rows="2"></textarea>
            <span class="standardized-text">I can</span>
            <span class="help-block">

            </span>
        </div>
        <!-- Assignment Intro End-->
        <div class="cat-box">
            <!--Category-->
            <div class="form-group cat-wrapper" id="category">
                <label class="control-label">Category:</label>
                <select class="form-control tipsarea" id="category-options">
                    <option value="nil">Select one..</option>
                    <option value="Business">Business</option>
                    <option value="IT">Programming and IT</option>
                    <option value="Writing">Writing and Presentation</option>
                </select>
                <span class="help-block">

                </span>
            </div>
            <!-- Category End-->


            <!--SubCategory-->
            <div class="form-group cat-wrapper" id="subcategory">
                <label class="control-label">Sub Category:</label>
                <select class="form-control tipsarea" id="subcategory-options">
                </select>
                <span class="help-block">
                </span>
            </div>
            <!-- SubCategory End-->
        </div>
        <div class="clearfix"></div>
        <!-- Image upload-->
        <div class="form-group" id="coverPic">
            <label class="control-label">Cover Image:</label>
            <!--   <form action="#" class="dropzone tipsarea" id="my-dropzone">
               </form>-->
            <div class="fileinput fileinput-new tipsarea"  data-provides="fileinput">
                <div class="fileinput-preview thumbnail" id="coverpic_wrapper" data-trigger="fileinput">
                </div>
                <div>
                    <span class="btn default btn-file">

                        <input type="file" name="cover" id="cover">
                    </span>
                    <a href="#" class="btn red fileinput-exists" data-dismiss="fileinput" id="cover-x">
                        X </a>
                </div>
            </div>
            <span class="help-block">
            </span>

        </div>
        <!-- Image End-->

        <!--Description-->
        <div class="form-group" id="desc">
            <label class="control-label">Description:</label>
            <div name="description" class="tipsarea" id="description">
            </div>
            <div class="word-count" id="desc_wordcount"></div>
            <span class="help-block">

            </span>
        </div>
        <!-- Description End-->

        <!--Time required to deliver-->
        <div class="form-group" id="timereq">
            <label class="control-label">Maximum time required to complete:</label>
            <div class="time-cost tipsarea"> I will deliver your requirement in
                <input id="maxtime" class="span10 form-control time" type="text" name="maxtime" value=""/> days.</p>
            </div>

            <span class="help-block">

            </span>
        </div>
        <!-- Time required to deliver End-->

        <!--Requirements-->
        <div class="form-group" id="itemreq">
            <label class="control-label">Things you need: </label>
            <div name="itemsreq" class="tipsarea" id="itemsreq">
            </div>
            <span class="help-block">

            </span>
        </div>
        <!-- Requirements End-->

        <!-- Custom tags-->
        <div class="form-group" id="tag">

            <label class="control-label">Tags:</label>
            <input id="tags" type="text" class="form-control tipsarea tags medium" />

            <span class="help-block">

            </span>

        </div>
        <!-- Custom tags End-->

        <!--save and continue-->


        <div class="save">
            <div class="center"><button class="btn large-green" id="save_btn">Save and Proceed</button></div>
        </div>
        <!--Save and continue end-->
    </div>

    <%@include file="../static/footer.jsp" %> 
    <script src="lib/plugins/dropzone/dropzone.min.js"></script>

    <script src="lib/plugins/ion.rangeslider/js/ion-rangeSlider/ion.rangeSlider.js"></script>
    <script src="lib/plugins/jquery-tags-input/jquery.tagsinput.js"></script>
    <script src="lib/plugins/maxlength/maxlength.js"></script>
    <script src="lib/plugins/bootstrap-summernote/summernote.js"></script>
    <script src="lib/js/formsInit.js"></script>
