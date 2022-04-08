$(function(){
    $("input").on("click",function(){
       var numberOfListItem = $("li").length;
       var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        // $("img").attr("src",`image/${randomChildNumber}.jpg`);
        debugger;
        if(randomChildNumber==0){
            $("#0").attr("src", `image/0.jpg`);
            $("#1").attr("src", `image/11.jpg`);
            $("#2").attr("src", `image/22.jpg`);
        }
        else if(randomChildNumber==1){
            $("#0").attr("src", `image/00.jpg`);
            $("#1").attr("src",`image/1.jpg`);
            $("#2").attr("src", `image/22.jpg`);
        }
        else if(randomChildNumber==2){
            $("#0").attr("src", `image/00.jpg`);
            $("#1").attr("src", `image/11.jpg`);
            $("#2").attr("src", `image/2.jpg`);
        }
        //console.log(randomChildNumber);
        //debugger;
    });
});