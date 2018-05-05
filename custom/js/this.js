



$(document).ready(function () {

    var xForm = document.getElementById("theForm");
    // xForm.hidden = true;

    var $hideToggle = $("#hideToggle");
    var $theForm = $(".theForm");
    $hideToggle.on("click", function () {
        $theForm.slideToggle(1000);
    });

    //TODO: 測試 jquery
    var xForm2 = $("#theForm");
    // xForm2.hide(); 

    var xBtn = $("#xBtn");
    // xBtn.click(function(){
    //     alert("hello, click");
    // });


    $("#xBtn").click(function (e) {
        e.preventDefault();
        alert("hello, jq snippet!!");
    });


});



