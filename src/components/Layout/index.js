import React, { Component, createRef } from 'react'
import MediaQuery from 'react-responsive'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

class Layout extends Component {
    static propTypes = {
        children: PropTypes.node,
        drawerOpen: PropTypes.bool,
        onClose: PropTypes.func,
        simple: PropTypes.bool
    }

    static defaultProps = {
        drawerOpen: false,
        onClose () {},
        simple: false
    }

    state = {
        isOpen: this.props.drawerOpen,
        scrim: this.props.drawerOpen,
        small: this.props.modal || false
    }

    scrim = createRef()

    constructor (props) {
        super(props)
    }

    handleScrim () {
        this.props.onClose()
    }

    componentDidUpdate (oldProps) {
        if (oldProps.drawerOpen != this.props.drawerOpen) {
            this.setState({ isOpen: this.props.drawerOpen })

            if (this.props.drawerOpen == false) {
                setTimeout(() => {
                    this.setState({ scrim: false })
                }, 200)
            } else {
                this.setState({ scrim: true })
            }
        }
    }

    componentDidMount () {
        let wait = setInterval(function(){
            if (this.scrim.current != undefined) {
                //this.setState({ isOpen: true })
                this.scrimListener = this.scrim.current.addEventListener("click", this.handleScrim.bind(this))
                clearInterval(wait)
            }
        }.bind(this), 100)
    }

    componentWillUnmount () {
        this.scrim.removeEventListener("click", this.scrimListener)
    }

    render () {
        const {
            drawerOpen,
            children,
            simple,
            ...baseDivProps
        } = this.props

        let isSmall = this.state.small

        const classes = classnames({
            [styles.layout]: true,
            [styles["scrim-open"]]: this.state.scrim,
            [styles["drawer-open"]]: this.state.isOpen,
            [styles["small"]]: isSmall,
            [styles.simple]: simple
        })
    
        return (
            <div className={classes} {...baseDivProps}>
                <MediaQuery maxWidth={1023} onChange={(m) => { if (this.state.small != m) this.setState({ small: m }) }} children={null} />
                <div className={styles["drawer-scrim"]} ref={this.scrim} />
                {children}
            </div>
        )
    }
}

Layout.Drawer = function(props) {
    const {
        children,
        ...baseDivProps
    } = props

    const classes = classnames({
        [styles.drawer]: true,
    })

    return (
        <div className={styles["drawer-frame"]}>
            <aside className={classes} {...baseDivProps}>
                {children}
            </aside>
        </div>
    )
}

Layout.Content = function(props) {
    const {
        children,
        ...baseDivProps
    } = props

    const classes = classnames({
        [styles.content]: true,
    })

    return (
        <main className={classes} {...baseDivProps}>
            {children}
        </main>
    )
}

export default Layout