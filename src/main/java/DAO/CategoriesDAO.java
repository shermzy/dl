/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package DAO;

import com.util.ConnectionManager;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import org.json.JSONObject;

/**
 *
 * @author Sherman
 */
public class CategoriesDAO {
    
      public static JSONObject getCategories() {
        String get_cat = "SELECT * FROM `category` order by Category_name";
        Connection conn = null;
        Statement st = null;
        ResultSet rs = null;
        JSONObject categories = new JSONObject();
        try {
            conn = ConnectionManager.getConnection();

            st = conn.createStatement();
            rs = st.executeQuery(get_cat);
            while (rs.next()) {               
                categories.put(String.valueOf(rs.getInt("category_id")),rs.getString("category_name"));   
            }
System.out.println(categories);
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            //Close connection, statement and resultset
            ConnectionManager.close(conn, st, rs);
        }

        return categories;
    }
      
      public static JSONObject getSubCategories(String category) {
        String verify_user = "SELECT * FROM `subcategory` where category_id =" + category;
        Connection conn = null;
        Statement st = null;
        ResultSet rs = null;
        JSONObject subcategories = new JSONObject();
        try {
            conn = ConnectionManager.getConnection();

            st = conn.createStatement();
            rs = st.executeQuery(verify_user);
            while (rs.next()) {               
                subcategories.put(String.valueOf(rs.getInt("subcategory_id")),rs.getString("subcategory_name"));   
            }

        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            //Close connection, statement and resultset
            ConnectionManager.close(conn, st, rs);
        }

        return subcategories;
    }
}
