<%-- 
    Document   : index.jsp
    Created on : Sep 15, 2020, 7:27:29 PM
    Author     : Zafrul Hasan Nasim
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        
    </head>
    <body>
        <h1 id="name"></h1>
        
        
        <script>
        //json parse method, json stroes text data and in this text data convert into object by json.parse method     
       var teachers= '[{"name":"ashik mahmud","age":23 ,"name2":"zafrul hasan","age":22} , {"name3":"nasim","age":21} ]';
       var json = JSON.parse(teachers)[1].name3;
       console.log(json);
       
        
        </script>
            
        <script src="js/for_index.js"></script>
    </body>
</html>
