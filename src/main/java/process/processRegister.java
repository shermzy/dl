/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package process;

import DAO.UserDAO;
import com.util.Email;
import com.util.PasswordHash;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.UUID;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Sherman
 */
@WebServlet(name = "processRegister", urlPatterns = {"/processRegister"})
public class processRegister extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            System.out.println("processRegister");
            String username = (String) request.getParameter("username");
            String email = (String) request.getParameter("email");
            String password = (String) request.getParameter("password");
            String dob = (String) request.getParameter("dob");
String profile_pic = (String) request.getParameter("profile_pic");
            UUID uuid = null;
            String token = "";
            if (request.getParameter("type") != null) {
                try {
                    if (request.getParameter("type").equalsIgnoreCase("facebook_login")) {

                        boolean register = UserDAO.registerUser(profile_pic,username,email, "nil", dob, "facebook_login");
                        out.println(register);
                    } else {

                        password = PasswordHash.createHash(password);
                        uuid = UUID.randomUUID();
                        token = uuid.toString();
                        boolean success = UserDAO.registerUser("","",email, password, dob, token);
                        if (success) {
                            //send an email to user to verify it. Parameters will be user email and uuid
                            Email e = new Email(email);
                            e.signupEmail("user_email=" + email + "&verification_id=" + uuid);
                        }
                    }

                } catch (Exception ex) {
                    System.out.println("user db insertion failed");
                }
            }
        } finally {
            out.close();
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
