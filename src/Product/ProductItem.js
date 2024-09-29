import React from "react";
import PropTypes from "prop-types";

const ProductItem = (props) => {
  return (
    <div className="productItem">
      <div className="productItem-image">
        <img
          alt={props.itemData.id}
          src={props.itemData.image}
          height="200"
          width="200"
        />
      </div>
      <div className="productItem-details">
        <h3>{props.itemData.title}</h3>
        <h3>${props.itemData.price}</h3>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  itemData: PropTypes.object,
};

export default ProductItem;
