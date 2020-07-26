import React, { Component } from 'react'
import Typography from '../Typography'
import Utils from '../../utils/types'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

function List (props) {
    const {
        children,
        look,
        ...baseDivProps
    } = props

    const classes = classnames({
        [styles.list]: true,
        [styles[`look-${look}`]]: true
    })

    return (
        <div className={classes} {...baseDivProps}>
            {children}
        </div>
    )
}

List.propTypes = {
    look: PropTypes.oneOf(["block", "menu", "rounded"])
}

List.defaultProps = {
    look: "block"
}

List.Item = class extends Component {
    state = {
        active: this.props.active
    }

    propTypes = {
        active: PropTypes.bool,
    }

    defaultProps = {
        active: false,
    }

    componentDidUpdate (oldProps) {
        if (oldProps.active != this.props.active) {
            this.setState({
                active: this.props.active
            })
        }
    }

    render () {
        const {
            children,
            active,
            ...baseDivProps
        } = this.props
    
        const classes = classnames({
            [styles["list-item"]]: true,
            [styles.active]: this.state.active
        })
    
        return (
            <div className={classes} {...baseDivProps}>
                {children}
            </div>
        )
    }
}

export default List