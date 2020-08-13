/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Escape function from XSS attacks
const escape = function(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// Creates array of tweet objects
// leverage createTweetElement(tweet)
// appends each to #tweets-container in reverse order
const renderTweets = (tweets) => {
  tweets.forEach((tweet) => {
    createTweetElement(tweet);
    $('#tweets-container').prepend(createTweetElement(tweet));
  });
};

// Returns new a tweet(article)
const createTweetElement = (tweetObj) => {
  const date = moment(tweetObj.created_at).fromNow();
  const $tweet = `
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
      <i class="fab fa-font-awesome-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </footer>
</article>
  `;
  return $tweet;
};

$(document).ready(function() {

  // Submit tweet form using AJAX. Form is serialized
  // Tweet is validated, an empty tweet or over 140 characters
  // will trigger warnings
  $('#tweet-form').submit(function(event) {
    event.preventDefault();
    const serialized = $(this).serialize();
    const target = $(this).closest(".new-tweet").find('.counter');
    const userInput = $(this).find('textarea').val();

    // If there is no input of if input is only spaces
    if (userInput === "" || !userInput.trim()) {
      $('#validateTweet').hide();
      $('#validateTweet').text("Cannot post an empty text!");
      $("#validateTweet").slideDown(200);
      return null;
    }

    // If input is over 140 characters
    if (userInput.length > 140) {
      $('#validateTweet').hide();
      $('#validateTweet').text("Over character limit! Trim your tweet a little!");
      $("#validateTweet").slideDown(200);
      return null;
    }

    $('#tweets-container').empty();
    target.text(140);
    $('.new-tweet').hide();
    $('#validateTweet').css('display', 'none');
    $('#tweet-form').trigger("reset");
    $.ajax('/tweets', {method: 'POST', data: serialized})
      .then(function(result) {

        loadTweets();

      });
  });

  // Load tweets from database
  const loadTweets = () => {
    $.ajax({
      url: '/tweets',
      method: 'GET'
    }).then((response) => {
      renderTweets(response);
    });
  };

  // Loads first tweet batch
  loadTweets();

});