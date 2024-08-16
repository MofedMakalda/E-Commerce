import productModel from "../models/productModel";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedInitialProducts = async () => {
  const products = [
    {
      title: "Wireless Mouse",
      image: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/accessories/wireless-mouse-gt/imgs/pc/huawei-wireless-mouse-gt-kv.jpg",
      price: 29.99,
      stock: 100,
    },
    {
      title: "Bluetooth Headphones",
      image: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/accessories/wireless-mouse-gt/imgs/pc/huawei-wireless-mouse-gt-kv.jpg",
      price: 89.99,
      stock: 50,
    },
    {
      title: "Gaming Keyboard",
      image: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/accessories/wireless-mouse-gt/imgs/pc/huawei-wireless-mouse-gt-kv.jpg",
      price: 49.99,
      stock: 75,
    },
    
  ];
    const existingProducts = await getAllProducts();
    if(existingProducts.length=== 0){
        await productModel.insertMany(products)
    }

};