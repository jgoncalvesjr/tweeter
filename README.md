# Tweeter Project

### Version 1.0.0

Tweeter is a simple, single-page Twitter clone. You can create and explore messages created from a dummy database which automatically feeds user profiles for each message.

# Final product

Tweeter is designed to perform in mobile devices, tablets and desktops. Its layout can adapt responsively depending on the device you may be using.

![Mobile presentation](https://github.com/jgoncalvesjr/tweeter/blob/master/docs/tweeter-mobile.png) ![Tablet presentation](https://github.com/jgoncalvesjr/tweeter/blob/master/docs/tweeter-tablet.png)

![Desktop presentation](https://github.com/jgoncalvesjr/tweeter/blob/master/docs/tweeter-desktop.png)

Notice that whenever you hover your mouse over a tweet (desktop) or touch it (mobile or tablet), this tweet will be highlighted.

In the top right corner of the navigation bar - which is fixed - you may click at **Write a new tweet**, and start writing your message, limited to 140 characters. After finishing, you may click the **TWEET** button to submit your new tweet. 

The page will be updated with your new tweet at the top. A counter at the bottom right of the tweet form will tell you how many characters you have left, and will become red if you type more than 140 characters, displaying how many characters you are over limit. 

![New tweet post](https://github.com/jgoncalvesjr/tweeter/blob/master/docs/new-tweet.png) ![After tweet post](https://github.com/jgoncalvesjr/tweeter/blob/master/docs/after-tweet.png)

Please be mindful that you cannot post a tweet with no text or beyond 140 characters. If you try either of these, the app will send a brief warning message in red!

![Null tweet error](https://github.com/jgoncalvesjr/tweeter/blob/master/docs/tweet-error1.png) ![Excessive tweet error](https://github.com/jgoncalvesjr/tweeter/blob/master/docs/tweet-error2.png)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Technologies Used

- HTML5
- CSS
- JS
- jQuery
- AJAX
- MomentJS
- Google Fonts
- Font Awesome

## Dependencies

- Express
- Node 5.10.x or above
- Nodemon
- MD5
- Chance
- Express
- body-parser
