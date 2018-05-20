import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { clipPathSupported } from './util'

const clipPath = (value) => ({
  WebkitClipPath: value,
  clipPath: value
})

const styles = {
  root: {
    width: 24,
    height: 24,
    position: 'relative',
    display: 'inline-block'
  },
  offIcon: {
    transition: 'clip-path 550ms cubic-bezier(0.4, 0.0, 0.2, 1), -webkit-clip-path 550ms cubic-bezier(0.4, 0.0, 0.2, 1)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0
  },
  onIcon: {
    transition: 'clip-path 550ms cubic-bezier(0.4, 0.0, 0.2, 1), -webkit-clip-path 550ms cubic-bezier(0.4, 0.0, 0.2, 1)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0
  }
}

/**
 * An animated toggle icon.
 */
function ToggleIcon (props) {
  const {
    classes,
    offIcon,
    onIcon,
    on,
    ...other
  } = props

  return (
    <div className={classes.root} {...other}>
      {React.cloneElement(offIcon, {
        className: classes.offIcon,
        style: {
          ...clipPath(on ? 'polygon(0% 0%, 0% 0%, 0% 0%)' : 'polygon(0% 200%, 0% 0%, 200% 0%)'),
          visibility: !on || clipPathSupported() ? 'visible' : 'hidden'
        }
      })}
      {React.cloneElement(onIcon, {
        className: classes.onIcon,
        style: {
          ...clipPath(on ? 'polygon(100% -100%, 100% 100%, -100% 100%)' : 'polygon(100% 100%, 100% 100%, 100% 100%)'),
          visibility: on || clipPathSupported() ? 'visible' : 'hidden'
        }
      })}
    </div>
  )
}

ToggleIcon.propTypes = {
  /**
   * The icon to be displayed if the `on` prop is set to `false`.
   */
  offIcon: PropTypes.element.isRequired,
  /**
   * The icon to be displayed if the `on` prop is set to `true`.
   */
  onIcon: PropTypes.element.isRequired,
  /**
   * Controls whether the `onIcon` or the `offIcon` is displayed.
   */
  on: PropTypes.bool.isRequired
}

export default withStyles(styles)(ToggleIcon)
