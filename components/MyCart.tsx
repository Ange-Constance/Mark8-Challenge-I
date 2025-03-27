import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { FaTrashAlt } from "react-icons/fa";
import { updateQuantity, removeFromCart } from "../store/endpoints/cardSlice";

const MyCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.unitPrice * item.quantity;
  }, 0);

  const handleRemoveProduct = (id: string | number) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: string | number, increment: boolean) => {
    dispatch(updateQuantity({ id, increment }));
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="p-10">
          <p>Your cart is empty!</p>
        </div>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-4 p-4 border-b"
              >
                <div className="flex items-center">
                  <img
                    src={item.thumbnail[0]}
                    alt={item.name}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      Unit price: {item.unitPrice.toLocaleString()} Rwf
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <button
                      onClick={() => handleUpdateQuantity(item.id, false)}
                      className="p-2 border rounded-l-lg"
                    >
                      -
                    </button>
                    <div className="px-4 py-2 border-t border-b bg-gray-50 min-w-[3rem] text-center">
                      {item.quantity}
                    </div>
                    <button
                      onClick={() => handleUpdateQuantity(item.id, true)}
                      className="p-2 border rounded-r-lg"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-semibold text-[#A4C400] ml-4">
                    {(item.unitPrice * item.quantity).toLocaleString()} Rwf
                  </p>
                  <button
                    onClick={() => handleRemoveProduct(item.id)}
                    className="ml-4 text-red-500"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 text-right">
            <p className="text-lg font-semibold mb-4">
              Total: {totalPrice.toLocaleString()} Rwf
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCart;
