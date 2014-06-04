package com.util;

import javax.mail.*;
import javax.mail.internet.*;
import java.util.Properties;

public class Email {

    private String emailAddressTo = new String();
    private String msgSubject = new String();
    private String msgText = new String();

    final String USER_NAME = "chenguorui90@gmail.com";   //User name of the Goole(gmail) account
    final String PASSSWORD = "190490";  //Password of the Goole(gmail) account
    final String FROM_ADDRESS = "guorui90@hotmail.com";  //From addresss
//type signupFB
    public Email(String email, String type) {
        //SendEmail email = new SendEmail();
        //Sending test email
        createAndSendEmail(email,type);
    }

    //  public static void main(String[] args) {
    //  SendEmail email = new SendEmail();
    //Sending test email
    //  email.createAndSendEmail("sherman.tan.2012@sis.smu.edu.sg", "Login validation",
    // "Congratulations !!! \n please click on www.google.com.");
    // }
    public void createAndSendEmail(String emailAddressTo, String emailType) {
        this.emailAddressTo = emailAddressTo;
        this.msgSubject = msgSubject;
        if (emailType.equals("signup")) {
            sendEmailMessage();
        }
    }

    private void sendEmailMessage() {

        //Create email sending properties
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(USER_NAME, PASSSWORD);
                    }
                });

        try {
            msgText = getSignupTemplate();
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(FROM_ADDRESS)); //Set from address of the email
            message.setContent(msgText, "text/html"); //set content type of the email

            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(emailAddressTo)); //Set email recipient

            message.setSubject(msgSubject); //Set email message subject
            Transport.send(message); //Send email message

            System.out.println("sent email successfully!");

        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }

    public void setEmailAddressTo(String emailAddressTo) {
        this.emailAddressTo = emailAddressTo;
    }

    public void setSubject(String subject) {
        this.msgSubject = subject;
    }

    public void setMessageText(String msgText) {
        this.msgText = msgText;
    }

    public String getSignupTemplate() {
        String template = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n"
                + "<html xmlns=\"http://www.w3.org/1999/xhtml\">\n"
                + "<head>\n"
                + "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n"
                + "<meta content=\"width=device-width, initial-scale=1.0\" name=\"viewport\"/>"
                + "<title>Metronic | Visual Charts</title>\n"
                + "<style type=\"text/css\">\n"
                + "#outlook a{padding:0;} /* Force Outlook to provide a \"view in browser\" button. */\n"
                + "body{width:100% !important; margin:0;} \n"
                + "body{-webkit-text-size-adjust:none;} /* Prevent Webkit platforms from changing default text sizes. */\n"
                + "body{margin:0; padding:0;}\n"
                + "img{border:0; height:auto; line-height:100%; outline:none; text-decoration:none;}\n"
                + "table td{border-collapse:collapse;}\n"
                + "#backgroundTable{height:100% !important; margin:0; padding:0; width:100% !important;}\n"
                + "@import url(http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700); /* Loading Open Sans Google font */ \n"
                + "body, #backgroundTable{ background-color:#FFF; }\n"
                + ".TopbarLogo{\n"
                + "padding:10px;\n"
                + "text-align:left;\n"
                + "vertical-align:middle;\n"
                + "}\n"
                + "h1, .h1{\n"
                + "color:#444444;\n"
                + "display:block;\n"
                + "font-family:Open Sans;\n"
                + "font-size:35px;\n"
                + "font-weight: 400;\n"
                + "line-height:100%;\n"
                + "margin-top:2%;\n"
                + "margin-right:0;\n"
                + "margin-bottom:1%;\n"
                + "margin-left:0;\n"
                + "text-align:left;\n"
                + "}\n"
                + "h2, .h2{\n"
                + "color:#444444;\n"
                + "display:block;\n"
                + "font-family:Open Sans;\n"
                + "font-size:30px;\n"
                + "font-weight: 400;\n"
                + "line-height:100%;\n"
                + "margin-top:2%;\n"
                + "margin-right:0;\n"
                + "margin-bottom:1%;\n"
                + "margin-left:0;\n"
                + "text-align:left;\n"
                + "}\n"
                + "h3, .h3{\n"
                + "color:#444444;\n"
                + "display:block;\n"
                + "font-family:Open Sans;\n"
                + "font-size:24px;\n"
                + "font-weight:400;\n"
                + "margin-top:2%;\n"
                + "margin-right:0;\n"
                + "margin-bottom:1%;\n"
                + "margin-left:0;\n"
                + "text-align:left;\n"
                + "}\n"
                + "h4, .h4{\n"
                + "color:#444444;\n"
                + "display:block;\n"
                + "font-family:Open Sans;\n"
                + "font-size:18px;\n"
                + "font-weight:400;\n"
                + "line-height:100%;\n"
                + "margin-top:2%;\n"
                + "margin-right:0;\n"
                + "margin-bottom:1%;\n"
                + "margin-left:0;\n"
                + "text-align:left;\n"
                + "}\n"
                + "h5, .h5{\n"
                + "color:#444444;\n"
                + "display:block;\n"
                + "font-family:Open Sans;\n"
                + "font-size:14px;\n"
                + "font-weight:400;\n"
                + "line-height:100%;\n"
                + "margin-top:2%;\n"
                + "margin-right:0;\n"
                + "margin-bottom:1%;\n"
                + "margin-left:0;\n"
                + "text-align:left;\n"
                + "}\n"
                + ".textdark { \n"
                + "color: #444444;\n"
                + "font-family: Open Sans;\n"
                + "font-size: 13px;\n"
                + "line-height: 150%;\n"
                + "text-align: left;\n"
                + "}\n"
                + ".textwhite { \n"
                + "color: #fff;\n"
                + "font-family: Open Sans;\n"
                + "font-size: 13px;\n"
                + "line-height: 150%;\n"
                + "text-align: left;\n"
                + "}\n"
                + ".fontwhite { color:#fff; }\n"
                + ".btn {\n"
                + "background-color: #e5e5e5;\n"
                + "background-image: none;\n"
                + "filter: none;\n"
                + "border: 0;\n"
                + "box-shadow: none;\n"
                + "padding: 7px 14px; \n"
                + "text-shadow: none;\n"
                + "font-family: \"Segoe UI\", Helvetica, Arial, sans-serif;\n"
                + "font-size: 14px;  \n"
                + "color: #333333;\n"
                + "cursor: pointer;\n"
                + "outline: none;\n"
                + "-webkit-border-radius: 0 !important;\n"
                + "-moz-border-radius: 0 !important;\n"
                + "border-radius: 0 !important;\n"
                + "}\n"
                + ".btn:hover, \n"
                + ".btn:focus, \n"
                + ".btn:active,\n"
                + ".btn.active,\n"
                + ".btn[disabled],\n"
                + ".btn.disabled {  \n"
                + "font-family: \"Segoe UI\", Helvetica, Arial, sans-serif;\n"
                + "color: #333333;\n"
                + "box-shadow: none;\n"
                + "background-color: #d8d8d8;\n"
                + "}\n"
                + ".btn.red {\n"
                + "color: white;\n"
                + "text-shadow: none;\n"
                + "background-color: #d84a38;\n"
                + "}\n"
                + ".btn.red:hover, \n"
                + ".btn.red:focus, \n"
                + ".btn.red:active, \n"
                + ".btn.red.active,\n"
                + ".btn.red[disabled], \n"
                + ".btn.red.disabled {    \n"
                + "background-color: #bb2413 !important;\n"
                + "color: #fff !important;\n"
                + "}\n"
                + ".btn.green {\n"
                + "color: white;\n"
                + "text-shadow: none; \n"
                + "background-color: #35aa47;\n"
                + "}\n"
                + ".btn.green:hover, \n"
                + ".btn.green:focus, \n"
                + ".btn.green:active, \n"
                + ".btn.green.active,\n"
                + ".btn.green.disabled, \n"
                + ".btn.green[disabled]{ \n"
                + "background-color: #1d943b !important;\n"
                + "color: #fff !important;\n"
                + "}\n"
                + "</style>\n"
                + "</head>\n"
                + "<body>\n"
                + "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"background-color:#1f1f1f; height:52px;\">\n"
                + "<tr>\n"
                + "	<td align=\"center\">\n"
                + "		<center>\n"
                + "		<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600px\" style=\"height:100%;\">\n"
                + "		<tr>\n"
                + "			<td align=\"left\" valign=\"middle\" style=\"padding-left:20px;\">\n"
                + "				Sports Connection\n"
                
                + "				\n"
                + "			</td>\n"
                + "		</tr>\n"
                + "		</table>\n"
                + "		</center>\n"
                + "	</td>\n"
                + "</tr>\n"
                + "</table>\n"
                + "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n"
                + "<tr>\n"
                + "	<td style=\"padding-bottom:20px;\">\n"
                + "		<center>\n"
                + "		<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600px\" style=\"height:100%;\">\n"
                + "		<tr>\n"
                + "			<td valign=\"top\" class=\"bodyContent\">\n"
                + "				<table border=\"0\" cellpadding=\"20\" cellspacing=\"0\" width=\"100%\">\n"
                + "				<tr>\n"
                + "					<td valign=\"top\">\n"
                + "						<h2 class=\"h2\">New Member Registration</h2>\n"
                + "						<br/>\n"
                + "						<div class=\"textdark\">\n"
                + "							 Welcome!"
                + "							<a href=\"#\" target=\"_blank\">Click here to activate your account</a>.\n"
                + "						</div>\n"
                + "					</td>\n"
                + "				</tr>\n"
                + "				</table>\n"
                + "			</td>\n"
                + "		</tr>\n"
                + "		</table>\n"
                + "		</center>\n"
                + "	</td>\n"
                + "</tr>\n"
                + "</table>\n"
                + "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"background-color:#f8f8f8;border-top:1px solid #e7e7e7;border-bottom:1px solid #e7e7e7;\">\n"
                + "<tr>\n"
                + "	<td>\n"
                + "		<center>\n"
                + "		<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600px\" style=\"height:100%;\">\n"
                + "		<tr>\n"
                + "			<td valign=\"top\" style=\"padding:20px;\">\n"
                + "				<h2>Some Additional info is here</h2>\n"
                + "				<br/>\n"
                + "				<div class=\"textdark\">\n"
                + "					<strong>Getting started:</strong> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.\n"
                + "				</div>\n"
                + "				<br/>\n"
                + "			</td>\n"
                + "		</tr>\n"
                + "		</table>\n"
                + "		</center>\n"
                + "	</td>\n"
                + "</tr>\n"
                + "</table>\n"

                + "</body>\n"
                + "</html>";
        return template;
    }
}
