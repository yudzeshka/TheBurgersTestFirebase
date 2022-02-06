import React from "react";
import Header from "../Header";
import { HollowDotsSpinner } from "react-epic-spinners";
import CartItem from "../CartItem";
import { auth, db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function Orders({ currentUser }) {
  const [userOrders, setUserOrders] = React.useState([]);

  // const currentUser = auth.currentUser;

  React.useEffect(() => {
    if (currentUser) {
      const docRef = doc(db, "orders", currentUser.uid);
      getDoc(docRef).then((docSnap) => {
        setUserOrders(docSnap.data());
      });
    }
    return;
  }, [currentUser]);
  console.log(userOrders);
  return (
    <div className="menuPage h-screen overflow-auto">
      <Header />
      <div className="contentWrapper">
        <h1 className="text-center text-4xl font-thin">Your order:</h1>
        <div className="cartContent h-full flex flex-row ">
          <div className="flex flex-col basis-4/6">
            {userOrders &&
              userOrders.dishes.map((item) => (
                <CartItem
                  key={`${item.id}${item.dishName}`}
                  imgSrc={item.imgSrc}
                  description={item.description}
                  dishName={item.dishName}
                  price={item.price}
                />
              ))}
          </div>
        </div>
      </div>
      )
    </div>
  );
}
