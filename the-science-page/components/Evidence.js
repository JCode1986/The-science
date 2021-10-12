import React from 'react'
import Image from 'next/image';

export default function Header() {
    return (
        <div className="flex pt-8">
            <div className="flex-60% text-left"
                style={{
                    paddingLeft: '122px'
                }}
            >
               <h1 className="text-5xl mb-4"
                style={{
                    paddingTop: '107px'
                }}
               >Clinical Evidence</h1>
               <p> 
                   The HelioLiver test delivers superior performance charactersitics when <br/>
                   compared to traditional testing for HCC
                </p>
            </div>
            <div className="mr-7">
            <Image
                src="/../public/microscope.png"
                width={582.14}
                height={382.09}
            />
            </div>
        </div>
    )
}