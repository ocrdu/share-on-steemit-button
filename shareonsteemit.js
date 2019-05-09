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
  var article = document.getElementById("article").value;
  if (title.length>0 && article.length>0 &&
      account.length > 2  &&
      account.length < 17  &&
	  /^[a-z0-9\-\.]+$/.test(account)  &&
	  /^[a-z]$/.test(account.charAt(0))  &&
	  /^[a-z0-9]$/.test(account.charAt(account.length-1))  &&
      key.length == 51 && 
	  key.charAt(0) == "5" && 
	  /^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/.test(key) && 
	  title.length > 0 && 
	  article.length > 0) {
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
  var category = "sharedonsteemit"; // First tag hardcoded here
  var title = document.getElementById("title").value;
  var uniquestring = new Date().toISOString().replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
  var permlink = slugify(uniquestring + "-" + title + "-shared on steemit");
  var body = document.getElementById("article").value;
  steem.broadcast.comment(postingkey, "", category, username, permlink, title, body, {tags: [category, "ocrdu", "donate", "", ""]}, // Other tags hardcoded here
  function (err, result) {
    if (err) {
      alert('Something went wrong: ' + err);
    } else {
      alert('Posted!');
	  window.close();
    }
  });
}

function slugify(string) {
  const a = 'æąàáäâãåăæčćçðđęèéëêǵḧìíïîłḿńǹñòóöôœøṕŕßšśșþțùúüûǘẃẍÿýžżź·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeghiiiilmnnnooooooprssssttuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')
  string = transliterateCyrillic(string);
  string = transliterateGreek(string);
  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with ‘and’
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

function transliterateGreek(string){
  var a = {"Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"I","Θ":"Th","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"X","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"Ch","Ψ":"Ps","Ω":"o","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"i","θ":"th","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"x","ο":"o","π":"p","ρ":"r","σ":"s","ς":"s","τ":"t","υ":"y","φ":"f","χ":"ch","ψ":"ps","ω":"o","Ά":"Á","Έ":"É","Ή":"Í","Ί":"Í","Ό":"Ó","Ύ":"Ý","Ώ":"Ó","ά":"á","έ":"é","ή":"í","ί":"í","ό":"ó","ύ":"ý","ώ":"ó","Ϊ":"Ï","Ϋ":"Ÿ","ϊ":"ï","ϋ":"ÿ","ΐ":"ï","ΰ":"ÿ"};
  return string.split('').map(function (char) { 
    return a[char] || char; 
  }).join("");
}

function transliterateCyrillic(string){
  var a = {"Ё":"Yo","Й":"I","Ц":"Ts","У":"U","К":"K","Е":"E","Н":"N","Г":"G","Ш":"Sh","Щ":"Sch","З":"Z","Х":"H","Ъ":"'","ё":"yo","й":"i","ц":"ts","у":"u","к":"k","е":"e","н":"n","г":"g","ш":"sh","щ":"sch","з":"z","х":"h","ъ":"'","Ф":"F","Ы":"I","В":"V","А":"a","П":"P","Р":"R","О":"O","Л":"L","Д":"D","Ж":"Zh","Э":"E","ф":"f","ы":"i","в":"v","а":"a","п":"p","р":"r","о":"o","л":"l","д":"d","ж":"zh","э":"e","Я":"Ya","Ч":"Ch","С":"S","М":"M","И":"I","Т":"T","Ь":"'","Б":"B","Ю":"Yu","я":"ya","ч":"ch","с":"s","м":"m","и":"i","т":"t","ь":"'","б":"b","ю":"yu"};
  return string.split('').map(function (char) { 
    return a[char] || char; 
  }).join("");
}