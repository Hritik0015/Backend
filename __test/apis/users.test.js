const axios = require('axios');

const baseurl = 'http://localhost:3001/users';

describe('Users Route Test', () => {
    let token;
    test('sign up of new user', () => {
        return axios.post(baseurl + '/signup', {
            firstname: 'Ayush',
            lastname: 'Ghimire',
            username: 'username10',
            password: 'mymovies'
        }).then((response) => {
            console.log(response.data);
            expect(response.data.status).toMatch('success');
        })
    })
    test('login of existing user', () => {
        return axios.post(baseurl + '/login', {
            username: 'username10',
            password: 'mymovies'
        }).then((response) => {
            token = response.data.token;
            expect(response.status).toBe(200);
            expect(response.data.status).toMatch('Login successfully!');
        })
    })

    test('User should be able to view profile', () => {
        return axios.get(baseurl + '/me', {
            'headers': { 'Authorization': 'Bearer ' + token }
        }).then((response) => {
            expect(response.status).toBe(200);
        })
    })
})