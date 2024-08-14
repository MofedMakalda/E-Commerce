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
      image: "bluetooth_headphones.jpg",
      price: 89.99,
      stock: 50,
    },
    {
      title: "Gaming Keyboard",
      image: "gaming_keyboard.jpg",
      price: 49.99,
      stock: 75,
    },
    {
      title: "Smartphone Stand",
      image: "smartphone_stand.jpg",
      price: 14.99,
      stock: 200,
    },
    {
      title: "USB-C Hub",
      image: "usb_c_hub.jpg",
      price: 39.99,
      stock: 150,
    },
    {
      title: "Portable Charger",
      image: "portable_charger.jpg",
      price: 24.99,
      stock: 120,
    },
    {
      title: "4K Monitor",
      image: "4k_monitor.jpg",
      price: 299.99,
      stock: 30,
    },
    {
      title: "Laptop Cooling Pad",
      image: "laptop_cooling_pad.jpg",
      price: 19.99,
      stock: 80,
    },
    {
      title: "External Hard Drive",
      image: "external_hard_drive.jpg",
      price: 59.99,
      stock: 60,
    },
    {
      title: "Smartwatch",
      image: "smartwatch.jpg",
      price: 149.99,
      stock: 40,
    },
  ];

    const existingProducts = await getAllProducts();

    if(existingProducts.length=== 0){
        await productModel.insertMany(products)
    }

};