var myVar = setInterval(getTotal, 1000);
var secondTimer = setInterval(detectText, 3000);


function getTotal(){
if((document.domain).indexOf("youtube")!=-1)
  var total = document.getElementsByClassName("comment-renderer-text-content").length;
if((document.domain).indexOf("twitter")!=-1)
  var total = document.getElementsByClassName("tweet-text").length;
  console.log(total);
findComments(total);
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
      }
    }
  }
    /*for(var i = 0; i < total; i++){
      var caption =  document.getElementsByClassName("tweet-text")[i].innerHTML;
      caption = caption.substring(0, caption.indexOf("<"));
      if(isBad(caption)){
        document.getElementsByClassName("TweetTextSize js-tweet-text tweet-text")[i].innerHTML = "This comment is not safe so we blocked it!";
        document.getElementsByClassName("TweetTextSize js-tweet-text tweet-text")[i].style.fontWeight = "bold";
        document.getElementsByClassName("js-stream-item stream-item stream-item")[i+1].style.backgroundColor = "#ffcdd2";
        //console.log(document.getElementsByClassName("tweet-text")[i].innerHTML);
      }*/


      if(isBad(caption)){
       document.getElementsByClassName("tweet-text")[i].style.color = "black";
       document.getElementsByClassName("tweet-text")[i].style.fontWeight = "bold";
        document.getElementsByClassName("comment-renderer")[i].style.backgroundColor = "#ffebee";
        document.getElementsByClassName("comment-renderer")[i].style.paddingLeft = "10px";
        document.getElementsByClassName("comment-renderer")[i].style.paddingTop = "10px";
        document.getElementsByClassName("comment-renderer")[i].style.paddingBottom = "10px";
      }
    }
}

function isBad(caption){
  var words = ["nigg", "chink", "redneck", "gypsy", "redskin", "fuck", "ass", "shit", "bastard", "cunt", "dick", "crap", "bitch", "whore", "slut", "hoe", "hell", "retard", "fag"];
  var wordsTwo = ["homo", "bitch", "slut", "hoe", "whore", "cunt", "kill"];

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
  /*var takeText = document.getElementById("tweet-box-global").innerHTML;
  if(isBad(takeText)){
    document.getElementById("tweet-box-global").style.backgroundColor = "#ffcdd2";
    alert("You are using profanity, this is seen as hurtful, please remove it.");
    }
  else{
    document.getElementById("tweet-box-global").style.backgroundColor = "white";
  }*/
}
