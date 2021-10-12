import React from 'react'
import Image from 'next/image';

export default function Header() {
    return (
        <header className="position-absolute pt-5 pl-5 h-20 w-auto border-b-2 border-mediumgrey">
            <ul className="flex justify-around items-center">
                    <Image
                        src="/../public/helio-health.png"
                        width={159}
                        height={60}
                    />
                    <li>
                        The Helio Liver Test
                    </li> 
                    <li>
                        Clinical Evidence
                    </li> 
                    <li>
                        Resources
                    </li> 
                    <button className="bg-orange text-white font-bold py-2 px-4 rounded">
                        Order Now
                    </button> 
                    <button className="border bg-white font-bold text-darkgrey py-2 px-4 rounded">
                        Log In
                    </button> 
            </ul>
        </header>
    )
}
