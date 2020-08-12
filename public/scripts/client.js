/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

console.log('Load!');

// XSS injection escape function
const escape = function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// Creates array of tweet objects
// leverage createTweetElement(tweet)
// appends each to #tweets-container
const renderTweets = (tweets) => {
  tweets.forEach((tweet) => {
    createTweetElement(tweet);
    $('#tweets-container').append(createTweetElement(tweet));
  });
};

// Returns a tweet(article)
const createTweetElement = (tweetObj) => {
  const date = Date(tweetObj.created_at).toString();
  let $tweet = `
  <article class="tweet">
  <header>
    <div>
      <img src="${tweetObj.user.avatars}" alt="Avatar">
      <h3 class="userName">${tweetObj.user.name}</h3>
    </div>
    <span class="userId">${tweetObj.user.handle}</span>
  </header>
  <p>${escape(tweetObj.content.text)}</p>
  <footer>
    <p>${date}</p>
    <div class="tweet-buttons">
      <fav-icon name="flag">fl</ion-icon>
      <fav-icon name="repeat">rt</ion-icon>
      <fav-icon name="heart">lv</ion-icon>
    </div>
  </footer>
</article>
  `;
  return $tweet;
};

// Async events happen
$(document).ready(function() {

  // Submit tweet form using AJAX. Form is serialized
  $('#tweet-form').submit(function(event) {
    event.preventDefault();
    const target = $(this).closest(".new-tweet").find('.counter');
    const userInput = $(this).find('textarea').val();

    // If there is no input of if input is only spaces
    if (userInput === "" || !userInput.trim()) {
      $('#ValidateError').hide();
      $('#ValidateError').text("⚠️ Cannot post an empty text! ⚠️");
      $("#ValidateError").slideDown(200);
      return null;
    }

    // If input is over 140 characters
    if (userInput.length > 140) {
      $('#ValidateError').hide();
      $('#ValidateError').text("⚠️ Over character limit! Trim your tweet a little! ⚠️");
      $("#ValidateError").slideDown(200);
      return null;
    }
    console.log('Pulling tweet!')
    const serialized = $(this).serialize();
    $.ajax('/tweets', {method: 'POST', data: serialized})
      .then(function(result) {
        $('#tweets-container').empty();
        target.text(140);
        $('.new-tweet').hide();
        loadTweets();
        $('#ValidateError').css('display', 'none');
        $('#tweet-form').trigger("reset");
      });
  });

  //Load tweets from database
  const loadTweets = () => {
    $.ajax({
      url: '/tweets',
      method: 'GET'
    }).then((response) => {
      renderTweets(response.reverse());
    });
  };

  // Toggles new tweet form
  $('.form-toggle').on('click', () => {
      
    if ($('.new-tweet').css('display') === 'none') {
        $('.new-tweet').slideDown('slow');
        $('.new-tweet textarea').focus();
    } else {
        $('.new-tweet').slideUp('slow');
    }

  });

  loadTweets();

});