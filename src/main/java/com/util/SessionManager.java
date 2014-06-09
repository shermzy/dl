/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.util;

import org.json.JSONObject;

/**
 *
 * @author Sherman
 */
public class SessionManager {

    public static String createUser(String id) {
        String user="";
        JSONObject user_object = new JSONObject();
        try {
            
            user_object.put("id", id);
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        return user_object.toString();
    }
    
    public static String setAttribute(String user,String attribute_key,String attribute_value) {
        
        JSONObject user_object=null;
        try {
            user_object = new JSONObject(user);
            user_object.put(attribute_key, attribute_value);
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        return user_object.toString();
    }
    
       public static String getAttribute(String user,String attribute_key) {
        String attribute="";
        JSONObject user_object=null;
        try {
            user_object = new JSONObject(user);
            attribute = user_object.getString(attribute_key);
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        return attribute;
    }
}
