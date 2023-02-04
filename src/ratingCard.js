import { useState } from "react";
import Rating from "@mui/material/Rating";
import Input from "./Input";

const ReactCard = () => {
  const [rating, setRating] = useState(0);

  return (
    <>
      {rating === 0 ? (
        <div className="">
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
              localStorage.setItem("ratings", rating);
            }}
          />
        </div>
      ) : (
        <div>
          <Input />
        </div>
      )}
    </>
  );
};

export default ReactCard;
