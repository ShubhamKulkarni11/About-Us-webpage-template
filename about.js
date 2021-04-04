var profile=document.getElementById("#soham").onclick=profile1;
function profile1(){
    var n=document.getElementById("id").style.backgroundColor="red";
}
if(localStorage.getItem('cart') == null){
    var cart={};
}
else{
    cart=JSON.parse(localStorage.getItem(cart));
}
$(".cart").click(function(){

    console.log("clicked");
}
);
