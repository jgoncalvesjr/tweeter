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

// Creates array of tweet objects collected by createTweetElement(tweet)
// appends each to #tweets-container in reverse order
const renderTweets = (tweets) => {
  tweets.forEach((tweet) => {
    createTweetElement(tweet);
    $('#tweets-container').prepend(createTweetElement(tweet));
  });
};

// Returns new a tweet(article)
const createTweetElement = (tweetData) => {
  const date = moment(tweetData.created_at).fromNow();
  const $tweet = `
  <article class="tweet">
    <header>
      <div>
        <img src="${tweetData.user.avatars}" alt="Avatar">
        <h3 class="userName">${tweetData.user.name}</h3>
      </div>
      <span class="userId">${tweetData.user.handle}</span>
    </header>
      <p>${escape(tweetData.content.text)}</p>
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

// Loads tweets from database
const loadTweets = () => {
<<<<<<< HEAD
    $.ajax({
      url: '/tweets',
      method: 'GET'
    }).then((response) => {
      renderTweets(response);
    });
=======
  $.ajax({
    url: '/tweets',
    method: 'GET'
  }).then((response) => {
    renderTweets(response);
  });
>>>>>>> 0ec1c8eb8f6519118d62c4f6d68d90c9a38c0357
};

$(document).ready(function() {

  // Loads first tweet batch
  loadTweets();

  // Submit tweet form using AJAX. Form is serialized
  // Tweet is validated, an empty tweet or over 140 characters will trigger warning
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

    // Clears forms, submits new tweet to database and loads page with updated tweets
    $('#tweets-container').empty();
    target.text(140);
    $('.new-tweet').hide();
    $('#validateTweet').css('display', 'none');
    $('#tweet-form').trigger("reset");
    $.ajax('/tweets', {
<<<<<<< HEAD
      method: 'POST', 
=======
      method: 'POST',
>>>>>>> 0ec1c8eb8f6519118d62c4f6d68d90c9a38c0357
      data: serialized
    }).then(function(result) {
      loadTweets();
    });
  });
});