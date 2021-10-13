import React from 'react'
import Image from 'next/image';
import styles from './trials.module.css';

export default function Trials() {
    return (
        <div className="pb-32">
            <span className="text-center">
                <h1 style={{fontSize:"36px", paddingBottom:"20px"}}>
                        Our Clinical Trials
                </h1>
                <p>
                    We are dedicated to making accurate early detection tests available for <br/>
                    more cancers. Helio is currently engaged in multiple pivotal, multi-center <br/>
                    trials in the US and China.
                </p>
                <p className="pl-3 pt-3 text-sm text-learnMoreColor">Learn more</p>
            </span>
            <div className="flex pt-10 justify-center ml-28 mr-28">
                <div className="mr-4 w-72" style={{border:"1px solid grey"}}>
                    <Image
                        src="/../public/climb.png"
                        width={292}
                        height={182}
                    />
                    <h3 className="pl-3 pt-2 pb-1 text-lg font-medium">
                        CLIMB
                    </h3>
                    <div className="pl-3 text-sm text-recruitingColor">
                        Recruiting
                    </div>
                    <p className="pl-3 text-sm pt-2">
                        A multi-center, prospective study <br/> conducted in the US to compare <br/> the sensitivity
                        and specificity of the <br/> Helio Liver Test with ultrasound <br/> within a population
                        at high risk of <br/> HCC due to liver cirrhosis. 
                    </p>
                    <p className="pl-3 pt-3 text-xs text-learnMoreColor pb-6">Learn more</p>
                </div>
                <div className="mr-4 w-72" style={{border:"1px solid grey"}}>
                    <Image
                        src="/../public/fast.png"
                        width={292}
                        height={182}
                    />
                    <h3 className="pl-3 pt-2 pb-1 text-lg font-medium">
                        FAST
                    </h3>
                    <div className="pl-3 pl-3 text-sm text-recruitingColor">
                        Recruiting
                    </div>
                    <p className="pl-3 text-sm pt-2">
                        A prospective RO1 study sponsored <br/> by NCI in collaboration with  <br/> 
                        Mount Sinai and other medical <br/> institutions on the US to evaluate <br/>
                        novel screening modalities and <br/> biomalers.
                    </p>
                    <p className="pl-3 pt-3 text-xs text-learnMoreColor">Learn more</p>
                </div>
                <div className="mr-4 w-72" style={{border:"1px solid grey"}}>
                    <Image
                        src="/../public/encore.png"
                        width={292}
                        height={182}
                    />
                    <h3 className="pl-3 pt-2 pb-1 text-lg font-medium">
                        ENCORE
                    </h3>
                    <p className="pl-3 text-sm text-learnMoreColor">
                        Completed
                    </p>
                    <p className="pl-3 text-sm pt-2">
                        A prospective RO1 study sponsored <br/> by NCI in collaboration with  <br/> 
                        Mount Sinai and other medical <br/> institutions on the US to evaluate <br/>
                        novel screening modalities and <br/> biomalers.
                    </p>
                    <p className="pl-3 pt-3 text-xs text-learnMoreColor">Learn more</p>
                </div>
                <div className="w-72" style={{border:"1px solid grey"}}>
                    <Image
                        src="/../public/hepatic.png"
                        width={292}
                        height={182}
                    />
                    <h3 className="pl-3 pt-2 pb-1 text-lg font-medium">
                        HEPATIC
                    </h3>
                    <div className="pl-3 pl-3 text-sm text-darkgrey">
                        In Progress
                    </div>
                    <p className="pl-3 text-sm pt-2">
                        A prospective RO1 study sponsored <br/> by NCI in collaboration with  <br/> 
                        Mount Sinai and other medical <br/> institutions on the US to evaluate <br/>
                        novel screening modalities and <br/> biomalers.
                    </p>
                    <p className="pl-3 pt-3 text-xs text-learnMoreColor">Learn more</p>
                </div>
            </div>

        </div>
    )
}
