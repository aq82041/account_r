import React from 'react';
import cs from 'classnames';
require("icons/chart.svg");
require("icons/label.svg");
require("icons/money.svg");
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../icons', true, /\.svg$/));} catch (error) {console.log(error);}


type Props={
    name:string
}& React.SVGAttributes<SVGElement>
function Icon(props:Props){
    const {name,children,className,...rest}=props
    return (
        <svg className={cs('icon' , className)} {...rest}>
            <use xlinkHref={'#'+props.name}/>
        </svg>
    )
}
export default Icon