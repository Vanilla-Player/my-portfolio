

import React from "react";
import Image from "next/image";


interface Icon {
    srcImage:any
}

const Icon:React.FC<Icon> = (props) =>{
    const {srcImage} = props    

    return(
        <a href="https://www.facebook.com/capo3001/" className="">
            <Image src={srcImage} alt="Icon" width={50} height={50} className="rounded-full bg-white border-2 hover:shadow-lg hover:shadow-white"/>

        </a>
    )
}


export default Icon 