/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package process;

import DAO.UserDAO;
import com.util.PasswordHash;
import com.util.SessionManager;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author Sherman
 */
@WebServlet(name = "processLogin", urlPatterns = {"/processLogin"})
public class processLogin extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * this servlet is used to create a session for logged in users
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
            HttpSession session = request.getSession(true);

            if (request.getParameter("type").equals("fb_login")) {

                //handle facebook login
                String email = (String) request.getParameter("email");
                String username = (String) request.getParameter("username");
                String channel = (String) request.getParameter("channel");
                String user = SessionManager.createUser(email);
                user = SessionManager.setAttribute(user, "channel", channel);
                session.setAttribute("user", user);
                out.println(session.getAttribute("user"));
            } else if (request.getParameter("type").equals("manual_login")) {

                //handle manual login
                try {
                    String email = (String) request.getParameter("email");
                    String password = (String) request.getParameter("password");
                    String user_password = UserDAO.verifyPassword(email);
                    boolean verifyPassword = PasswordHash.validatePassword(password, user_password);
                    if (verifyPassword) {
                        String user = SessionManager.createUser(email);
                        user = SessionManager.setAttribute(user, "channel", "manual_login");
                        session.setAttribute("user", user);
                        out.println(verifyPassword);
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
            } else if (request.getParameter("type").equals("checkSession")) {

                //handle checking of existing session when fb token is unavailable eg.manual sign in
                boolean sessionExist = false;
                if (session.getAttribute("user") != null) {
                    sessionExist = true;
                    out.println(sessionExist);
                }
            } else if (request.getParameter("type").equals("logout")) {

                //handles loggin user out of system.
                session.invalidate();
                out.println("session invalidated");
            }
        } catch (Exception e) {
            e.printStackTrace();
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
