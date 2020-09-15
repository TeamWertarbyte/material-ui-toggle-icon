# material-ui-toggle-icon

This project provides a toggle icon for [Material-UI][mui].

![Demo](demo.gif)

If you want to try the component yourself instead of watching a gif, head over to [the styleguide][styleguide] for a live demo!

## Installation

```shell
npm i --save material-ui-toggle-icon
```

## Usage

The component takes two icons and a boolean that tells it whether to display the `onIcon` or the `offIcon`. When `on` is changed, the icon is switched with a transition.

```jsx
import ToggleIcon from "material-ui-toggle-icon";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export default class ToggleIconButton extends Component {
  state = { on: false };

  render() {
    <IconButton onClick={() => setState((state) => ({ on: !state.on }))}>
      <ToggleIcon
        on={state.on}
        onIcon={<Visibility />}
        offIcon={<VisibilityOff />}
      />
    </IconButton>;
  }
}
```

## Properties

| Name      | Type      | Default | Description                                                  |
| --------- | --------- | ------- | ------------------------------------------------------------ |
| offIcon\* | `element` |         | The icon to be displayed if the `on` prop is set to `false`. |
| onIcon\*  | `element` |         | The icon to be displayed if the `on` prop is set to `true`.  |
| on\*      | `bool`    |         | Controls whether the `onIcon` or the `offIcon` is displayed. |
| style     | `object`  |         | Override the inline-styles of the root element.              |

\* required property

## License

The files included in this repository are licensed under the MIT license.

[mui]: http://www.material-ui.com/#/
[styleguide]: https://mui.wertarbyte.com/#material-ui-toggle-icon
