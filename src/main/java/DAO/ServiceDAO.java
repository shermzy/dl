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
import org.json.JSONObject;

/**
 *
 * @author Sherman
 */
public class ServiceDAO {

    public static int addService(JSONObject service) {
        Connection conn = null;
        Statement st = null;
        ResultSet rs = null;
        PreparedStatement ps = null;
        String query = "";
        int success = 0;
        try {
            //Get database connection & execute query 
            conn = ConnectionManager.getConnection();

            query += "insert into `service` (`user_id`, `title`, `category`, `subcategory`,`piclink`,";
            query += "`description`,`maxtime`,`itemreq`,`tags`,`timeCreated`) ";
            query += "values ('" + service.getString("user_id") + "','" + service.getString("title") + "','" + service.getString("category") + "',";
            query += "'" + service.getString("subcategory") + "','" + service.getString("piclink") + "','" + service.getString("description") + "',";
            query += "'" + service.getString("maxtime") + "','" + service.getString("itemreq") + "','" + service.getString("tags") + "','" + service.getString("timeCreated") + "')";
            System.out.println(query);
            st = conn.createStatement();
            success = st.executeUpdate(query);

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

}
