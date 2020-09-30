const Category = require('../../models/category');
const mongoose = require('mongoose');
const DBTest = 'mongodb://localhost:27017/testmymovies';
beforeAll(async () =>{
    await mongoose.connect(DBTest, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
})

afterAll(async () =>{
    await mongoose.connection.db.dropDatabase();
})

describe('Category Schema Test', () =>{
    it('should be able to add new category', async ()=>{
        let cat = await Category.create({ 'category':'Horror', 'image':'img01.jpg'});
        expect(cat.category).toMatch('Horror');
        expect(cat.image).toMatch('img01.jpg');
    })
    it('should be able to update category', async() =>{
        let cat = await Category.findOne({'category':'Horror', 'image':'img01.jpg'});
        cat.category= 'Comedy';
        cat.image= 'img02.jpg';
        let newCat = await cat.save();
        expect(newCat.category).toBe('Comedy');
        expect(newCat.image).toBe('img02.jpg');
    })
    it('should be able to delete category', async () =>{
        let cat = await Category.findOneAndDelete({ 'category':'Comedy','image':'img02.jpg'});
        expect(cat.category).toBe('Comedy');
        expect(cat.image).toBe('img02.jpg');
    })
})