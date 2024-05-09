import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/BagSlice";
import { IoBagAdd } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const eleFound = bagItems.indexOf(item.id) >= 0;
  console.log(item.id, eleFound);

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));

    
  };

  const handleremove = () => {
    dispatch(bagActions.removeFromBag(item.id));

    console.log("Added");
  };
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>


        {
        eleFound ?  <button
          type="button"
          className=" btn btn-danger btn-add-bag remove"
          style={{ backgroundColor: "#d13b3b" }}
          onClick={handleremove}
        >
          <MdDelete /> Remove
        </button> 
        :
        <button
          type="button"
          className="btn btn-success btn-add-bag"
          onClick={handleAddToBag}
        >
          {" "}
          <IoBagAdd /> Add to Bag
        </button>
        }
        

       
      </div>
    </>
  );
};

export default HomeItem;
