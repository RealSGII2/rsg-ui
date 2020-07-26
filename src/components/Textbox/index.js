import React from 'react'
import Typography from '../Typography'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

function Textbox(props) {
    const {
        label,
        size,
        disabled,
        ...baseInputProps
    } = props

    const classes = classnames({
        [styles.textbox]: true,
        [styles[`size-${size}`]]: true
    })

    return (
        <div className={styles.container}>
            <Typography type="label">
                {label}
            </Typography>
            <input className={classes} disabled={disabled} {...baseInputProps} />
        </div>
    )
}

Textbox.propTypes = {
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(["small", "medium", "large"]),
}

Textbox.defaultProps = {
    disabled: false,
    size: "large"
}

export default Textbox