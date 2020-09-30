const Product= require('../../models/products');
const mongoose= require('mongoose');
const DBTest= 'mongodb://127.0.0.1:27017/testmymovies';
beforeAll(async()=>{
    await mongoose.connect(DBTest,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    })
})


describe(' Movies Schema Test',()=>{
    it('should be able to add new product',async()=>{
        let product= await Product.create({'productname':'Joker','productdesc':'Joker is a 2019 American psychological thriller film directed and produced by Todd Phillips, who co-wrote the screenplay with Scott Silver','productimg':'Joker.jpg'});
        expect(product.productname).toMatch('Joker');
        expect(product.productdesc).toMatch('Joker is a 2019 American psychological thriller film directed and produced by Todd Phillips, who co-wrote the screenplay with Scott Silver');
        expect(product.productimg).toMatch('Joker.jpg');
     
    })
    it('should be able to update skin product',async()=>{
        let product= await Product.findOne({'productname':'Joker','productdesc':'Joker is a 2019 American psychological thriller film directed and produced by Todd Phillips, who co-wrote the screenplay with Scott Silver','productimg':'Joker.jpg'});
        product.productname='Lucifer';
        product.productimg='lucifer.jpg';
        product.productdesc='Lucifer is an American urban fantasy television series'
        let newproduct= await product.save();
        expect(newproduct.productname).toBe('Lucifer');
        expect(newproduct.productimg).toBe('lucifer.jpg');
        expect(newproduct.productdesc).toBe('Lucifer is an American urban fantasy television series');
    })
    it('should be able to delete product',async()=>{
        let product= await Product.findOneAndDelete({'productname':'Lucifer','productimg':'lucifer.jpg','productdesc':'Lucifer is an American urban fantasy television series'});
        expect(product.productname).toBe('Lucifer');
        expect(product.productimg).toBe('lucifer.jpg');
        expect(product.productdesc).toBe('Lucifer is an American urban fantasy television series');
    })
})