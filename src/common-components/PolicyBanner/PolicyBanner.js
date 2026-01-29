import React from 'react'
import Link from "next/link";

const PolicyBanner = ({ title, title2, breadcom = [], paraghraph, tagline }) => {

    return (
      <div  style={{background:"#101d22"}}>

            <div className="custom-container flex   items-end pb-7">
                <div className="w-full p-2">
                    <h1 className="text-[#cd6632] font-dm text-center responsive-heading font-medium leading-tight">{title}</h1>
                    <p className="text-[#cd6632] font-dm text-center responsiveheading2 font-medium leading-tight mt-3">{title2}</p>
                    <p className="text-[#cd6632] font-dm text-center responsive-text font-medium leading-tight mt-3">{paraghraph}</p>
                    <p className="text-red-500 font-dm text-center responsive-text font-medium leading-tight mt-3">{tagline}</p>
                    {breadcom?.length > 0 && (
                        <div className="flex text-center w-fit m-auto mt-3 ">
                            <Link href="/" aria-label="home icon" className="font-dm text-[15px]  text-[#cd6632] transition-colors px-2  hover:text-[#aa8657]">
                                {` Home`}
                            </Link>
                            {breadcom?.map((item, index) => {
                                return (
                                    <React.Fragment key={index} >
                                        <span className="text-[#cd6632]"> / </span>
                                        {item?.url ? (
                                            <Link
                                                href={item?.url}
                                                className="font-dm text-[15px] text-[#cd6632] hover:text-[#aa8657] transition-colors px-2 ">
                                                {item.title}
                                            </Link>
                                        ) : (
                                            <span className="font-dm text-[15px] px-2 text-[#cd6632]">
                                                {item.title}
                                            </span>
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PolicyBanner