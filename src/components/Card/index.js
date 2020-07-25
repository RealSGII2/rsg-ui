import React, { Component } from 'react'
import Button from '../Button'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

class Card extends Component {
    render () {
        const {
            title,
            children,
            actions,
            ...baseDivProps
        } = this.props

        const classes = classnames({
            [styles.card]: true
        })

        return (
            <div className={classes} {...baseDivProps}>
                {title && (
                    <div className={styles.toolbar}>
                        {title}
                    </div>
                )}

                <div className={styles.content}>
                    {this.props.children}
                </div>

                {actions.length > 0 && (
                    <div className={styles.actions}>
                        {actions.map(action => (
                            <Button key={Math.floor(Math.random() * 999999999999999999999)} label={action.label} onClick={action.onClick} look={action.look} />
                        ))}
                    </div>
                )}
            </div>
        )
    }
}

Card.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.element)]),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.element)]),
    actions: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        look: PropTypes.oneOf(["filled", "outline", "outlined", "ghost", "text", "inverted"]),
        onClick: PropTypes.func
    }))
}

Card.defaultProps = {
    children: [],
    actions: []
}

export default Card