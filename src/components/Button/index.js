import React from 'react'
import Typography from '../Typography'
import Utils from '../../utils/types'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

function Button(props) {
    const {
        color,
        look,
        elevated,
        pill,
        size,
        disabled,
        label,
        children,
        ...baseButtonProps
    } = props

    const classes = classnames({
        [styles.button]: true,
        [styles[`color-${color}`]]: true,
        [styles[`look-${look}`]]: true,
        [styles.elevated]: elevated,
        [styles.pill]: pill,
        [styles[`size-${size}`]]: true,
    })

    return (
        <button className={classes} disabled={disabled} {...baseButtonProps}>
            <Typography.Span type="button">
                {label || children}
            </Typography.Span>
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element),
    color: Utils.ColorType,
    look: PropTypes.oneOf(["filled", "outline", "outlined", "ghost", "text", "inverted"]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    elevated: PropTypes.bool,
    pill: PropTypes.bool,
    disabled: PropTypes.bool,
}

Button.defaultProps = {
    color: "brand",
    look: "filled",
    size: "small",
    elevated: false,
    pill: false,
    disabled: false
}

export default Button