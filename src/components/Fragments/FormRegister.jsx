import Button from "../elements/Button";
import FormPage from "../elements/input";

const FormRegister = () => {
    return (
        <form className='w-full flex flex-col mt-7'>
            {/* email */}
            <FormPage
                htmlFor='email'
                label='Email'
                type='email'
                name='email'
                id='email'
                placeholder='Insert your mail'
            >
                <i className='fa-solid fa-at mr-3'></i>
            </FormPage>

            {/* password */}
            <FormPage
                htmlFor='password'
                label='Password'
                type='password'
                name='password'
                id='password'
                placeholder='Insert your password'
                classname='mt-7'
            >
                <i className='fa-solid fa-lock mr-3'></i>
            </FormPage>

            {/* confirm password */}
            <FormPage
                htmlFor='confirm_password'
                label='Confirm Password'
                type='password'
                name='confirm_password'
                id='confirm_password'
                placeholder='Confirm your password'
                classname='mt-7'
            >
                <i className='fa-solid fa-lock mr-3'></i>
            </FormPage>

            {/* button */}
            <Button>Sign up</Button>
        </form>
    );
};

export default FormRegister;
