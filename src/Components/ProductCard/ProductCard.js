import { useDispatch } from "react-redux";
import cart from "../../Images/Cart.svg";
import { addProductToCart } from "../../ReduxStore/CartSlice";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const dispatch = useDispatch();

  const quickShop = (product) => {
    const attr = [];
    if (product.attributes.length) {
      product.attributes.forEach((element) => {
        attr.push({
          attributeId: element.id,
          attributeItem: element.items[0],
        });
      });
      const orderLine = {
        product: product,
        selectedAttr: attr,
      };
      dispatch(addProductToCart(orderLine));
    } else {
      const orderLine = {
        product: product,
        selectedAttr: [],
      };
      dispatch(addProductToCart(orderLine));
    }
  };
  return (
    <div className="card_container">
      {props.product.inStock && (
        <img
          className="cart_btn"
          src={cart}
          onClick={() => quickShop(props.product)}
        />
      )}
      <Link
        to={"/product/" + props.product.id}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <div className="card_content">
          <div className="card_image_container">
            <img className="card_image" src={props.product.gallery[0]} />
            {!props.product.inStock && (
              <p className="in_stock_indicator">Out of stock</p>
            )}
          </div>
          <p className="product_name">{props.product.name}</p>
          <p className="product_price">
            {props.product.prices[0].currency.symbol}{" "}
            {props.product.prices[0].amount}
          </p>
        </div>
      </Link>
    </div>
  );
}