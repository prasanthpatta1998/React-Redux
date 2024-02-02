import React from "react";
import { connect } from "react-redux";
import { buycake, icecream } from "../Features/Cake/CakeActions";

const OwnProps = (props) => {
  return (
    <div>
      <h3>items - {props.item}</h3>
      <button onClick={() => props.buyItem()}>Buy</button>
    </div>
  );
};

const mapStateToProps = (state, onwProps) => {
  const itemsData = onwProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  return { item: itemsData };
};

const mapDispatchToProps = (dispatch, onwProps) => {
  const method = onwProps.cake ? () => dispatch(buycake()) :() => dispatch(icecream())
  return {
    buyItem: method
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnProps);
