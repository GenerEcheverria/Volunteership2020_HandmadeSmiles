$(".imagen").click(function(e){
    var enlaceImagen = e.target.src;
    var data = $(this).attr("data");
    var lightbox = '<div class="lightbox">'+
                        '<img src="' + enlaceImagen + '" alt="Cuadro" id="zoom_mw" data-zoom-image="'+ data+'">'+
                        '<div class="btn-close">x</div>'+
                    '</div>';
    $("body").append(lightbox)
    $("#zoom_mw").elevateZoom({
        scrollZoom : true,
        cursor: "crosshair",
        zoomWindowOffetx: 15

    });
    $(".btn-close").click(function(){
        $(".lightbox").remove();
        $(".zoomContainer").remove();
        $(".zoomLens").remove();
        $(".zoomWindowContainer").remove();
    })
})