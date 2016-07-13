import $ from 'jquery';
import $chatroom from './chatroom';
import $login from './login';
import user from './user';
import $get from './get';

console.log($login);

let $entry = '';

// function router() {
//     if (location.hash === '#chatroom') {
//         $(container).empty().append()($chatroom);
//     }
// }

// $(window).on('hashchange', router);
// router();

// let user = {
//     username: ''
// };
//
// let $pageTwo = $(`
//   <div class="chat">
//     <h1>Chat Room</h1>
//     <h2> Write new messages </h2>
//     <ul class= 'newUl'>
//     <textarea></textarea>
//     </ul>
//     <button class='add'>Add</button>
//     </div>
//     <div class="previousChat">
//     <h2> Previously sent messages.
//     <ul class ='sent'>
//     </ul>
// </div>
//
// `);
//
//
// // this function delete sent messages.
// function bye(byeId) {
//     $.ajax({
//         url: 'http://tiny-za-server.herokuapp.com/collections/CoopDay-21/' + byeId,
//         type: 'DELETE',
//         dataType: 'json',
//         success: function(item) {}
//     });
// }
//

// export default $entry;
