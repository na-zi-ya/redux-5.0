import { useDispatch } from "react-redux";

;

const LowestPrice = ({ lowestPrice }) => {
  const dispatch = useDispatch()

  return (
    <div className="col-span-1 flex items-center justify-center p-4 bg-gradient-to-r from-white to-blue-200 rounded-md">
      {/* {sellingPrice !== null ? (
        <div className="text-xl font-bold">From₹{sellingPrice}</div>
      ) : (
        <div className="border border-blue-400 font-base bg-white p-2 rounded-md">
          No stores selling this product near you
        </div>
      )} */}
       {lowestPrice && lowestPrice.selling_price !== "N/A" ? (
            <>
              <h4>From ₹{lowestPrice.selling_price}</h4>
              <p>Pharmacy ID: {lowestPrice.pharmacy_id}</p>
            </>
          ) : (
            <p>No stores selling this product near you</p>
          )}
    </div>
  );
};

export default LowestPrice;
