import React from 'react'
import PropTypes from 'prop-types'

const getStyles = (props) => ({
  root: {
    width: 24,
    height: 24,
    position: 'relative',
    display: 'inline-block'
  },
  offIcon: {
    transition: '550ms cubic-bezier(0.4, 0.0, 0.2, 1)',
    clipPath: props.on ? 'polygon(0% 0%, 0% 0%, 0% 0%)' : 'polygon(0% 200%, 0% 0%, 200% 0%)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0
  },
  onIcon: {
    transition: '550ms cubic-bezier(0.4, 0.0, 0.2, 1)',
    clipPath: props.on ? 'polygon(100% -100%, 100% 100%, -100% 100%)' : 'polygon(100% 100%, 100% 100%, 100% 100%)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0
  }
})

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
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  offIcon: PropTypes.element.isRequired,
  onIcon: PropTypes.element.isRequired,
  on: PropTypes.bool.isRequired,
  style: PropTypes.object
}
