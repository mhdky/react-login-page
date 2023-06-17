const Button = (props) => {
    //eslint-disable-next-line react/prop-types
    const {classname = 'w-full bg-pink-600 mt-7', children, type = 'submit'} = props
    return (
        <button type={type} disabled className={`w-full h-[33px] cursor-pointer ${classname}`}>{children}</button>
    )
}

export default Button;