import $ from 'jquery';
import $entry from './entry';
import $login from './login';
import user from './user';
import $bye from './bye';
import $get from './get';
import $logout from './logout';
import intervalID from "./interval";

let $chatroom = $(

    `<div class="chat">
    <h1>Chat Room</h1>
    <h2> Write new messages </h2>
    <form>
    <textarea name="message" placeholder="Write your message."></textarea>
    <input class="sendMessage" type="button" name="send" value="Send">
  </form>
    <div class="previousChat">
    <h2> Previously sent messages.
    <ul class ='sent'>
    </ul>
    <button class="logout" type="button" name="button">Log-Out</button>
</div>`
);

// get the messages from postman to be shown in the chatroom


// Now when I click add, it needs to 1. Go into the previously sent texts
$chatroom.find('.logout').on('click', function (){
  window.clearInterval(intervalID.get);
});
$chatroom.find('.sendMessage').on('click', function() {

    //     // i need to get the inner text of the text area element

    let innerText = $('textarea').val();
    // i need to have it attach to the listItems area
    let deleteButton = $("<button>Delete</button>");
    let newChatItems = $("<div>" + user.username + ' ' + innerText + "</div>");
    $('.sent').append(newChatItems);
    newChatItems.append(deleteButton);

    $.ajax({
        url: 'http://tiny-za-server.herokuapp.com/collections/CoopDay-22/',
        type: 'POST',
        data: JSON.stringify({
            "username": user.username,
            "timestamp": new Date(),
            "message": innerText
        }),
        contentType: 'application/json',
        dataType: 'json',
        success: function(response) {
            console.log(response);
            deleteButton.on('click', function() {
                newChatItems.remove();
                $bye(response._id);
            });

        }
    });
});


// and 2. get sent to the server





export default $chatroom;
