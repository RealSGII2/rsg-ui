import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

function Typography(props) {
    const {
        type,
        children,
        ...baseProps
    } = props

    const classes = classnames({
        [styles[`typography-${type}`]]: true,
    })

    return (
        <div className={classes} {...baseProps}>
            {children}
        </div>
    )
}

Typography.Span = function(props) {
    const {
        type,
        children,
        ...baseProps
    } = props

    const classes = classnames({
        [styles[`typography-${type}`]]: true,
    })

    return (
        <span className={classes} {...baseProps}>
            {children}
        </span>
    )
}

const props = {
    type: PropTypes.oneOf([
        "h1",
        "heading1",
        "h2",
        "heading2",
        "h3",
        "heading3",
        "h4",
        "heading4",
        "h5",
        "heading5",
        "h6",
        "heading6",
        "sh1",
        "subheading1",
        "sh2",
        "subheading2",
        "body1",
        "body2",
        "button",
        "caption",
        "overline",
        "label"
    ])
}

const def = {
    type: "body"
}

Typography.propTypes = props
Typography.defaultProps = def

Typography.Span.propTypes = props
Typography.Span.defaultProps = def

export default Typography