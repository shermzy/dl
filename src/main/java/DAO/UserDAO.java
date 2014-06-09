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
import java.util.Date;

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

        Date date = new Date();
        long timeMilli = date.getTime();
        String strLong = Long.toString(timeMilli);
        String query = "insert into user (email,password,date_of_birth,token_register,registered_since) ";
        query += " values ('" + email + "','" + password + "','" + dob + "','" + token + "','" + strLong + "')";
        Connection conn = null;
        Statement st = null;
        ResultSet rs = null;
        boolean updated = false;
        try {

            conn = ConnectionManager.getConnection();
            st = conn.createStatement();
            int value = st.executeUpdate(query);

            if (value != 0) {
                updated = true;
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            //Close connection, statement and resultset
            ConnectionManager.close(conn, st, rs);
        }

        return updated;
    }

    public static boolean verifyUser(String email, String verification_id) {
        String verify_user = "SELECT * FROM `user` WHERE EMAIL='" + email + "' and token_register='" + verification_id + "'";
        String change_token_status = "UPDATE `user` SET token_register='verified' where email='" + email + "'";
        Connection conn = null;
        Statement st = null;
        ResultSet rs = null;
        boolean verified = false;
        try {
            conn = ConnectionManager.getConnection();

            st = conn.createStatement();
            rs = st.executeQuery(verify_user);
            if (rs.next()) {
                int updateSuccess = st.executeUpdate(change_token_status);
                if (updateSuccess == 1) {
                    verified = true;
                }
            }

        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            //Close connection, statement and resultset
            ConnectionManager.close(conn, st, rs);
        }

        return verified;
    }

    public static String verifyPassword(String email) {
        String verify_user = "SELECT password FROM `user` WHERE EMAIL='" + email + "'";
        Connection conn = null;
        Statement st = null;
        ResultSet rs = null;
        String user_password = "";
        try {
            conn = ConnectionManager.getConnection();

            st = conn.createStatement();
            rs = st.executeQuery(verify_user);
            while (rs.next()) {
                user_password = rs.getString("password");
            }

        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            //Close connection, statement and resultset
            ConnectionManager.close(conn, st, rs);
        }

        return user_password;
    }
}
