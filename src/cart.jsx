import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store/cart-slice";
export const Cart = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.cart.cart);
  console.log(item);
  function addItem() {
    dispatch(
      addToCart({
        item: {
          name: "couch",
        },
      })
    );
  }
  return <button onClick={addItem}>Add</button>;
};
