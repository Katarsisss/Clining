$(".video").click(function () {
    var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-video").replace("watch?v=", "embed/");
        videoSRCauto = videoSRC + "";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
        $(theModal + ' iframe').attr('src', videoSRC);
    });
});