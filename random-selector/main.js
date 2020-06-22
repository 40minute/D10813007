/*
window.onload=function(){
    //document.write("Hello javaScript!");
}
*/

$(document).ready(function(){
    //按按鈕有反應
    $("input").click(function(){
        //alert("Hi");
        let numberOfListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        // 0 ~ 1 * 3 => 0 ~ 3 => 0, 1, 2
        // 2.4 -> 2, 0.5 -> 0
        $("#random-result").text($("#choices li").eq(randomChildNumber).text());
        $("#random-pic").attr("src",images[randomChildNumber]);
    });
});