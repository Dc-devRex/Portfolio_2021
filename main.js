$(document).ready(function () {
    $(".menu-toggler").on("click", function () {
        $(this).toggleClass("open");
        $(".top-nav").toggleClass("open");
    })

    $(".top-nav ul li a").on("click", function() {
        $(this).toggleClass("open");
        $(".top-nav").toggleClass("open");
        $(".menu-toggler").toggleClass("open");
    })

    var date = new Date();

    document.getElementById("copyright-date").innerHTML = "&copy;" + date.getFullYear() + " David Candelaria";
});
