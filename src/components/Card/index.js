import React from 'react'
import Button from '../Button'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

function Card(props) {
    const {
        title,
        children,
        actions,
        onClick,
        bordered,
        elevated,
        selected,
        ...baseDivProps
    } = props

    const classes = classnames({
        [styles.card]: true,
        [styles.interactable]: onClick != undefined,
        [styles["toolbar-border"]]: bordered,
        [styles.elevated]: elevated,
        [styles.selected]: selected
    })

    function HandleClick(e) {
        if (onClick) onClick(e);
    }

    return (
        <div className={classes} {...baseDivProps}>
            <div className={styles.interact} onClick={HandleClick}>
                {title && (
                    <div className={styles.toolbar}>
                        {title}
                    </div>
                )}

                <div className={styles.content}>
                    {children}
                </div>
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

Card.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.element)]),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.element)]),
    actions: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        look: PropTypes.oneOf(["filled", "outline", "outlined", "ghost", "text", "inverted"]),
        onClick: PropTypes.func
    })),
    elevated: PropTypes.bool,
    bordered: PropTypes.bool,
    selected: PropTypes.bool
}

Card.defaultProps = {
    children: [],
    actions: [],
    elevated: false,
    bordered: false,
    selected: false
}

export default Card