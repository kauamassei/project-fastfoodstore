import Image from "next/image";
import { CartContext, CartProduct } from "../contexts/cart";
import { formatCurrency } from "@/helpers/format-currency";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";

interface CartItemProps {
  product: CartProduct;
}

const CartProductItem = ({ product }: CartItemProps) => {
  const { decreaseProductQuantity, increaseProductQuantity, removeProduct } =
    useContext(CartContext);
  return (
    <div className="relative flex items-center justify-between w-full  mb-3">
  {/* ESQUERDA */}
  <div className="flex items-center gap-3">
    <div className="relative h-20 w-20 rounded-xl bg-gray-100">
      <Image src={product.imageUrl} alt={product.name} fill />
    </div>
    <div className="space-y-1">
      <p className="max-w-[90%] truncate text-ellipsis text-xs">
        {product.name}
      </p>
      <p className="text-sm font-semibold">
        {formatCurrency(product.price)}
      </p>

      {/* QUANTIDADE */}
      <div className="flex items-center gap-1 text-center">
        <Button
          className="rounded-lg h-7 w-7"
          variant="outline"
          onClick={() => decreaseProductQuantity(product.id)}
        >
          <ChevronLeftIcon />
        </Button>
        <p className="w-7 text-xs">{product.quantity}</p>
        <Button
          className="rounded-lg h-7 w-7"
          variant="destructive"
          onClick={() => increaseProductQuantity(product.id)}
        >
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  </div>

  {/* DELETE BUTTON */}
  <Button
    className="absolute right-2 top-1/2 -translate-y-1/2 w-[30px] h-[30px] shrink-0"
    variant="outline"
    onClick={() => removeProduct(product.id)}
  >
    <TrashIcon />
  </Button>
</div>

  );
};

export default CartProductItem;
