import React, { Component } from 'react'
import Typography from '../Typography'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

class Textbox extends Component {
    render () {
        const {
            label,
            size,
            disabled,
            ...baseInputProps
        } = this.props

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