package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class age_005fclaculate_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("<!DOCTYPE html>\n");
      out.write("<html>\n");
      out.write("    <head>\n");
      out.write("        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n");
      out.write("        <link rel=\" stylesheet\" href=\"css/age.css\">\n");
      out.write("        <link rel=\" stylesheet\" href=\"css/bootstrap.css\">\n");
      out.write("        <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css\">\n");
      out.write("        <title>JSP Page</title>\n");
      out.write("    </head>\n");
      out.write("    <body>\n");
      out.write("      <div class=\"container-1\">\n");
      out.write("        <h2>challange 1: Your age calculate by days</h2>\n");
      out.write("        <div class=\"flex-box-container-1\">\n");
      out.write("            \n");
      out.write("        <div>\n");
      out.write("            <button class=\"btn btn-primary\" onclick=\"ageinday()\">click me</button>\n");
      out.write("        </div>\n");
      out.write("            \n");
      out.write("        <div>\n");
      out.write("            <button class=\" btn btn-danger\" onclick=\"reset()\">reset</button>\n");
      out.write("        </div>\n");
      out.write("            \n");
      out.write("        </div>\n");
      out.write("        <div class=\"flex-box-container-1\">\n");
      out.write("            <div id=\"flex-box-result\">\n");
      out.write("                \n");
      out.write("            </div>\n");
      out.write("        </div>\n");
      out.write("     </div>\n");
      out.write("        \n");
      out.write("        \n");
      out.write("        <div class=\"container-2\">\n");
      out.write("            <h2>Challange:2</h2>\n");
      out.write("            <button class=\"btn btn-success\" onclick=\"cat_generate()\">cat Generate</button>\n");
      out.write("            <button class=\"btn btn-danger\" onclick=\"cat_remove()\">cat Generate</button>\n");
      out.write("            <div class=\"flex-box-container-2\" id=\"flex-cat-gen\">\n");
      out.write("                \n");
      out.write("            </div>\n");
      out.write("        </div>\n");
      out.write("        \n");
      out.write("        \n");
      out.write("        <div class=\"container-3\">\n");
      out.write("            <h2>Challange 3: Rock,papers,Scissors</h2>\n");
      out.write("            <div class=\"flex-box-rps\" id=\"flex-box-rps-div\">\n");
      out.write("                <img id=\"rock\" src=\"http://images.clipartpanda.com/rock-clipart-clipart-harvestable-resources-rock.png\"  height=\"150px\" width=\"150px\" onclick=\"rpsGame(this)\">\n");
      out.write("                <img id=\"paper\" src=\"http://images.clipartpanda.com/paper-clipart-nexxuz-Loose-Leaf-Paper.png\"  height=\"150px\"  width=\"150px\" onclick=\"rpsGame(this)\">\n");
      out.write("                <img id=\"scissors\" src=\"https://thumbs.dreamstime.com/b/female-hand-sign-victory-sign-peace-sign-scissors-vector-color-flat-illustration-isolated-white-background-web-83128345.jpg\"  height=\"150px\"  width=\"150px\" onclick=\"rpsGame(this)\">\n");
      out.write("        \n");
      out.write("            </div>\n");
      out.write("        </div>\n");
      out.write("        \n");
      out.write("        \n");
      out.write("        <div class=\"container-4\">\n");
      out.write("            \n");
      out.write("            <h2>Challange 4 : Change the all the buttond colors </h2>\n");
      out.write("            <div class=\"flex-box-pick-color\">\n");
      out.write("                <form action=\"\">\n");
      out.write("                    <select name=\"backdrop\" class=\"dropdown\" id=\"backround\" onchange=\"button_color_change(this)\" >\n");
      out.write("                    <option value=\"random\">Random</option>\n");
      out.write("                    <option value=\"red\">Red</option>\n");
      out.write("                    <option value=\"green\">Green</option>\n");
      out.write("                    <option value=\"reset\">Reset</option>\n");
      out.write("                </select>\n");
      out.write("                </form>\n");
      out.write("                <button class=\"btn btn-primary\">Wee!</button>\n");
      out.write("                <button class=\"btn btn-danger\">yahoo</button>\n");
      out.write("                <button class=\"btn btn-warning\">Google!</button>\n");
      out.write("                <button class=\"btn btn-danger\">Facebook</button>\n");
      out.write("                     \n");
      out.write("            </div>\n");
      out.write("        </div>\n");
      out.write("        \n");
      out.write("        \n");
      out.write("        <!--challange 5: Blackjack-->\n");
      out.write("        <div class=\"container-5\">\n");
      out.write("            <h2>Challange 5 : Blackjack</h2>\n");
      out.write("            <h3><span id=\"blackjack-result\">Let's Play</span></h3>\n");
      out.write("            \n");
      out.write("            <div class=\"flex-blackjack-row-1\">\n");
      out.write("                <div id=\"your-box\">\n");
      out.write("                    <h2>You: <span id=\"your-blackjack-result\">0</span></h2>\n");
      out.write("                </div>\n");
      out.write("                <div id=\"dealer-box\">\n");
      out.write("                    <h2>Dealer :<span id=\"dealer-blackjack-result\">0</span></h2>\n");
      out.write("                </div>\n");
      out.write("            </div>\n");
      out.write("            \n");
      out.write("            <div class=\"flex-blackjack-row-2\">\n");
      out.write("                <button class=\"btn-lg btn-primary mr-2\" id=\"blackjack-hit-button\">Hit</button>\n");
      out.write("                <button class=\"btn-lg btn-warning mr-2\" id=\"blackjack-stand-button\">Stand</button>\n");
      out.write("                <button class=\"btn-lg btn-danger mr-2\" id=\"blackjack-deal-button\">Deal</button>\n");
      out.write("            </div>\n");
      out.write("            \n");
      out.write("            <div class=\"flex-blackjack-row-3\">\n");
      out.write("                <table>\n");
      out.write("                    <tr>\n");
      out.write("                        <th>Wins</th>\n");
      out.write("                        <th>Losses</th>\n");
      out.write("                        <th>Draws</th>\n");
      out.write("                       \n");
      out.write("                    </tr>\n");
      out.write("                    <tr>\n");
      out.write("                        \n");
      out.write("                           <td><span id=\"wins\">0</span></td> \n");
      out.write("                           <td><span id=\"losses\">0</span></td>\n");
      out.write("                           <td><span id=\"draws\">0</span></td>\n");
      out.write("                    </tr>\n");
      out.write("                </table>\n");
      out.write("            </div>\n");
      out.write("        </div>\n");
      out.write("  \n");
      out.write("        <script src=\"js/age.js\"></script>\n");
      out.write("    </body>\n");
      out.write("</html>\n");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
