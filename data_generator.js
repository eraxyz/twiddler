/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */


$(document).ready(function(){



   $('button.populate').click(function(){
          var $body = $('.tweet-container');
          $body.html('');

          var index = streams.home.length - 1;
          while(index >= 0){
            var tweet = streams.home[index];
            var $tweet = $('<div></div>');
            var $user = $('<button class="' + tweet.user + ' name"></button>');
            var $message = $('<div></div>');
            var $timestamp = $('<div class="timestamp"></div>')
            $user.text('@' + tweet.user);
            $message.text(tweet.message) ;
            //$timestamp.text(tweet.created_at.toDateString() + ' ' + tweet.created_at.toLocaleTimeString())
            $timestamp.text(moment(tweet.created_at.toDateString() + ' ' + tweet.created_at.toLocaleTimeString(), 'ddd MMM Do YYYY h:mm:ss a').fromNow())
            $user.appendTo($tweet);
            $message.appendTo($tweet);
            $timestamp.appendTo($tweet);
            $tweet.appendTo($body);
            index -= 1;
          }

          $('.name').click(function(){
            $('.user-tweets-section').html('');
            //console.log(event.target.classList[0])
            var className = event.target.classList[0]
            $('.user-tweets-section').append('<h3>'+'@'+className+'</h3')

            for (var obj of streams.users[className]){
              $('.user-tweets-section').append('<div class="usertweets">' + obj.message + '</div>');
              $('.user-tweets-section').append('<div class="timestamp">' + moment(obj.created_at.toDateString() + ' ' + obj.created_at.toLocaleTimeString(), 'ddd MMM Do YYYY h:mm:ss a').fromNow() + '</div>')
            }

          })

        })








// set up data structures
window.visitor = [];
window.streams = {};
streams.home = [];
streams.users = {};
streams.users.shawndrost = [];
streams.users.sharksforcheap = [];
streams.users.mracus = [];
streams.users.douglascalhoun = [];
window.users = Object.keys(streams.users);


$('.inputpopulate').click(function(){
  visitor = $('.inputusername').val();
  streams.users[visitor] = [];
  var inputTweet = $('.inputtweet').val();
  writeTweet(inputTweet);

$( "button.populate" ).trigger( "click" );

})


// utility function for adding tweets to our data structures
var addTweet = function(newTweet){
  var username = newTweet.user;
  streams.users[username].push(newTweet);
  streams.home.push(newTweet);
};

// utility function
var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// random tweet generator
var opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
var verbs = ['downloaded', 'interfaced', 'deployed', 'developed', 'built', 'invented', 'experienced', 'navigated', 'aided', 'enjoyed', 'engineered', 'installed', 'debugged', 'delegated', 'automated', 'formulated', 'systematized', 'overhauled', 'computed'];
var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
var tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];

var randomMessage = function(){
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
};

// generate random tweets on a random schedule
var generateRandomTweet = function(){
  var tweet = {};
  tweet.user = randomElement(users);
  tweet.message = randomMessage();
  tweet.created_at = new Date();
  addTweet(tweet);
};

for(var i = 0; i < 10; i++){
  generateRandomTweet();
}

var scheduleNextTweet = function(){
  generateRandomTweet();
  setTimeout(scheduleNextTweet, Math.random() * 1500);
};
scheduleNextTweet();

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)
var writeTweet = function(message){
  if(!visitor){
    throw new Error('set the global visitor property!');
  }
  var tweet = {};
  tweet.user = visitor;
  tweet.message = message;
  tweet.created_at = new Date();
  addTweet(tweet);
};
});
