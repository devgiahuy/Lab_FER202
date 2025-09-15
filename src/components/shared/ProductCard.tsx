import { Card, CardBody, CardFooter, Image, Button } from "@heroui/react";
import type { Product } from "../../models/Product/types";

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: Props) {
  return (
    <Card shadow="sm">
      <CardBody>
        <Image src={product.image} alt={product.name} className="w-full h-40 object-cover" />
        <h3 className="font-bold mt-2">{product.name}</h3>
        <p>${product.price}</p>
      </CardBody>
      <CardFooter>
        <Button onPress={() => onAddToCart(product)} color="primary">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

// export default ProductCard