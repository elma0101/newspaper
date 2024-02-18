

function menu(){
    if(document.getElementById("hidden_menu").style.display == "none")
     {
        
        document.getElementById("hidden_menu").style.display = "block";
        document.getElementsById("icon_menu").style.display = "none";
     } 
    else
    {
        document.getElementById("hidden_menu").style.display = "none";
        document.getElementsById("icon_menu").style.display = "block";
    }
      
}