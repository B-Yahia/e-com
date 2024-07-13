import { useEffect, useState } from "react";
import { AddAttribute } from "../../../ReduxStore/AttributesSlice";
import "./TextAttribute.css";
import { useDispatch, useSelector } from "react-redux";

export default function TextAttribute(props) {
  const ListOfSelectedAtteributes = useSelector(
    (state) => state.attributes.list
  );
  const [selectedAttrOptionId, setSelectedAttrOptionId] = useState("");
  const index = ListOfSelectedAtteributes.findIndex(
    (item) => item.attributeId === props.attr.id
  );

  const dispatch = useDispatch();
  const addAttr = (attrId, selectedAttr) => {
    const data = {
      attributeId: attrId,
      attributeItem: selectedAttr,
    };
    dispatch(AddAttribute(data));
  };
  useEffect(() => {
    if (index === -1) {
      setSelectedAttrOptionId(NaN);
    } else {
      setSelectedAttrOptionId(props.selectedAttr[index].attributeItem.id);
    }
  }, [ListOfSelectedAtteributes]);
  return (
    <div
      className="attribute_container"
      data-testid={`product-attribute-${props.attr.name}`}
    >
      <h2>{props.attr.name}</h2>
      <div className="attribute_items">
        {props.attr.items.map((item) => (
          <div
            onClick={() => addAttr(props.attr.id, item)}
            className={
              item.id === selectedAttrOptionId
                ? "selected_attribute_item_text"
                : "attribute_item_text"
            }
            key={item.id}
          >
            {item.value}
          </div>
        ))}
      </div>
    </div>
  );
}