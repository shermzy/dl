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
import org.json.JSONArray;
import org.json.JSONObject;

/**
 *
 * @author Sherman
 */
public class ServiceDAO {

    public static boolean addService(JSONObject service) {
        Connection conn = null;
        Statement st = null;
        ResultSet rs = null;
        PreparedStatement ps = null;
        String query = "";
        boolean success = false;
        try {
            //Get database connection & execute query 
            conn = ConnectionManager.getConnection();

            query += "insert into `service` (`user_id`, `title`, `category`, `subcategory`,`piclink`,";
            query += "`description`,`maxtime`,`itemreq`,`tags`,`timeCreated`) ";
            query += "values ('" + service.getString("user_id") + "','" + service.getString("title") + "','" + service.getString("category") + "',";
            query += "'" + service.getString("subcategory") + "','" + service.getString("image") + "','" + service.getString("description") + "',";
            query += "'" + service.getString("maxtime") + "','" + service.getString("itemreq") + "','" + service.getString("tags") + "','" + service.getString("timeCreated") + "')";
            System.out.println(query);
            st = conn.createStatement();
            int value = st.executeUpdate(query);
            if (value == 1) {
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
            ConnectionManager.close(conn, ps, rs);
        }
        return success;
    }

    public static JSONArray getServices(String rowFrom) {
        Connection conn = null;
        Statement st = null;
        ResultSet rs = null;
        PreparedStatement ps = null;
        String query = "";
        JSONArray services = new JSONArray();
        try {
            //Get database connection & execute query 
            conn = ConnectionManager.getConnection();

            query += "SELECT * from service limit " + rowFrom + ",10";
            st = conn.createStatement();
            rs = st.executeQuery(query);
            ResultSetMetaData meta = rs.getMetaData();
            int colCount = meta.getColumnCount();
            while (rs.next()) {
                JSONObject service = new JSONObject();
                for (int column = 1; column <= colCount; column++) {
                    Object value = rs.getObject(column);
                    String columnName = meta.getColumnName(column);
                    if (value != null) {
                        service.put(columnName,value);
                    } else {
                           service.put(columnName,"null"); // you need this to keep your columns in sync....
                    }
                }
                services.put(service);
            }
            System.out.println(services);
        } catch (SQLException e) {
            //insertedLine = 100; 
            System.out.println(e.getMessage());

        } catch (Exception ex) {
            //insertedLine = 101; 
            ex.printStackTrace();
        } finally {
            //Close connection, statement and resultset 
            ConnectionManager.close(conn, ps, rs);
        }
        return services;
    }
    
       public static JSONObject getSingleService(String service_id) {
        Connection conn = null;
        Statement st = null;
        ResultSet rs = null;
        PreparedStatement ps = null;
        String query = "";
        JSONObject service = null;
        try {
            //Get database connection & execute query 
            conn = ConnectionManager.getConnection();

            query += "SELECT * from service where service_id = " + service_id;
            st = conn.createStatement();
            rs = st.executeQuery(query);
            ResultSetMetaData meta = rs.getMetaData();
            int colCount = meta.getColumnCount();
            while (rs.next()) {
                 service = new JSONObject();
                for (int column = 1; column <= colCount; column++) {
                    Object value = rs.getObject(column);
                    String columnName = meta.getColumnName(column);
                    if (value != null) {
                        service.put(columnName,value);
                    } else {
                           service.put(columnName,"null"); // you need this to keep your columns in sync....
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
            ConnectionManager.close(conn, ps, rs);
        }
        return service;
    }

}
