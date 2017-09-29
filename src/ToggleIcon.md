The toggle icon can be used to toggle between two icons. When changing the `status` property, it applies a transition from top left to bottom right. This is perfect for toggling between _SomeIcon_ and its _SomeIconOff_ counterpart.

Below is an interactive example where a toggle icon is used inside an `IconButton`.

```
const { IconButton } = require('material-ui');
const Visibility = require('material-ui/svg-icons/action/visibility').default
const VisibilityOff = require('material-ui/svg-icons/action/visibility-off').default

inititalState = { on: false };

<IconButton
  onClick={() => setState({ on: !state.on })}
>
  <ToggleIcon
    on={state.on}
    onIcon={<Visibility />}
    offIcon={<VisibilityOff />}
  />
</IconButton>
```

This component aims to be compatible with Material-UI's icon components. It should work wherever `SvgIcon` and `FontIcon` are supported. It also supports the same props.

```
const { RaisedButton } = require('material-ui');
const Visibility = require('material-ui/svg-icons/action/visibility').default;
const VisibilityOff = require('material-ui/svg-icons/action/visibility-off').default;

<div>
  <div>
    Raised button:
    <RaisedButton
      icon={<ToggleIcon
        on={true}
        onIcon={<Visibility />}
        offIcon={<VisibilityOff />}
      />}
    />
  </div>
  <div>
  Disabled raises button:
  <RaisedButton
    icon={<ToggleIcon
      on={true}
      onIcon={<Visibility />}
      offIcon={<VisibilityOff />}
    />}
    disabled
  />
  </div>
  <div>
    With `color` and `hoverColor`:
    <ToggleIcon
      on={true}
      onIcon={<Visibility />}
      offIcon={<VisibilityOff />}
      color='orange'
      hoverColor='red'
    />
  </div>
</div>
```
