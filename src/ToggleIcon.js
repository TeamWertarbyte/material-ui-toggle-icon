import React from 'react'
import PropTypes from 'prop-types'
import { clipPathSupported } from './util'

const clipPath = (value) => ({
  WebkitClipPath: value,
  clipPath: value
})

const getStyles = (props) => ({
  root: {
    width: 24,
    height: 24,
    position: 'relative',
    display: 'inline-block'
  },
  offIcon: {
    transition: 'clip-path 550ms cubic-bezier(0.4, 0.0, 0.2, 1), -webkit-clip-path 550ms cubic-bezier(0.4, 0.0, 0.2, 1)',
    ...clipPath(props.on ? 'polygon(0% 0%, 0% 0%, 0% 0%)' : 'polygon(0% 200%, 0% 0%, 200% 0%)'),
    visibility: !props.on || clipPathSupported() ? 'visible' : 'hidden',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0
  },
  onIcon: {
    transition: 'clip-path 550ms cubic-bezier(0.4, 0.0, 0.2, 1), -webkit-clip-path 550ms cubic-bezier(0.4, 0.0, 0.2, 1)',
    ...clipPath(props.on ? 'polygon(100% -100%, 100% 100%, -100% 100%)' : 'polygon(100% 100%, 100% 100%, 100% 100%)'),
    visibility: props.on || clipPathSupported() ? 'visible' : 'hidden',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0
  }
})

/**
 * An animated toggle icon.
 */
export default function ToggleIcon (props) {
  const {
    color,
    hoverColor,
    offIcon,
    onIcon,
    on, // eslint-disable-line
    style,
    ...other
  } = props

  const styles = getStyles(props)

  return (
    <div style={{ ...styles.root, ...style }} {...other}>
      {React.cloneElement(offIcon, {
        style: { ...style, ...styles.offIcon },
        color,
        hoverColor
      })}
      {React.cloneElement(onIcon, {
        style: { ...style, ...styles.onIcon, ...style },
        color,
        hoverColor
      })}
    </div>
  )
}

ToggleIcon.propTypes = {
  /**
   * This is the fill color of the svg icon. If not specified, this component will default to muiTheme.palette.textColor.
   */
  color: PropTypes.string,
  /**
   * This is the icon color when the mouse hovers over the icon.
   */
  hoverColor: PropTypes.string,
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
  on: PropTypes.bool.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.object
}
