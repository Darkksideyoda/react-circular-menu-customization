# React Circular Menu

Circle based menu component for React with custom angle range and any number of menu items.

<div style="text-align: center;">
  <img alt="React Circular Menu" title="React Circular Menu Example" src="https://user-images.githubusercontent.com/36920441/94361989-a74df100-00d1-11eb-82b3-7f131219a77f.gif">
</div>

Install the npm package.

```bash
npm install react-circular-menu
```

## Example

```jsx
import MailIcon from "@material-ui/icons/Mail";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import MapIcon from "@material-ui/icons/Map";

// Import the circular menu
import { CircleMenu, CircleMenuItem } from "react-circular-menu";
import "react-circular-menu/styles.css";

export const TestMenuComponent = (props) => {
  return (
    <CircleMenu startAngle={-90} rotationAngle={360} itemSize={2} radius={5}>
      <CircleMenuItem
        onClick={() => alert("Clicked the item")}
        tooltip="Email"
        tooltipPlacement="right"
      >
        <MailIcon />
      </CircleMenuItem>
      <CircleMenuItem tooltip="Help">
        <HelpOutlineIcon />
      </CircleMenuItem>
      <CircleMenuItem tooltip="Location">
        <MapIcon />
      </CircleMenuItem>
      <CircleMenuItem tooltip="Info">
        <InfoIcon />
      </CircleMenuItem>
    </CircleMenu>
  );
};
```
