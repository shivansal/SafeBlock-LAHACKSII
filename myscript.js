var myVar = setInterval(getTotal, 1000);
var secondTimer = setInterval(detectText, 3000);


function getTotal(){
  changeUser();

if((document.domain).indexOf("youtube")!=-1)
  var total = document.getElementsByClassName("comment-renderer-text-content").length;

findComments(total);

}

function changeUser(){
  if(document.getElementsByClassName("spf-link branded-page-header-title-link yt-uix-sessionlink")[0]!=null){
    var name = document.getElementsByClassName("spf-link branded-page-header-title-link yt-uix-sessionlink")[0].innerHTML;
    if(name.indexOf("55")==-1)
    document.getElementsByClassName("spf-link branded-page-header-title-link yt-uix-sessionlink")[0].innerHTML = name + ":  55 Reports";
    document.getElementsByClassName("spf-link branded-page-header-title-link yt-uix-sessionlink")[0].style.color = "red";
    document.getElementsByClassName("spf-link branded-page-header-title-link yt-uix-sessionlink")[0].style.fontWeight = "light";
  }
}

function findComments(total){
  if((document.domain).indexOf("youtube")!=-1){
    for(var i = 0; i < total; i++){
      var caption =  document.getElementsByClassName("comment-renderer-text-content")[i].innerHTML;
      if(isBad(caption)){
        document.getElementsByClassName("comment-renderer-text-content")[i].innerHTML = "This comment was not safe so we blocked it!";
        document.getElementsByClassName("comment-renderer-text-content")[i].style.color = "black";
        document.getElementsByClassName("comment-renderer-text-content")[i].style.fontWeight = "bold";
        document.getElementsByClassName("comment-renderer")[i].style.backgroundColor = "#ffebee";
        document.getElementsByClassName("comment-renderer")[i].style.paddingLeft = "10px";
        document.getElementsByClassName("comment-renderer")[i].style.paddingTop = "10px";
        document.getElementsByClassName("comment-renderer")[i].style.paddingBottom = "10px";
        document.getElementsByClassName("comment-author-text g-hovercard yt-uix-sessionlink spf-link")[i].style.color = "red";

      }
    }
  }

}

function isBad(caption){
  var words = ["nigg", "chink", "redneck", "gypsy", "redskin", "fuck", "ass", "shit", "bastard", "cunt", "dick", "crap", "bitch", "whore", "slut", "hoe", "hell", "retard", "fag"];
  var wordsTwo = ["homo", "bitch", "slut", "hoe", "whore", "cunt", "kill", "hate"];

  var search = caption.toLowerCase();
  for(var z = 0; z < words.length; z++){
    if(search.indexOf(words[z])!=-1){
      return true;
    }
  }

  for(var z = 0; z < wordsTwo.length; z++){
    if(search.indexOf(wordsTwo[z])!=-1){
      return true;
    }
  }
  return false;
}

function detectText(){
  var takeText = document.getElementById("comment-simplebox-create-comment").innerHTML;
  if(takeText!=null){
    var firstIndex = takeText.indexOf("data-placeholder");
    var newword = takeText.substring(firstIndex);
    var parsed = newword.substring(newword.indexOf(">"),newword.indexOf("<"));
    console.log(parsed);
    if(isBad(parsed)){
      document.getElementsByClassName("comment-simplebox-text")[0].style.backgroundColor = "#ffebee";
      alert("You are using bad language, this is seen as hurtful, please remove it.");
      document.getElementsByClassName("yt-uix-button yt-uix-button-size-default yt-uix-button-primary yt-uix-button-empty comment-simplebox-submit yt-uix-sessionlink")[0].style.cursor = "none";

    }
    else{
      document.getElementsByClassName("comment-simplebox-text")[0].style.backgroundColor = "white";
      document.getElementsByClassName("yt-uix-button yt-uix-button-size-default yt-uix-button-primary yt-uix-button-empty comment-simplebox-submit yt-uix-sessionlink")[0].style.cursor = "auto";

    }
//comment-simplebox-create-commen
  }
}
