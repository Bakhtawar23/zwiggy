import { useDispatch } from "react-redux";
import { MENU_IMG } from "../utils/Constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { useState } from "react";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();

    const [itemCounts, setItemCounts] = useState({});

    const handleAddItem = (item) => {
        dispatch(addItem(item));
        setItemCounts((prevCounts) => ({
            ...prevCounts,
            [item.card.info.id]: (prevCounts[item.card.info.id] || 0) + 1,
        }));
    };

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
        setItemCounts((prevCounts) => ({
            ...prevCounts,
            [item.card.info.id]: (prevCounts[item.card.info.id] || 0) - 1,
        }));
    };

    return (
        <div>
            {items.map((item) => {
                const itemId = item.card.info.id;
                const count = itemCounts[itemId] || 0;

                return (
                    <div
                        key={itemId}
                        className="p-2 m-2 border-b-2 border-gray-400 text-left flex justify-between"
                    >
                        <div className="w-9/12">
                            <div className="py-2">
                                <span>{item.card.info.name}</span>
                                <span>
                                    - ₹
                                    {item.card.info.price
                                        ? item.card.info.price / 100
                                        : item.card.info.defaultPrice / 100}
                                </span>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4 relative flex flex-col items-center">
                            <div className="absolute top-0 flex flex-col items-center mt-2">
                                {count === 0 ? (
                                    <button
                                        className="p-1 bg-white shadow-lg rounded-lg text-green-600 font-bold mt-20"
                                        onClick={() => handleAddItem(item)}
                                    >
                                        ADD
                                    </button>
                                ) : (
                                    <div className="flex items-center space-x-2 mt-12">
                                        <button
                                            className="px-2 bg-white shadow-lg rounded-lg text-green-600 font-bold mt-9"
                                            onClick={() => handleRemoveItem(item)}
                                        >
                                            -
                                        </button>
                                        <span className="text-lg font-bold text-green-300 mx-2 mt-9">
                                            {count}
                                        </span>
                                        <button
                                            className="px-2 bg-white shadow-lg rounded-lg text-green-600 font-bold mt-9"
                                            onClick={() => handleAddItem(item)}
                                        >
                                            +
                                        </button>
                                    </div>
                                )}
                            </div>
                            <img
                                src={MENU_IMG + item.card.info.imageId}
                                className="w-full h-24 object-cover rounded-lg mt-2"
                                alt="res-img"
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;
