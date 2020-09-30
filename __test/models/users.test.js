const Users= require('../../models/users');
const mongoose= require('mongoose');
const DBTest= 'mongodb://127.0.0.1:27017/testmymovies';
beforeAll(async()=>{
    await mongoose.connect(DBTest,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    })
})


describe('Users Schema Test',()=>{
    it('should be able to add new user',async()=>{
        let user= await Users.create({'firstname':'Hari','lastname':'Acharya','address':'Kathmandu','phoneno':'9843283590'});
        expect(user.firstname).toMatch('Hari');
        expect(user.lastname).toMatch('Acharya');
        expect(user.address).toMatch('Kathmandu');
        expect(user.phoneno).toMatch('9843283590');
     
    })
    it('should be able to update user',async()=>{
        let user= await Users.findOne({'firstname':'Hari','lastname':'Hari','address':'Kathmandu','phoneno':'9843283590'});
        user.firstname='Rajkundan';
        user.lastname='Shrestha';
        user.address='Bhaktapur';
        user.phoneno='9876543210'
        let newuser= await user.save();
        expect(newuser.firstname).toBe('Rajkundan');
    })
    it('should be able to delete user',async()=>{
        let user= await Users.findOneAndDelete({'firstname':'Rajkumari'});
        expect(user.firstname).toBe('Rajkumari');
    })

})