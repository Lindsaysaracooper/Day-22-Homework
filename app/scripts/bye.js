import $ from 'jquery';
import $chatroom from './chatroom';
import $login from './login';
import $user from './user';


let $bye = function bye(byeId) {
    $.ajax({
        url: 'http://tiny-za-server.herokuapp.com/collections/CoopDay-22/' + byeId,
        type: 'DELETE',
        dataType: 'json',
        success: function(item) {},
        error: function(errorMsg) {
          console.log('nothing was deleted');
        }
    });
};


export default $bye;
