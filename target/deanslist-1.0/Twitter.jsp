<%-- 
    Document   : Twitter
    Created on : May 14, 2014, 10:04:09 AM
    Author     : Sherman
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@include file="static/header.jsp" %> 
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <div class="content">
             <button class="btn btn-default" id="twitter">log in to twitter</button>
       
        <a href="https://twitter.com/share" class="twitter-share-button" data-lang="en">Tweet</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
    </div> </body>
</html>

<%@include file="static/footer.jsp" %> 
<script>
    !function(d,s,id){
        var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){
            js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js,fjs);
        }
    }(document,"script","twitter-wjs");
    /*  $.post("twitter", function(token) {
     console.log("token");
     // window.location.href="https://api.twitter.com/oauth/authenticate?oauth_token=" + token;
     })*/
$('#twitter').click(function(){
    window.location.href = "twitter";
})

</script>
