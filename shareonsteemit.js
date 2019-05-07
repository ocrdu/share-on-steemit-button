function pasteParams() {
  if (location.search.length == 0) {return false;};
  document.getElementById("title").setAttribute("value", decodeURI(location.search.slice(0).split("&")[0].split("=")[1]));
  document.getElementById("article").innerHTML = decodeURI(location.search.slice(0).split("&")[1].split("=")[1]);
}

function check() {
  document.getElementById("account").value = document.getElementById("account").value.toLowerCase();
  var account = document.getElementById("account").value;
  var key = document.getElementById("key").value;
  var title = document.getElementById("title").value;
  var article = document.getElementById("article").innerHTML;
  if (title.length>0 && article.length>0 &&
      account.length > 2  &&
      account.length < 17  &&
	  /^[a-z0-9\-\.]+$/.test(account)  &&
	  /^[a-z]$/.test(account.charAt(0))  &&
	  /^[a-z0-9]$/.test(account.charAt(account.length-1))  &&
      key.length == 51 && 
	  key.charAt(0) == "5" && 
	  /^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/.test(key) && 
	  document.getElementById("title").value.length > 0 && 
	  document.getElementById("article").value.length > 0) {
    document.getElementById("postbutton").disabled = false;
	document.getElementById("postbutton").style.backgroundColor = "#06D6A9";
	document.getElementById("postbutton").style.color = "black";
	document.getElementById("postbutton").style.borderColor = "#5FBA7D";
	document.getElementById("postbutton").style.cursor = "pointer";
  } else {
    document.getElementById("postbutton").disabled = true;
    document.getElementById("postbutton").style.backgroundColor = "#CCCCCC";
	document.getElementById("postbutton").style.color = "#AAAAAA";
	document.getElementById("postbutton").style.borderColor = "";
	document.getElementById("postbutton").style.cursor = "default";
  }
}

function postArticle() {
  var username = document.getElementById("account").value;
  var postingkey = document.getElementById("key").value;
  var category = "donations";
  var title = document.getElementById("title").value;
  var permlink = new Date().toISOString().replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
  permlink += "-how-to-donate-to-ocrdu";
  var body = document.getElementById("article").value;
  steem.broadcast.comment(postingkey, "", category, username, permlink, title, body, {tags: [category, "ocrdu", "donationpage", "", ""]},
  function (err, result) {
    if (err) {
      alert('Something went wrong: ' + err);
    } else {
      alert('Posted!');
	  window.close();
    }
  });
}