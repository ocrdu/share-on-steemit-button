var path = document.currentScript.src;
path = path.substr(0, path.lastIndexOf("\/")) + "/";

document.getElementById("steemit").innerHTML += "<img src=\"" + path + "steemit.png\" alt=\"Steemit\" style=\"outline:none;\" onmouseover=\"this.src='" + path + "steemit_d.png'; style='cursor:pointer;'\" onmouseout=\"this.src='" + path + "steemit.png'; style='cursor:default;'\" onclick=\"openPopup()\">";

function openPopup() {
  var popup = window.open(path + "popup.html", "popupwindow", "toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=700, height=430, top=" + (screen.height-430)/4 + ", left=" + (screen.width-700)/2);
}