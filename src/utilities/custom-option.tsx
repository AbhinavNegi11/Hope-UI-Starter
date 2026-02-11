import React from "react";
import AsyncSelect from "react-select/async";
import { components } from "react-select";

// Show checkboxes inside dropdown
export const CustomOption = (props: any) => {
  return (
    <components.Option {...props}>
      <input
        type="checkbox"
        checked={props.isSelected}
        onChange={() => null}
        style={{ marginRight: 10 }}
      />
      {props.label}
    </components.Option>
  );
};

// Display only first 2-3 selected options, rest as "+n more"
export const CustomMultiValue = (props: any) => {
  const { index, selectProps } = props;
  const maxToShow = 3;
  const selected = selectProps.value;
  const isLastShown = index === maxToShow - 1;
  const shouldHide = index >= maxToShow;

  if (shouldHide) return null;

  if (isLastShown && selected.length > maxToShow) {
    return (
      <div style={{ padding: "2px 6px" }}>...</div>
    );
  }

  return <components.MultiValue {...props} />;
};
