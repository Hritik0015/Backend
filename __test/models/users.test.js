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
        let user= await Users.create({'firstname':'Yogesh','lastname':'Rana','address':'Kathmandu','phoneno':'9843282591'});
        expect(user.firstname).toMatch('Yogesh');
        expect(user.lastname).toMatch('Rana');
        expect(user.address).toMatch('Kathmandu');
        expect(user.phoneno).toMatch('9843282591');
     
    })
    it('should be able to update user',async()=>{
        let user= await Users.findOne({'firstname':'Hari','lastname':'Hari','address':'Kathmandu','phoneno':'9843283590'});
        user.firstname='Alex';
        user.lastname='Kafle';
        user.address='Bhaktapur';
        user.phoneno='9876543210'
        let newuser= await user.save();
        expect(newuser.firstname).toBe('Alex');
    })
    it('should be able to delete user',async()=>{
        let user= await Users.findOneAndDelete({'firstname':'Rajesh'});
        expect(user.firstname).toBe('Rajesh');
    })

})