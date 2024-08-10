import { toKebabCase } from "../../Utils/functions";
import "./CartColorAttribute.css";

export default function CartColorAttribute(props) {
  const index = props.selectedAttr.findIndex(
    (item) => item.attributeSet.id === props.attr.id
  );
  return (
    <div className="cart_attribute_container">
      <h2 className="cart_attribute_title"> {props.attr.name}</h2>
      <div className="cart_attribute_items">
        {props.attr.items.map((item) => (
          <button
            className={
              item.id === props.selectedAttr[index].attribute.id
                ? "cart_attribute_item selected"
                : "cart_attribute_item"
            }
            key={item.id}
            style={{ backgroundColor: item.value }}
            data-testid={
              item.id === props.selectedAttr[index].attribute.id
                ? `cart-item-attribute-${toKebabCase(
                    props.attr.name
                  )}-${toKebabCase(item.displayValue)}-selected`
                : `cart-item-attribute-${toKebabCase(
                    props.attr.name
                  )}-${toKebabCase(item.displayValue)}`
            }
          ></button>
        ))}
      </div>
    </div>
  );
}
