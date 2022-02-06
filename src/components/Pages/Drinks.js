import React from "react";
import Header from "../Header";
import Card from "../Card";
import CarouselBox from "../CarouselBox";
import { HollowDotsSpinner } from "react-epic-spinners";
import { useDispatch, useSelector } from "react-redux";
import { fetchDrinks } from "../../redux/actions/drinks";
import { addDishToCart } from "../../redux/actions/cart";

export default function Drinks({ API }) {
  const dispatch = useDispatch();
  const items = useSelector(({ drinks }) => drinks.items);
  const isLoaded = useSelector(({ drinks }) => drinks.isLoaded);

  React.useEffect(() => {
    if (!items.length) dispatch(fetchDrinks(API));
  }); //deleted empty array of dependencies

  const onAddToCart = (obj) => {
    dispatch(addDishToCart(obj));
  };

  return (
    <div className="menuPage">
      <Header />
      {!isLoaded ? (
        <div className="flex bg-black/50 min-h-[92vh]">
          <div className="m-auto  ">
            <HollowDotsSpinner size={30} animationDuration={750} />
          </div>
        </div>
      ) : (
        <div className="contentWrapper min-h-screen">
          <div className="content">
            <CarouselBox className="carousel" />
            <div className="cardItems">
              {items &&
                items.map((item) => (
                  <Card
                    key={item.dishName}
                    imgSrc={item.imgSrc}
                    description={item.description}
                    dishName={item.dishName}
                    price={item.price}
                    onAddToCart={(obj) => onAddToCart(obj)}
                    id={item.id}
                    amount={item.amount}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
