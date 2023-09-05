import { useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from "react-redux";
import CartModal from "./CartModal";

const Navbar = () => {
  const { carts } = useSelector((state) => state.Cart);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  return (
    <header className=" bg-[#f2f4f8]">
      <div className="flex justify-between items-center ml-2 mr-2 lg:ml-12 lg:mr-12 h-[70px]">
        <div className="text-3xl uppercase font-mono">Shopping Cart</div>
        <div>
          <button
            type="button"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center rounded-lg"
            onClick={openCartModal}
          >
            <GiShoppingCart className="text-[50px] w-8 h-8" />
            <span className="inline-flex items-center justify-center w-8 h-8 ml-2 text-xl font-semibold text-blue-800 bg-blue-200 rounded-full">
              {carts.length}
            </span>
          </button>
        </div>
        <CartModal isOpen={isCartModalOpen} onClose={closeCartModal} />
      </div>
    </header>
  );
};

export default Navbar;
