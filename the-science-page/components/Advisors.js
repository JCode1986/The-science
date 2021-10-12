import React from 'react'
import Image from 'next/image';

export default function Advisors() {
    return (
        <div style={{marginBottom:"254px"}}>
            <h1 className="text-center pt-20 pb-16"
                style={{fontSize:"36px",lineHeight: "46.8px"}}>
                    Our Scientific Advisors
            </h1>
            <div className="flex justify-center m-auto text-center"
                style={{marginLeft:"14.125rem", marginRight:"14.125rem"}}
            >
                <div className="mr-24">
                    <Image
                        src="/../public/image1.png"
                        width={170}
                        height={170}
                    />
                    <span className="text-center">
                        <p style={{fontSize:"16px", lineHeight:"22.4px", fontWeight: "bold"}}>Richard Van Etten, MD, PhD </p>
                        <p>Cheif Medical Officer</p>
                    </span>
                </div>
                <div className="mr-24">
                    <Image
                        src="/../public/image2.png"
                        width={170}
                        height={170}
                    />
                    <span className="text-center">
                        <p style={{fontSize:"16px", lineHeight:"22.4px", fontWeight: "bold"}}>Richard Van Etten, MD, PhD </p>
                        <p>Cheif Medical Officer</p>
                    </span>
                </div>
                <div className="mr-24">
                    <Image
                        src="/../public/image3.png"
                        width={170}
                        height={170}
                    />
                    <span className="text-center">
                        <p style={{fontSize:"16px", lineHeight:"22.4px", fontWeight: "bold"}}>Richard Van Etten, MD, PhD </p>
                        <p>Cheif Medical Officer</p>
                    </span>
                </div>
                <div>
                    <Image
                        src="/../public/image4.png"
                        width={170}
                        height={170}
                    />
                        <span className="text-center">
                        <p style={{fontSize:"16px", lineHeight:"22.4px", fontWeight: "bold"}}>Richard Van Etten, MD, PhD </p>
                        <p>Cheif Medical Officer</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
