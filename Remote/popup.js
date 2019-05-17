var path = document.currentScript.src;
path = path.substr(0, path.lastIndexOf("\/")) + "/";

document.getElementById("steemit").innerHTML += "<img src=\"" + path + "steemit.png\" alt=\"Steemit\" style=\"outline:none;\" onmouseover=\"this.src='" + path + "steemit_d.png'; style='cursor:pointer;'\" onmouseout=\"this.src='" + path + "steemit.png'; style='cursor:default;'\" onclick=\"openPopup()\">";

function openPopup() {
  if (location.protocol == "https:") {
    var popup = window.open("", "popupwindow", "toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=700, height=430, top=" + (screen.height-430)/4 + ", left=" + (screen.width-700)/2);
    
    popup.focus();
    
    var html="<!DOCTYPE html><html lang=\"en\" id=\"all\"><head><title>Share page on Steemit</title><meta charset=\"UTF-8\"><style>h1,h2,h3,h4,h5,h6 {font-family: Arial,Helvetica,sans-serif;}</style><script src=\"https://cdn.steemjs.com/lib/latest/steem.min.js\"></script><script src=\"" + path + "showdown.min.js\"></script> <script src=\"" + path + "shareonsteemit.js\"></script></head><body style=\"background-color:&num;B2FFEE\" onload=\"pasteParams(); resizeWindow();\"><form><table><tr><td style=\"font-family: Arial,Helvetica,sans-serif; color:black;\">Steemit username:</td><td><input type=\"text\" style=\"border-right-style:none; width:13px; background-color:white; padding-left:2px;\" size=\"1\" value=\"@\" readonly disabled><input type=\"text\" id=\"account\" maxlength=\"16\" placeholder=\"Username\" onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='Username'\" oninput=\"check()\" style=\"border-left-style:none; padding-left:0px; outline:none;\"><span style=\"font-family: Arial,Helvetica,sans-serif; font-style:italic; font-size:80%; color:black; float:right;\"><span style=\"color:&num;02765D; vertical-align:5px;\">New to Steemit?&nbsp;</span><a href=\"https://signup.steemit.com/\" style=\"outline:none;\" target=\"_blank\" onclick=\"window.close()\"><img src=\"" + path + "signup.png\" alt=\"Sign up\" title=\"Sign up to Steemit\"></a></span></td></tr><tr><td style=\"font-family: Arial,Helvetica,sans-serif; color:black;\">Steemit posting key:</td><td><input type=\"password\" autocomplete=\"off\" size=\"80\" maxlength=\"70\" id=\"key\" style=\"padding-left:2px; outline:none;\" placeholder=\"Private Posting Key\" onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='Private Posting Key'\" oninput=\"check()\"></td></tr></table><br><hr><br><div style=\"text-align:center;\"><input type=\"text\" id=\"title\" placeholder=\"Title\" size=\"80\" maxlength=\"150\" value=\"\" onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='Title'\" style=\"font-weight:bold; text-align:center; outline:none;\" oninput=\"check()\"><br><br><textarea id=\"article\" rows=\"10\" cols=\"80\" oninput=\"check();preview();\" style=\"outline:none;\"></textarea><br><br><input id=\"postbutton\" type=\"button\" style=\"font-weight:bold; background-color:&num;CCCCCC; color:&num;AAAAAA; padding:7px 16px; text-align:center; outline:none; border-radius:16px;\" value=\"Post on Steemit\" onClick=\"postArticle()\" disabled></div><input type=\"hidden\" id=\"tag0\" value=\"\"><input type=\"hidden\" id=\"tag1\" value=\"\"><input type=\"hidden\" id=\"tag2\" value=\"\"><input type=\"hidden\" id=\"tag3\" value=\"\"><input type=\"hidden\" id=\"tag4\" value=\"\"></form><div id=\"preview\"></div></body></html>"
    
    popup.document.open();
    popup.document.write(html);
    popup.document.close();
  } else {
    alert("This button only works on a secure connection (https) to avoid compromising your private posting key.");
  }
}