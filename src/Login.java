

import java.io.IOException;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.sql.Connection;  
import java.sql.DriverManager;  
import java.sql.PreparedStatement;  
import java.sql.ResultSet;  
import java.sql.SQLException;
import java.util.Arrays;  
  
public class Login {  
    public static boolean validate (String name, String pass) {          
        boolean status = false;  
        Connection conn = null;  
        PreparedStatement pst = null;  
        ResultSet rs = null;  
        String storedPassword=null;
        String url = "jdbc:mysql://localhost:3306/";  
        boolean match = false;
        
        String driver = "com.mysql.jdbc.Driver";  
        try {  
            Class.forName(driver).newInstance();  
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/book_my","root","");  
        
         
            pst =conn.prepareStatement("select * from user_db where  user_name=?");  
            //pst.setString(1, pass);  
            pst.setString(1, name);  
            
            rs = pst.executeQuery();  
             while( rs.next())
             {
            	storedPassword = rs.getString(3);
             }
             if(storedPassword == pass)
             {
            	 match = true;
             }
           
        } catch (Exception e) {  
            System.out.println(e);  
        } finally {  
            if (conn != null) {  
                try {  
                    conn.close();  
                } catch (SQLException e) {  
                    e.printStackTrace();  
                }  
            }  
            if (pst != null) {  
                try {  
                    pst.close();  
                } catch (SQLException e) {  
                    e.printStackTrace();  
                }  
            }  
            if (rs != null) {  
                try {  
                    rs.close();  
                } catch (SQLException e) {  
                    e.printStackTrace();  
                }  
            }  
        }  
     //   System.out.println(status);
        return match;  
    }  
    
    
    public static boolean creating (String name, String pass, String mail) {          
        boolean status = false;  
        Connection conn = null;  
        PreparedStatement pst = null;
        PreparedStatement qst = null;
        ResultSet rs = null;  
  
        String url = "jdbc:mysql://localhost:3306/";  
        String driver = "com.mysql.jdbc.Driver";  
        try {  
            Class.forName(driver).newInstance();  
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/book_my","root","");  
            pst =conn.prepareStatement("insert into user_db (user_name,password,email) values(?,?,?)");  
           
            
            rs = qst.executeQuery();  
            status = rs.next(); 
            
        }
        catch(Exception E)
        {
        	 E.printStackTrace();
        }
        finally {  
            if (conn != null) {  
                try {  
                    conn.close();  
                } catch (SQLException e) {  
                    e.printStackTrace();  
                }  
            }  
            if (pst != null) {  
                try {  
                    pst.close();  
                } catch (SQLException e) {  
                    e.printStackTrace();  
                }  
            }  
            if (rs != null) {  
                try {  
                    rs.close();  
                } catch (SQLException e) {  
                    e.printStackTrace();  
                }  
            }  
        }
        return status;  
    }  
}  