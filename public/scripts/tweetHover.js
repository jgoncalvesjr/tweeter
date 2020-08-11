$('.tweet').on('mouseenter', function() {
  $(this).css('box-shadow', '8px 8px #829bed');
  $('h3.userName').css('font-weight', '400');
  $('span.userId').css('opacity', '0.66');
  $('fav-icon').css('font-weight', '400');
  $('p').css('font-weight', '400');
});

$('.tweet').on('mouseleave', function() {
  $(this).css('box-shadow', 'none');
  $('h3.userName').css('font-weight', '300');
  $('span.userId').css('opacity', '0');
  $('fav-icon').css('font-weight', '300');
  $('p').css('font-weight', '300');
});