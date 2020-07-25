import React, { Component } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

class Typography extends Component {
    render () {
        const {
            style,
            ...baseProps
        } = this.props

        const classes = classnames({
            [styles[`typography-${style}`]]: true
        })

        return (
            <div className={classes} {...baseProps}>
                {this.props.children}
            </div>
        )
    }
}

Typography.propTypes = {
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
        "overline"
    ])
}

Typography.defaultProps = {
    type: "body1"
}

export default Typography