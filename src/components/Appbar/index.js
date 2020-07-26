import React from 'react'
import MenuIcon from 'mdi-react/MenuIcon'
import Spacer from '../Spacer'
import Utils from '../../utils/types'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

function Appbar(props) {
    const {
        title,
        showMenu,
        onMenuClick,
        children,
        ...baseDivProps
    } = props

    const classes = classnames({
        [styles.appbar]: true,
    })

    return (
        <header className={classes}>
            {showMenu && (
                <button className={styles["menu-button"]} onClick={onMenuClick}>
                    <MenuIcon />
                </button>
            )}
            <div className={styles.title}>
                {title}
            </div>
            <Spacer />
            {children}
        </header>
    )
}

Appbar.propTypes = {
    title: PropTypes.string.isRequired,
    showMenu: PropTypes.bool,
    onMenuClick: PropTypes.func
}

Appbar.defaultProps = {
    showMenu: false,
    onMenuClick () {}
}

export default Appbar