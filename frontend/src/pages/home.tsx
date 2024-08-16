import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import { BASE_URL } from "../constants/baseURL";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [err, setError]= useState(false);

 // way one
//   useEffect(() => {
//     fetch(`${BASE_URL}/product`).then(async (response) => {
//       const data = await response.json();
//       setProducts(data);
//     });
//   }, []);

//way two
useEffect(() => {
       const fetchData= async()=>{
        try{
            const response = await fetch(`${BASE_URL}/product`);
            const data= await response.json();
            setProducts(data);
        } catch {
            setError(true)
        }
       }
       fetchData();
      }, []);



  return (
    <Container sx={{ marginTop: 2 }}>
      <Grid container spacing={2}>
        {products.map((p) => (
          <Grid item md={4}>
            <ProductCard id={p._id} title={p.title} image={p.image} price={p.price}  />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
