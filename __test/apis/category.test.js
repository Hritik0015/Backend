const axios = require('axios');
const baseurl = 'http://localhost:3001/users/categories';

describe('categoresAPI', () => {
    let categories;
    test('Post a category', async () => {
        let cat = await axios.post(baseurl, {
            'category': 'Horror'
        })
        expect(cat.data.category).toBe('Horror')
    })

    test('Get all categories', async () => {
        return axios.get(baseurl)
            .then((response) => {
                categories = response.data;
                expect(response.data.length).toBeGreaterThan(0);
            })
    })

    test('Find a category by id', async () => {
        return axios.get(baseurl + `/${categories[0]._id}`)
            .then((response) => {
                expect(response.data.category).toBe('Horror');
            }).catch((err)=> {
                expect(err.response.status).toBe(500)
            })
    })
    test('Update a category', async () => {
        return axios.put(baseurl + `/${categories[0]._id}`, {
            'category': 'Comedy'
        })
            .then((response) => {
                expect(response.data.category).toBe('Comedy');
            }).catch((err)=> {
                expect(err.response.status).toBe(500)
            })
    })
    
})
