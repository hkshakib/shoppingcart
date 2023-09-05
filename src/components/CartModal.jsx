import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";

const CartModal = ({ isOpen, onClose }) => {
  const { carts } = useSelector((state) => state.Cart);
  const totalPrice = calculateTotalPrice(carts);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 bg-white p-4 rounded-lg w-1/2">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <AiOutlineClose className="text-3xl" />
        </button>
        <h2 className="text-2xl font-semibold mb-4">Cart</h2>

        <div className="p-4">
          {carts.length === 0 ? (
            <p>Cart is empty.</p>
          ) : (
            <>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">Product Name</th>
                    <th className="text-left">Price</th>
                    <th className="text-left">Quantity</th>
                    <th className="text-left">Total Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((item) => (
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td> $ {item.price.toFixed(2)}</td>
                      <td>1</td>
                      <td>${item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <hr className="my-4" />
              <div className="font-semibold">Total: ${totalPrice}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;

const calculateTotalPrice = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price, 0);
};
