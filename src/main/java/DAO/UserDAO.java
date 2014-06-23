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
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Date;
import org.json.JSONObject;

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

    public static boolean registerUser(String profile_pic, String username, String email, String password, String dob, String token, String fb_link) {

        Date date = new Date();
        long timeMilli = date.getTime();
        String strLong = Long.toString(timeMilli);
        String query = "insert into user (profilepic,username,email,password,date_of_birth,token_register,registered_since,fb_link) ";
        query += " values ('" + profile_pic + "','" + username + "','" + email + "','";
        query += password + "','" + dob + "','" + token + "','" + strLong + "','" + fb_link + "')";
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

    public static String getUserId(String email) {
        String GET_USERID = "SELECT user_id FROM `user` WHERE EMAIL='" + email + "'";
        Connection conn = null;
        Statement st = null;
        ResultSet rs = null;
        String id = null;
        try {
            conn = ConnectionManager.getConnection();
            st = conn.createStatement();
            rs = st.executeQuery(GET_USERID);

            while (rs.next()) {
                id = String.valueOf(rs.getInt("user_id"));
            }

        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            //Close connection, statement and resultset
            ConnectionManager.close(conn, st, rs);
        }

        return id;
    }

    public static JSONObject getUserProfile(String userid) {
        Connection conn = null;
        Statement st = null;
        ResultSet rs = null;
        String query = "";
        JSONObject user = null;
        try {
            //Get database connection & execute query 
            conn = ConnectionManager.getConnection();

            query += "SELECT * from user where user_id = " + userid;
            st = conn.createStatement();

            rs = st.executeQuery(query);
            ResultSetMetaData meta = rs.getMetaData();
            int colCount = meta.getColumnCount();
            while (rs.next()) {

                user = new JSONObject();
                for (int column = 1; column <= colCount; column++) {
                    Object value = rs.getObject(column);
                    String columnName = meta.getColumnName(column);
                    if (value != null) {
                        user.put(columnName, String.valueOf(value));
                    } else {
                        user.put(columnName, "null"); // you need this to keep your columns in sync....
                    }
                }

            }

        } catch (SQLException e) {
            //insertedLine = 100; 
            System.out.println(e.getMessage());

        } catch (Exception ex) {
            //insertedLine = 101; 
            ex.printStackTrace();
        } finally {
            //Close connection, statement and resultset 
            ConnectionManager.close(conn, st, rs);
        }
        return user;
    }

    public static boolean updateBio(String user_id, String column_name, String updated_value) {
        Connection conn = null;
        Statement st = null;
        ResultSet rs = null;
        String update = "";
        boolean success = false;
        try {
            //Get database connection & execute query 
            conn = ConnectionManager.getConnection();
            update += "update user set " + column_name + "='" + updated_value + "' where user_id = " + user_id;
            System.out.println(update);
            st = conn.createStatement();
            int response = st.executeUpdate(update);
            if (response == 1) {
                success = true;
            }

        } catch (SQLException e) {
            //insertedLine = 100; 
            System.out.println(e.getMessage());

        } catch (Exception ex) {
            //insertedLine = 101; 
            ex.printStackTrace();
        } finally {
            //Close connection, statement and resultset 
            ConnectionManager.close(conn, st, rs);
        }
        return success;
    }
}
