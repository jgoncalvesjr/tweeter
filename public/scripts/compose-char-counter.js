// Tracks character count in tweet text area. Turns red and displays negative value if over 140 characters
$(document).ready(() => {
  const counter = $('.counter')[0];
  const textarea = $('textarea');
  $(textarea).on('input', function() {
    let textCount = $(this).val();
    $(counter).text(140 - textCount.length)
    
    if (textCount.length > 140) {
      $(counter).toggleClass('counterRed', true);
    } else {
      $(counter).toggleClass('counterRed', false);
    }

  });
});