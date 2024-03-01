$(document).ready ( function () {
    $('input[type="checkbox"]').on("change", function() {
        const checked_dict= {}
        if ($(this).prop('checked')) {
            checked_dict[$(this).attr('data-id')] = $(this).attr('data-name') 
        } else if (!$(this).prop('checked')) {
            delete checked_dict[$(this).attr('data-id')];
        }
        if (checked_dict.length === 0) {
            $('.amenities h4').html('&nbsp;')
        }else {
            $('.amenities h4').text(checked_dict.join(', '))
        }
    })
    $.ajax({
        url: 'http://0.0.0.0:5001/api/v1/status/',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            if (response.status === 'OK') {
                $('DIV#api_status').addClass('available');
            } else {
                $('DIV#api_status').removeClass('available');
            }
        },
        error: function (error) {
            $('DIV#api_status').removeClass('available');
        }
    });
});



