import React from "react"

interface Props extends React.HtmlHTMLAttributes<HTMLLabelElement> { }

function Label({ children, ...props }: Props) {
    return (
        <label
            {...props}
            className="text-gray-900 text-sm text text-left"
        >
            {children}
        </label>
    )
}

export default Label