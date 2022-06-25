import HeroSvg from 'common/svgIcons/HeroSvg'
import Image from 'next/image'
import React from 'react'

import GatoImg from '../../assets/images/gato.jpg'

const Hero = () => {
    return (
        <div className="flex items-center justify-center xl:h-screen">
            <main className="grid mt-10 xl:mt-0 gap-14 xl:grid-cols-2">
                <div className="flex justify-center">
                    <HeroSvg />
                </div>
                <div>
                    <h1 className="text-3xl text-center sm:text-4xl font-kdam">
                        Olá, Eu sou Maurício Gedrat
                    </h1>
                    <main className="bg-[#00000036] p-4 mt-10 rounded-lg sm:flex gap-20">
                        <div className="flex justify-center sm:justify-start">
                            <Image
                                src={GatoImg}
                                alt="gato"
                                className="max-w-full rounded-full sm:rounded-lg "
                            />
                        </div>
                        <div className="flex justify-center sm:justify-start">
                            efewfeewf
                        </div>
                    </main>
                </div>
            </main>
        </div>
    )
}

export default Hero
