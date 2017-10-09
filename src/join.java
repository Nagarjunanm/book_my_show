

import java.io.IOException;  
import java.io.PrintWriter;  
  
import javax.servlet.RequestDispatcher;  
import javax.servlet.ServletException;  
import javax.servlet.http.HttpServlet;  
import javax.servlet.http.HttpServletRequest;  
import javax.servlet.http.HttpServletResponse;  
import javax.servlet.http.HttpSession;  
  
 
  
public class join extends HttpServlet{  
 
    private static final long serialVersionUID = 1L;  
  
    public void doPost(HttpServletRequest request, HttpServletResponse response)    
            throws ServletException, IOException {    
  
        response.setContentType("text/html");    
        PrintWriter out = response.getWriter();    
          
        String n=request.getParameter("usernamesignup");    
        String p=request.getParameter("passwordsignup");   
        String m=request.getParameter("emailsignup");
        String t=request.getParameter("passwordsignup_confirm");
        
        
          if(p.equals(t))
          {
        if(Login.creating(n, p,m)){ 
        	HttpSession session = request.getSession(true);  
        	 if(session!=null)  
        	        session.setAttribute("name", n);
        	 
        	out.println("succesfully signed up");
            RequestDispatcher rd=request.getRequestDispatcher("index.jsp");    
            rd.forward(request,response);    
        }  
        
        else{    
            out.print("<p style=\"color:red\">Sorry username or password error</p>");    
       
            RequestDispatcher rd=request.getRequestDispatcher("index.jsp");
           
            rd.include(request,response);    
        } 
          }
          else
          {
        	  out.println("PASSWORD DIDN'T MATCH ");
              RequestDispatcher rd=request.getRequestDispatcher("index.jsp");    
              rd.forward(request,response);    
          }
  
        out.close();    
    }    
}   


