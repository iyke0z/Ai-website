import React from "react"
import ButtonSvg from "../assets/svg/ButtonSvg"

const Button = ({className, href, onClick, children, px, white}) => {
    // Define button classes based on props
    const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 
    ${px || 'px-7'} ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

    const spanClasses = 'relative z-10'

    // Render a <button> element
    const renderButton = () => {
        return (
            <button className={classes} onClick={onClick}>
                <span className={spanClasses}>{children}</span>
                {ButtonSvg(white)}
            </button>
        )
    }

    // Render an <a> (link) element
    const renderLink = () => {
        return (
            <a href={href} className={classes}>
                <span className={spanClasses}>{children}</span>
                {ButtonSvg(white)}
            </a>
        )
    }

    // Render either a button or link based on the presence of 'href'
    return href ? renderLink() : renderButton()
}

export default Button
