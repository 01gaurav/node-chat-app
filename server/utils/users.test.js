const expect = require('expect');
const {Users} = require('./users');

describe('Users', ()=>{
    var users;

    beforeEach(()=>{
        users = new Users();
        users.users = [{
            id: '1',
            name: 'jack',
            room: 'node course'
        }, {
            id: '2',
            name: 'jon',
            room: 'react course'
        }, {
            id: '3',
            name: 'will',
            room: 'node course'
        }];
    });

    it('should add new user',()=>{
        var users = new Users();
        var user = {
            id: '123',
            name: 'master',
            room: 'Great work'
        };
        var resuser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should return names', ()=>{
        var userList = users.getUserList('node course');

        expect(userList).toEqual(['jack','will']);
    });
});