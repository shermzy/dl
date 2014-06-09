/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import javax.activation.MimetypesFileTypeMap;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Sherman
 */
@WebServlet(name = "uploads", urlPatterns = {"/uploads/*"})
public class uploads extends HttpServlet {

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

        int BUFFER_LENGTH = 4096;
        try {
            /* TODO output your page here. You may use following sample code. */
            File file = null;
            String filePath = request.getPathInfo();
            String root = getServletContext().getRealPath("/");
            if (System.getenv("OPENSHIFT_DATA_DIR") != null) {
                file = new File(System.getenv("OPENSHIFT_DATA_DIR") + filePath);
            } else {
                file = new File(root + "/uploads" + filePath);
            }
            System.out.println("File : " + file);
            System.out.println("Filepath : " + filePath);
            InputStream input = new FileInputStream(file);

            response.setContentLength((int) file.length());
            response.setContentType(new MimetypesFileTypeMap().getContentType(file));
            System.out.println(response);
            OutputStream output = response.getOutputStream();
            byte[] bytes = new byte[BUFFER_LENGTH];
            int read = 0;
            while ((read = input.read(bytes, 0, BUFFER_LENGTH)) != -1) {
                output.write(bytes, 0, read);
                output.flush();
            }

            input.close();
            output.close();
        } catch (Exception ex) {
            ex.printStackTrace();
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
