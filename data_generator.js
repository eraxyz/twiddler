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
            $user.text('@' + tweet.user);
            $message.text(tweet.message +'\n'+tweet.created_at.toDateString() + ' ' + tweet.created_at.toLocaleTimeString()) ;
            $user.appendTo($tweet);
            $message.appendTo($tweet);
            $tweet.appendTo($body);
            index -= 1;
          }

          $('.name').click(function(){
            $('.user-tweets-section').html('');

            if($(this).hasClass('shawndrost')){
              $('.user-tweets-section').append('<h3>@shawndrost</h3>')
              for (var obj of streams.users.shawndrost){
                $('.user-tweets-section').append('<p>' + obj.message + ' ' + obj.created_at.toDateString() + ' ' + obj.created_at.toLocaleTimeString() + '</p>')
              }//selector = certain name, return tweets from person)
            }

             else if($(this).hasClass('sharksforcheap')){
              $('.user-tweets-section').append('<h3>@sharksforcheap</h3>')
              for (var obj of streams.users.sharksforcheap){
                $('.user-tweets-section').append('<p>' + obj.message + ' ' + obj.created_at.toDateString() + ' ' + obj.created_at.toLocaleTimeString() + '</p>')
              }//selector = certain name, return tweets from person)
            }

            else if($(this).hasClass('mracus')){
              $('.user-tweets-section').append('<h3>@mracus</h3>')
              for (var obj of streams.users.mracus){
                $('.user-tweets-section').append('<p>' + obj.message + ' ' + obj.created_at.toDateString() + ' ' + obj.created_at.toLocaleTimeString() + '</p>')
              }//selector = certain name, return tweets from person)
            }

            else if($(this).hasClass('douglascalhoun')){
              $('.user-tweets-section').append('<h3>@douglascalhoun</h3>')
              for (var obj of streams.users.douglascalhoun){
                $('.user-tweets-section').append('<p>' + obj.message + ' ' + obj.created_at.toDateString() + ' ' + obj.created_at.toLocaleTimeString() + '</p>')
              }//selector = certain name, return tweets from person)
            }


          })




        })








// set up data structures
window.streams = {};
streams.home = [];
streams.users = {};
streams.users.shawndrost = [];
streams.users.sharksforcheap = [];
streams.users.mracus = [];
streams.users.douglascalhoun = [];
window.users = Object.keys(streams.users);

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
  addTweet(tweet);
};
});
