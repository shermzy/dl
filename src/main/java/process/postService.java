/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package process;

import DAO.ServiceDAO;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Random;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.activation.MimetypesFileTypeMap;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.json.JSONObject;

/**
 *
 * @author Sherman
 */
@WebServlet(name = "postService", urlPatterns = {"/postService"})
public class postService extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * This servlet is used to insert into db for a service posted by a user
     *
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
            //multipart handling for image from service
            boolean isMultipart = ServletFileUpload.isMultipartContent(request);
            String OSDataFolder = System.getenv("OPENSHIFT_DATA_DIR");
            File uploadedFile = null;

            if (!isMultipart) {
                JSONObject service = new JSONObject((String) request.getParameter("service"));
                ServiceDAO sd = new ServiceDAO();
                boolean success = sd.addService(service);
                out.println(success);
            } else {

                // Create a factory for disk-based file items  
                FileItemFactory factory = new DiskFileItemFactory();
                // Create a new file upload handler  
                ServletFileUpload upload = new ServletFileUpload(factory);

                try {
                    // Parse the request  
                    List<FileItem> items = upload.parseRequest(request);
                    Iterator iterator = items.iterator();
                    while (iterator.hasNext()) {
                        FileItem item = (FileItem) iterator.next();
                        if (!item.isFormField()) {
                            if (OSDataFolder == null) {
                                String root = getServletContext().getRealPath("/");
                                File path = new File(root + "/" + item.getFieldName());
                                System.out.println("itemname: " + item.getName() + " fieldname: " + item.getFieldName());
                                if (!path.exists()) {
                                    boolean status = path.mkdirs();
                                }
                                uploadedFile = new File(path + "/" + item.getName() + ".png");

                              
                            } else {
                                String root = OSDataFolder;
                                File path = new File(root);
                                if (!path.exists()) {
                                    boolean status = path.mkdirs();
                                }
                                uploadedFile = new File(path + "/" + item.getFieldName() + ".png");
                                //imageLink = uploadedFile.getAbsolutePath();

                            }
                            item.write(uploadedFile);

                        }
                    }
                } catch (FileUploadException e) {
                    e.printStackTrace();
                    e.getMessage();
                    out.println(e);
                } catch (Exception e) {
                    e.printStackTrace();
                    e.getMessage();
                    out.println(e);
                }

            }

        } catch (Exception e) {

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
