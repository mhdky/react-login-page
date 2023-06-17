import Input from './Input';
import Label from './Label';

const FormPage = (props) => {
    //eslint-disable-next-line react/prop-types
    const {htmlFor, label, type, name, id, placeholder, children, classname} = props;
    return (
        <div className={`w-full flex flex-col ${classname}`}>
            <Label htmlFor={htmlFor} label={label} />
            {/* container icon & input */}
            <div className={`border border-pink-primary w-full h-[33px] flex justify-between items-center px-3`}>
                {children}
                <Input type={type} name={name} id={id} placeholder={placeholder} />
            </div>
        </div>
    );
};

export default FormPage;
