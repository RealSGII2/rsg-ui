import React from 'react'
import Typography from '../Typography'
import Utils from '../../utils/types'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

function ButtonToolbar(props) {
    const {
        children,
        ...baseButtonProps
    } = props

    const classes = classnames({
        [styles["button-toolbar"]]: true,
    })

    return (
        <div className={classes} {...baseButtonProps}>
            {children}
        </div>
    )
}

ButtonToolbar.propTypes = {
    children: PropTypes.node,
}

export default ButtonToolbar