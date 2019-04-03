/*--- Hide search form section on load ---*/
$(function () {
    $('#search-page').removeClass('hidden');
});
/*--- When search begins ---*/
$('#startSearchButton').click(function () {
            //start search and form loads
            $('.start-section').hide();
            $('.search-page').show();
