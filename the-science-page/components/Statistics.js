import React from 'react'
import Image from 'next/image';

export default function Statistics() {

    const circle = {
        display: "flex",
        width: "219.67px",
        height: "219.67px",
        borderRadius: "50%",
        paddingBottom: "47.73",
        border:"10px solid #EDEEEF"
    };

    return (
        <div className="flex mt-4 bg-statisticsBgColor">
            <div className="flex-50% text-left mt-5" 
            style={{ height: '733px', width: '1440px'}}>
                <div className="pt-32 pl-28">
                    <h1 style={{
                        fontSize:"36px",
                        lineHeight: "46.8px"
                    }}>Elevating the Standard of <br/>Care</h1>
                    <div
                    className="pb-6 pt-6 text-darkgrey"
                    style={{
                        fontSize: '20px',
                        lineHeight: '28.2px'
                    }}
                    >
                        <p>
                            The HelioLiver test delivers superior performance <br/>
                            characteristics when compared to traditional blood tests <br/>
                            for hepatocellular carcinoma.
                        </p>
                        <p className="pt-6">
                            Our recent data indicates Helio's HCC-specific test has a <br/>
                            higher sensitivity (77.8%, 95%, CI: 76.1-79.5%) at 95% <br/>
                            specificity for stage-1 HCC than the AFP (44.6%, 95% CI:<br/>
                            38-50.7%) 
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 py-32 text-center gap-7 mr-32">
                <Image
                        src="/../public/helio-health.png"
                        width={159}
                        height={60}
                />
                <h3 className="p-2 font-medium">Standard of Care: <br/> Ultrasound</h3>
                <div className="p-2"style={circle}>
                    <span className="m-auto text-center">
                        <h3 style={{fontSize:"52px"}}>60%</h3>
                        <p>Sensitivity for <br/>
                        Small Lesions <br/>
                        {"<2cm"}
                        </p>
                    </span>   
                </div>
                <div className="p-2"style={circle}>
                    <span className="m-auto text-center">
                        <h3 style={{fontSize:"52px"}}>20%</h3>
                        <p>Sensitivity for<br/>
                            Small Lesions <br/>
                            {"<2cm"}
                        </p>
                    </span>   
                </div>
                <div className="p-2" style={circle}>
                    <span className="m-auto text-center">
                        <h3 style={{fontSize:"52px"}}>85%</h3>
                        <p>Sensitivity for All<br/> Cancers
                        </p>
                    </span>   
                </div>
                <div className="p-2" style={circle}>
                    <span className="m-auto text-center">
                        <h3 style={{fontSize:"52px"}}>47%</h3>
                        <p>Sensitivity for All<br/>
                        Cancers <br/>
                        </p>
                    </span>   
                </div>
            </div>
        </div>
    )
}
