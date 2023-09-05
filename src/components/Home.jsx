import { useEffect, useState } from "react";
import { addToCart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const BaseUrl = "https://fakestoreapi.com/products?limit=20";

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(BaseUrl).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);
  const dispatch = useDispatch();

  const handleCart = (e) => {
    dispatch(addToCart(e));
  };

  if (!data) return null;

  return (
    <div className="flex flex-wrap justify-center items-center mt-8 mb-8 gap-8">
      {data.map((product, id) => {
        return (
          <div
            key={id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <img className="p-8 rounded-t-lg" src={product.image} alt="" />

            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>

              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>

                <button
                  onClick={() => handleCart(product)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
