The toggle icon can be used to toggle between two icons. When changing the `status` property, it applies a transition from top left to bottom right. This is perfect for toggling between _SomeIcon_ and its _SomeIconOff_ counterpart.

Below is an interactive example where a toggle icon is used inside an `IconButton`.

```
const IconButton = require('@material-ui/core/IconButton').default;
const Visibility = require('@material-ui/icons/Visibility').default;
const VisibilityOff = require('@material-ui/icons/VisibilityOff').default;

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

This component aims to be compatible with Material-UI's icon components. It should work wherever `SvgIcon` and `Icon` are supported.

```
const IconButton = require('@material-ui/core/IconButton').default;
const Visibility = require('@material-ui/icons/Visibility').default;
const VisibilityOff = require('@material-ui/icons/VisibilityOff').default;

<div>
  <div>
    Icon button:
    <IconButton color="primary">
      <ToggleIcon
        on={true}
        onIcon={<Visibility />}
        offIcon={<VisibilityOff />}
      />
    </IconButton>
  </div>
  <div>
    Disabled icon button:
    <IconButton color="primary" disabled>
      <ToggleIcon
        on={true}
        onIcon={<Visibility />}
        offIcon={<VisibilityOff />}
      />
    </IconButton>
  </div>
</div>
```
