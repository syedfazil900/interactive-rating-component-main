
var radioValue
$('button').click(function(){
    const card1 = $('.thank-you-card')
    const card2 = $('.rating-card')
    card1.removeClass('hidden')
    card2.addClass('hidden')
})  
$(':radio').click(function(){
    radioValue = $("input[name='rating']:checked").val();
    $('#rating-text').text($("#rating-text").text().replace("4", radioValue));
})

