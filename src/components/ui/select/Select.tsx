import { Item, useSelectState } from "react-stately";
import { HiddenSelect, useSelect, type AriaSelectOptions } from "react-aria";
import { useRef } from "react";

interface Props extends AriaSelectOptions<unknown> {}

export const Select: React.FC<Props> = ({ ...props }) => {
  const ref = useRef(null);
  const state = useSelectState(props);
  useSelect(props);
  return <div>Select</div>;
};
