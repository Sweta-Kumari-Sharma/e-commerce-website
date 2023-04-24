import Product from '../model/productSchema.js'

export const getProducts=async(req,res)=>{
    try{
        const products=await Product.find({});
        res.status(200).json(products)
    }
    catch(e){
        console.log(e.message);
    }
}

export const getProductDetails=async(req,res)=>{
    try{
        const products=await Product.findOne({'id':req.params.id});
        res.status(200).json(products);
    }
    catch(e){
        res.status(500).json(e.message);
    }
}