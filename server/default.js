import Product from "./model/productSchema.js";
import { products } from "./constants/productData.js";

const DefaultData=async()=>{
    try{
        // await Product.deleteMany({});
        await Product.insertMany(products);
        console.log('data imported succesfully');
    }
    catch(e){
        console.log(e.message);
    }
}
export default DefaultData;