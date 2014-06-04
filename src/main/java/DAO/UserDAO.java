/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DAO;

import com.util.ConnectionManager;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author Sherman
 */
public class UserDAO {

    private static String GET_USER;

    /**
     * Check if user exist in the data base already. processSignUp.java
     */
    public static boolean checkUserExist(String email) {
        String GET_USER = "SELECT * FROM `user` WHERE EMAIL=?";
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        boolean isExist = false;
        try {
            conn = ConnectionManager.getConnection();

            ps = conn.prepareStatement(GET_USER);
            ps.setString(1, email);

            rs = ps.executeQuery();

            while (rs.next()) {
                isExist = true;
                System.out.println(rs.next());
            }

        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            //Close connection, statement and resultset
            ConnectionManager.close(conn, ps, rs);
        }

        return isExist;
    }

    public static boolean registerUser(String email, String password, String dob, String token) {
        String query = "insert into user (email,password,date_of_birth,token_register) ";
        query += " values ('" + email + "','" + password + "','" + dob + "','" + token + "')";
        Connection conn = null;
        Statement st = null;
        ResultSet rs = null;
        boolean updated = false;
        try {
            
            conn = ConnectionManager.getConnection();
            st = conn.createStatement();
            st.executeUpdate(query);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            //Close connection, statement and resultset
            ConnectionManager.close(conn, st, rs);
        }

        return updated;
    }
}
