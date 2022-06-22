import Image from 'next/image'
import React from 'react'
import Img from '../../assets/images/hero-img.svg'
import GatoImg from '../../assets/images/gato.jpg'

const Hero = () => {
    return (
        <div className="flex items-center justify-center">
            <main className="gap-10 grid xl:grid-cols-2  mt-[60px]">
                <div>
                    <Image src={Img} alt="hero image" className="m-6" />
                </div>
                <div>
                    <h1 className="text-4xl font-kdam">
                        Olá, Eu sou Maurício Gedrat
                    </h1>
                    <main className="bg-[#00000036] p-4 mt-10 rounded-lg">
                        <span>
                            <Image
                                src={GatoImg}
                                alt="gato"
                                className="rounded-lg"
                            />
                        </span>
                    </main>
                </div>
            </main>
        </div>
    )
}

export default Hero