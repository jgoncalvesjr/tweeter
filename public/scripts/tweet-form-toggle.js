// Toggles and shows new tweet form
$('.form-toggle').on('click', () => {
      
  if ($('.new-tweet').css('display') === 'none') {
    $('.new-tweet').slideDown('slow');
    $('.new-tweet textarea').focus();
  } else {
    $('.new-tweet').slideUp('slow');
  }

});