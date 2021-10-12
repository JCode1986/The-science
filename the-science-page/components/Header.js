import React from 'react'
import Image from 'next/image';

export default function Header() {
    return (
        <header className="position-absolute pt-7 pb-7 pl-5 w-auto border-b-2 border-mediumgrey">
            <ul className="flex justify-end items-center">
                <div className="mr-auto ml-11">
                    <Image
                        src="/../public/helio-health.png"
                        width={159}
                        height={60}
                    />
                </div>
                    <li className="mr-10">
                        The Helio Liver Test
                    </li> 
                    <li className="mr-10">
                        Clinical Evidence
                    </li> 
                    <li className="mr-10">
                        Resources
                    </li> 
                    <div>
                        <button className="bg-orange text-white font-bold py-2 px-4 rounded">
                            Order Now
                        </button> 
                        <button className="border bg-white font-bold text-darkgrey py-2 px-4 rounded ml-5 mr-7">
                            Log In
                        </button> 
                    </div>
            </ul>
        </header>
    )
}
