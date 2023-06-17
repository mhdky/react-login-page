const Label = (props) => {
    //eslint-disable-next-line react/prop-types
    const {htmlFor, label} = props;

    return (
        <label htmlFor={htmlFor} className="font-bold mb-3">{label}</label>
    )
} 

export default Label