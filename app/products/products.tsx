import Grid from "@mui/material/Grid2";
import getProducts from "./actions/get-products";
import Product from "./product";

export default async function Products() {
  const products = await getProducts();

  return (
    <Grid container spacing={3} sx={{ height: "85vh", overflow: "auto" }}>
      {products.map((product) => (
        <Grid key={product.id} size={{ sm: 6, lg: 4, xs: 12 }}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
