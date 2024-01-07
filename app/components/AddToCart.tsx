import { Button } from "@/components/ui/button";

interface Props {
  className?: string;
}

const AddToCart = ({ className }: Props) => {
  return <Button className={`${className} text-md`}>Add to cart</Button>;
};

export default AddToCart;
