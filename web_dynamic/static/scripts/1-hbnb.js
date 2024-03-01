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
});