import React from 'react'
import Image from 'next/image';

export default function Trials() {
    return (
        <div>
            <span className="text-center">
                <h1 style={{fontSize:"36px", paddingBottom:"20px"}}>
                        Our Clinical Trials
                </h1>
                <p>
                    We are dedicated to making accurate early detection tests available for <br/>
                    more cancers. Helio is currently engaged in multiple pivotal, multi-center <br/>
                    trials in the US and China.
                </p>
                <p style={{fontSize:"16px", color:"#1588C5", paddingTop:"20px"}}>Learn more</p>
            </span>
            <div className="flex pt-10">
                <div>
                    <Image
                        src="/../public/climb.png"
                        width={292}
                        height={182}
                    />
                    <h3>
                        CLIMB
                    </h3>
                </div>
                <div>
                    <Image
                        src="/../public/fast.png"
                        width={450}
                        height={310}
                    />
                </div>
                <div>
                    <Image
                        src="/../public/encore.png"
                        width={450}
                        height={310}
                    />
                </div>
                <div>
                    <Image
                        src="/../public/hepatic.png"
                        width={450}
                        height={310}
                    />
                </div>
            </div>

        </div>
    )
}
