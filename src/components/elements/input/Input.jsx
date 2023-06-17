const Input = (props) => {
    //eslint-disable-next-line react/prop-types
    const { type, name, id, placeholder } = props;
    return (
        <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            className='w-full flex-[2] bg-transparent outline-none placeholder:text-pink-primary'
        />
    );
};

export default Input;
