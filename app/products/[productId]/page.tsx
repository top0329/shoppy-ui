import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import getProduct from "./get-product";
import Image from "next/image";
import { getProductImage } from "../product-image";

interface SinpgleProductProps {
  params: { productId: string };
}

export default async function SingpleProduct({ params }: SinpgleProductProps) {
  const { productId } = await params;
  const product = await getProduct(+productId);
  return (
    <Grid container marginBottom={"2rem"} rowGap={3}>
      {product.imageExists && (
        <Grid size={{ md: 6, xs: 12 }}>
          <Image
            src={getProductImage(product.id)}
            className="w-full h-auto sm:w-3/4"
            sizes="100vw"
            width={0}
            height={0}
            alt="Picture of product"
          />
        </Grid>
      )}
      <Grid size={{ md: 6, xs: 12 }}>
        <Stack gap={3}>
          <Typography variant="h2">{product.name}</Typography>
          <Typography>{product.description}</Typography>
          <Typography variant="h4">${product.price}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
