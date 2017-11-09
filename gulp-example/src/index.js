"use strict";
(function () {
    var $usersList = $('#users-list');
    var users = [
        { id: 1, username: 'Jan' },
        { id: 2, username: 'Piotr' },
        { id: 3, username: 'Adam' },
        { id: 4, username: 'Maria' },
        { id: 5, username: 'Kasia' }
    ];
    var getUsers = function () {
        $usersList.empty();
        users.map(function (u) { return UsersBuilder.$buildUser(u).appendTo($usersList); });
    };
    var addUser = function (event) {
        event.preventDefault();
        var $newItem = $('#username');
        var username = $newItem.val();
        if (!username) {
            return;
        }
        $newItem.val('');
        users.push({
            id: Math.max.apply(Math, users.map(function (u) { return u.id; }).concat([0])) + 1,
            username: username
        });
        toastr.success('Item created', 'Success!');
        getUsers();
    };
    var deleteUser = function (event) {
        event.preventDefault();
        var id = $(event.target.parentElement).data('id');
        users = users.filter(function (u) { return u.id != id; });
        toastr.success('Item deleted', 'Success!');
        getUsers();
    };
    var updateUser = function (event) {
        event.preventDefault();
        var $userRow = $(event.target.parentElement);
        var id = $userRow.data('id');
        var user = users.find(function (u) { return u.id == id; });
        if (!user) {
            return;
        }
        var useItOnSuccess = function () { return $userRow.find('.edit-user-button, .delete-user-button').show(); };
        var username = $userRow.find('.username').val();
        user.username = username;
        toastr.success('Item updated', 'Success!');
        getUsers();
    };
    var editUser = function (event) {
        event.preventDefault();
        var $userRow = $(event.target.parentElement);
        var $userName = $userRow.find('.username');
        $userRow.find('.username').prop('disabled', false);
        $userRow.find('.edit-user-button, .delete-user-button').hide();
        $userRow.find('.edit-cancel-user-button, .update-user-button').show();
        $userRow.data('edited-value', $userName.val());
    };
    var cancelUserEdit = function (event) {
        event.preventDefault();
        var $userRow = $(event.target.parentElement);
        var $userName = $userRow.find('.username');
        $userRow.find('.username').prop('disabled', true);
        $userRow.find('.edit-user-button, .delete-user-button').show();
        $userRow.find('.edit-cancel-user-button, .update-user-button').hide();
        $userName.val($userRow.data('edited-value'));
    };
    $(function () {
        getUsers();
        $('#add-user-button').click(function (event) { return addUser(event); });
        $('body').on('click', '.delete-user-button', function (event) { return deleteUser(event); });
        $('body').on('click', '.edit-user-button', function (event) { return editUser(event); });
        $('body').on('click', '.edit-cancel-user-button', function (event) { return cancelUserEdit(event); });
        $('body').on('click', '.update-user-button', function (event) { return updateUser(event); });
    });
})();
