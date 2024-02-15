

function conmuta() {
    if(document.getElementById("Chat_user").style.visibility=='hidden'  ){
        document.getElementById("Chat_user").style.visibility='visible';
        document.getElementById("ChatGPT").style.visibility='hidden';
    }  else {
     
        document.getElementById("ChatGPT").style.visibility='visible';
        document.getElementById("Chat_user").style.visibility='hidden';

    }


}
  
 
