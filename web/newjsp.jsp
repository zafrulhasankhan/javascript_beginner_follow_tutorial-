<%-- 
    Document   : newjsp
    Created on : Sep 16, 2020, 8:43:41 PM
    Author     : Zafrul Hasan Nasim
--%>

<!DOCTYPE html>
<html>
    <head>
       
    </head>
<body>

    <h3 id="gd"></h3>

 <button class="btn btn-primary" onclick="myFunction()">click me</button>

 <script>
    
    var db = {
        'rock':{'paper':1,'rock':0.5,'scissors':0},
        'paper':{'rock':0,'paper':0.5,'scissors':1},
        'scissors':{'paper':0,'scissors':0.5,'rock':1}
    };
    console.log(db['paper']['scissors']);
    console.log(db['scissors']['paper']);
 </script>
</body>
</html>

