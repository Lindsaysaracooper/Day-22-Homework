import $ from 'jquery';
import user from './user';
import $chatroom from './chatroom';
import $bye from './bye';
import intervalID from "./interval";

let $get = function pageOpen() {
    // $('.sent').empty();
    console.log("this is two seconds");
    $.ajax({
        url: 'http://tiny-za-server.herokuapp.com/collections/CoopDay-22',
        type: 'get',
        dataType: 'json',
        success: function(message) {
          $('.sent').empty();
            message.forEach(function(item, i, arr) {
                let deleteButton = $("<button>Delete</button>");
                let individualMessage = $("<div>" + item.username + ' ' + item.message + "</div>");
                $('.sent').append(individualMessage);

                // create a if/else where the delete button shows only when the user is logged in
                if (item.username === user.username) {
                    individualMessage.append(deleteButton);
                    deleteButton.on('click', function() {
                        individualMessage.remove();
                        $bye(item._id);

                    });
                }

// Refresh the page every 2 seconds to make sure i am getting new messages


            });
        }


    });
};



export default $get;
