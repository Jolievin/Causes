$(document).ready(function() {

    $('#explore-modal').on('show.bs.modal', function(evt){
        var $button = $(evt.relatedTarget);
        var $cause = $button.closest('.thumbnail');

        var causeName = $cause.find('h3').text();
        var causeImg = $cause.find('img').attr('src');

        var $modal = $(this);
        $modal.find('.modal-title').text(causeName);
        $modal.find('.modal-body img').attr('src', causeImg);
    });


});