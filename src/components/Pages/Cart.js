import React from "react";
import Header from "../Header";
// import axios from "axios";
import { HollowDotsSpinner } from "react-epic-spinners";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../CartItem";
import {
  deleteDishFromCart,
  setCart,
  addOnePiece,
  removeOnePiece,
} from "../../redux/actions/cart";
import FormFormik from "../FormFormik";
import { auth, db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function Cart({ currentUser }) {
  const [userData, setUserData] = React.useState({});
  const items = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ cart }) => cart.isLoaded);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setCart(items));
  }); //deleted empty array of dependencies

  const onPlus = ({ id }) => {
    dispatch(addOnePiece(id));
  };

  const onMinus = ({ id }) => {
    dispatch(removeOnePiece(id));
  };

  const onRemove = ({ id }) => {
    dispatch(deleteDishFromCart(id));
  };

  const totalPrice = items.reduce(
    (sum, obj) => obj.price * obj.amount + sum,
    0
  );
  // const currentUser = auth.currentUser;

  React.useEffect(() => {
    if (currentUser) {
      const docRef = doc(db, "users", currentUser.uid);
      getDoc(docRef).then((docSnap) => {
        setUserData(docSnap.data());
      });
    }
    return;
  }, [currentUser]);

  // const handleSubmit = () => {
  //   setDoc(doc(db, "orders", currentUser.uid), {
  //     dishes: items,
  //     totalPrice: totalPrice,
  //   });
  // };
  const date = new Date();
  const handleSubmit = () => {
    const cityRef = doc(db, "orders", currentUser.uid);
    setDoc(
      cityRef,
      { [new Date()]: { dishes: items, totalPrice: totalPrice } },
      { merge: true }
    );
  };
  console.log(userData);
  console.log(items);
  console.log(date);
  return (
    <div className="menuPage h-screen overflow-auto">
      <Header />
      {!isLoaded ? (
        <div className="flex bg-black/50 min-h-[92vh]">
          <div className="m-auto  ">
            <HollowDotsSpinner size={30} />
          </div>
        </div>
      ) : (
        <div className="contentWrapper">
          <h1 className="text-center text-4xl font-thin">Your order:</h1>
          <div className="cartContent h-full flex flex-row ">
            <div className="flex flex-col basis-4/6">
              {items &&
                items.map((item) => (
                  <CartItem
                    key={`${item.id}${item.dishName}`}
                    imgSrc={item.imgSrc}
                    description={item.description}
                    dishName={item.dishName}
                    price={item.price}
                    id={item.id}
                    onRemove={(id) => onRemove(id)}
                    onPlus={(id) => onPlus(id)}
                    onMinus={(id) => onMinus(id)}
                  />
                ))}
            </div>
            <div className="flex flex-col basis-2/6 border-solid border-2 border-black rounded-lg m-4 justify-between items-center px-5 mb-3 ">
              {currentUser && (
                <div>
                  <p>{`Full name: ${userData.username}`}</p>
                  <p>{`Delivery address: ${userData.address}`}</p>
                  <p>{`Phone number: ${userData.phoneNumber}`}</p>
                </div>
              )}

              {/* <FormFormik /> */}
              <div>
                <h1 className="text-center text-4xl font-thin ">
                  Total: ${totalPrice}
                </h1>
                <button
                  className="text-center text-2xl border-double border-4 border-emerald-800 px-5 cursor-pointer active:scale-110"
                  onClick={handleSubmit}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
