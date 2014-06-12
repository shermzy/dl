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
            <label class="control-label span15">Title:</label>
            <div class="span85 pull-right">
                <textarea class="form-control tipsarea font20 service-intro-text" id="title" maxlength='80' rows="2"></textarea>
                <span class="standardized-text">I can</span>
                <span class="help-block">

                </span>
            </div>
            <div class="clearfix"></div>
        </div>

        <!-- Assignment Intro End-->
        <div class="form-group" id="category">
            <!--Category-->
            <div class="form-group cat-wrapper marginleft_15p" >
                <label class="cat-label ">Category:</label>
                <div class="span100">
                    <div class="dropdown">
                        <div class="form-control tipsarea" role="button" data-toggle="dropdown" href="#" id="selected_cat">Select one<b class="caret"></b></div>
                        <ul class="dropdown-menu serviceDropdown" role="menu" id="category-list">
                        </ul>
                    </div>
                    <span class="help-block">

                    </span>
                </div>
            </div>
            <!-- Category End-->


            <!--SubCategory-->
            <div class="form-group cat-wrapper marginleft_5p" id="subcategory">
                <label class="cat-label">Sub Category:</label>
                <div class="span100">
                    <div class="dropdown">
                        <div class="form-control tipsarea" role="button" data-toggle="dropdown" href="#" id="selected_subcat">Select one<b class="caret"></b></div>
                        <ul class="dropdown-menu serviceDropdown" role="menu" id="subcategory-list">
                        </ul>
                    </div>
                    <span class="help-block">
                    </span>
                </div>
            </div>
            <div class="clearfix"></div>
            <!-- SubCategory End-->
        </div>
        <div class="clearfix"></div>
        <!-- Image upload-->
        <div class="form-group" id="coverPic">
            <label class="control-label span15">Cover Image:</label>
            <div class="span85 pull-right">
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
            <div class="clearfix"></div>
        </div>
        <!-- Image End-->

        <!--Description-->
        <div class="form-group" id="desc">
            <label class="control-label span15">Description:</label>
            <div class="span85 pull-right">
                <div name="description" class="tipsarea" id="description">
                </div>
                <div class="word-count" id="desc_wordcount"></div>
                <span class="help-block">

                </span>
            </div>
            <div class="clearfix"></div>
        </div>
        <!-- Description End-->

        <!--Time required to deliver-->
        <div class="form-group" id="timereq">
            <label class="control-label span15">Efficiency</label>
            <div class="span85 pull-right">
                <div class="time-cost tipsarea"> I can deliver my work in
                    <input class="span15 form-control inline" type="text" id="maxtime"/> days.</p>
                </div>

                <span class="help-block">

                </span>
            </div>
            <div class="clearfix"></div>
        </div>
        <!-- Time required to deliver End-->

        <!--Requirements-->
        <div class="form-group tipsarea " id="specialty">
            <label class="control-label span15">Specialty</label>
            <div class="span85 pull-right">
                
                    <button class="btn btn-success" id="add_item">Add specialty</button>
                    <table class="table table-striped marginTop_20" id="specialty_table">
                        <tr>
                            <th class="span70">Specialty</th><th class="span15 center">Delete</th>
                        <tr><td> <input class="form-control required"></td> <td class="center"> <i class="fa fa-times-circle delete_button"></i></td></tr>
                        </tr>

                    </table>


          
                <span class="help-block">

                </span>
            </div>
            <div class="clearfix"></div>
        </div>
        <!-- Requirements End-->

        <!-- Custom tags-->
        <div class="form-group" id="tagging">

            <label class="control-label span15">Tags:</label>
            <div class="span85 pull-right" id="tag">
            <input id="tags" type="text" class="form-control tipsarea tags medium" />

            <span class="help-block">

            </span>
            </div>
            <div class="clearfix"></div>
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
    <script src="lib/js/service.js"></script>
