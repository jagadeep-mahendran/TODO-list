 $("ul").on("click","li",function(){

   $(this).toggleClass("strick");
 });

 $("ul").on("click","span",function(event){
   $(this).parent().fadeOut(500,function(){
     $(this).remove();
   });
   event.stopProgation;
 });

 $("input[type='text']").keypress(function(event){
   var a=$(this).val();
    if(event.which===13&&a.length>=1){

    $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+a+"</li>");
     $(this).val("");
 }
});
$("Input[type='text']").fadeOut();
$(".fa-plus").click(function(){
  $("Input[type='text']").fadeToggle();
});
