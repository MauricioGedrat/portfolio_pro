import Logo from 'common/svgIcons/Logo'
import React from 'react'
import { links } from './links'
import ResponsiveNav from './ResponsiveNav'

const Header = () => {
    return (
        <div className="p-4 bg-[#00000036] border-b-4 border-[#ffffff11]">
            <nav className="flex flex-wrap items-center justify-around">
                <div>
                    <Logo />
                </div>
                <ResponsiveNav>
                    <div className="flex flex-wrap">
                        {links.map((item, index) => {
                            return (
                                <ul key={index}>
                                    <li className="ml-4 ">
                                        <div>
                                            <a
                                                href={item.href}
                                                className="p-3 font-kdam  border-4 border-[#ffffff11] rounded-md duration-300 hover:bg-[#ffffff11]"
                                            >
                                                {item.link}
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            )
                        })}
                    </div>
                </ResponsiveNav>
            </nav>
        </div>
    )
}

export default Header
