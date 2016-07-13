import $ from 'jquery';
import intervalID from "./interval";
import $chatroom from './chatroom';
import user from './user';
import $get from './get';

let $login = (`
  <header>
  	<h1>Wanna Chat?</h1>
  	<p>
  		Please log in with your username:
  	</p>
  	<textarea class ="inputName" name="name" rows="1" cols="40"></textarea>
  	<button class = "enter" type="button" name="button">Enter</button>
  </header>
`);


function router(){
if (location.hash === '#login'){
  $('.wrapper').empty().append($login);
}

}
router ();


let $enter = $('.enter');


$enter.on('click', function() {
    user.username = $('.inputName').val();
    // you have to put this first because i empty it later in the equation
    // console.log($('.inputName').val());
    $(".wrapper").empty();
    $(".wrapper").append($chatroom);
    $get();
    intervalID.get = window.setInterval(function(){
      $get();
      console.log(intervalID);

    },2000);
});

export default $login;
