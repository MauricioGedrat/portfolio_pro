import React, { ReactNode, useState } from 'react'
import styles from './header.module.scss'

interface Props {
    children: ReactNode
}

const ResponsiveNav = (props: Props) => {
    const [open, setOpen] = useState(true)

    return (
        <div>
            <nav className={`${styles.nav} ${open ? `${styles.active}` : ''}`}>
                <button
                    aria-label={open ? 'fechar menu' : 'abrir menu'}
                    title={open ? 'fechar menu' : 'abrir menu'}
                    className={`${styles.btnMobile} border-2 rounded-lg  duration-300 hover:bg-[#ffffff11] border-[#ffffff11] `}
                    aria-haspopup="true"
                    aria-controls="menu"
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    <span className={`${styles.hamburger} `}></span>
                </button>

                <ul
                    className={`${styles.menu} bg-nav md:mt-0 mt-2`}
                    role="menu"
                >
                    {props.children}
                </ul>
            </nav>
        </div>
    )
}

export default ResponsiveNav
