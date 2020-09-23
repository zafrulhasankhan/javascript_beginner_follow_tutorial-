<%-- 
    Document   : age_claculate
    Created on : Sep 16, 2020, 6:35:46 PM
    Author     : Zafrul Hasan Nasim
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel=" stylesheet" href="css/age.css">
        <link rel=" stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
        <title>JSP Page</title>
    </head>
    <body>
      <div class="container-1">
        <h2>challange 1: Your age calculate by days</h2>
        <div class="flex-box-container-1">
            
        <div>
            <button class="btn btn-primary" onclick="ageinday()">click me</button>
        </div>
            
        <div>
            <button class=" btn btn-danger" onclick="reset()">reset</button>
        </div>
            
        </div>
        <div class="flex-box-container-1">
            <div id="flex-box-result">
                
            </div>
        </div>
     </div>
        
        
        <div class="container-2">
            <h2>Challange:2</h2>
            <button class="btn btn-success" onclick="cat_generate()">cat Generate</button>
            <button class="btn btn-danger" onclick="cat_remove()">cat Generate</button>
            <div class="flex-box-container-2" id="flex-cat-gen">
                
            </div>
        </div>
        
        
        <div class="container-3">
            <h2>Challange 3: Rock,papers,Scissors</h2>
            <div class="flex-box-rps" id="flex-box-rps-div">
                <img id="rock" src="http://images.clipartpanda.com/rock-clipart-clipart-harvestable-resources-rock.png"  height="150px" width="150px" onclick="rpsGame(this)">
                <img id="paper" src="http://images.clipartpanda.com/paper-clipart-nexxuz-Loose-Leaf-Paper.png"  height="150px"  width="150px" onclick="rpsGame(this)">
                <img id="scissors" src="https://thumbs.dreamstime.com/b/female-hand-sign-victory-sign-peace-sign-scissors-vector-color-flat-illustration-isolated-white-background-web-83128345.jpg"  height="150px"  width="150px" onclick="rpsGame(this)">
        
            </div>
        </div>
        
        
        <div class="container-4">
            
            <h2>Challange 4 : Change the all the buttond colors </h2>
            <div class="flex-box-pick-color">
                <form action="">
                    <select name="backdrop" class="dropdown" id="backround" onchange="button_color_change(this)" >
                    <option value="random">Random</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="reset">Reset</option>
                </select>
                </form>
                <button class="btn btn-primary">Wee!</button>
                <button class="btn btn-danger">yahoo</button>
                <button class="btn btn-warning">Google!</button>
                <button class="btn btn-danger">Facebook</button>
                     
            </div>
        </div>
        
        
        <!--challange 5: Blackjack-->
        <div class="container-5">
            <h2>Challange 5 : Blackjack</h2>
            <h3><span id="blackjack-result">Let's Play</span></h3>
            
            <div class="flex-blackjack-row-1">
                <div id="your-box">
                    <h2>You: <span id="your-blackjack-result">0</span></h2>
                </div>
                <div id="dealer-box">
                    <h2>Dealer :<span id="dealer-blackjack-result">0</span></h2>
                </div>
            </div>
            
            <div class="flex-blackjack-row-2">
                <button class="btn-lg btn-primary mr-2" id="blackjack-hit-button">Hit</button>
                <button class="btn-lg btn-warning mr-2" id="blackjack-stand-button">Stand</button>
                <button class="btn-lg btn-danger mr-2" id="blackjack-deal-button">Deal</button>
            </div>
            
            <div class="flex-blackjack-row-3">
                <table>
                    <tr>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Draws</th>
                       
                    </tr>
                    <tr>
                        
                           <td><span id="wins">0</span></td> 
                           <td><span id="losses">0</span></td>
                           <td><span id="draws">0</span></td>
                    </tr>
                </table>
            </div>
        </div>
  
        <script src="js/age.js"></script>
    </body>
</html>
