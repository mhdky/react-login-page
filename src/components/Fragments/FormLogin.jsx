import Button from "../elements/Button";
import RememberMe from "../elements/RememberMe";
import FormPage from "../elements/input";

const FormLogin = () => {
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

            {/* remember me & forgot password */}
            <RememberMe></RememberMe>

            {/* button */}
            <Button>Sign in</Button>

            <Button classname='bg-[#FAAAED] flex justify-center items-center mt-4'>
                <img
                    src='img/Google__G__Logo.svg.png'
                    alt='google'
                    className='w-4 mr-3'
                />
                <p className='text-slate-950'>Sign in with google</p>
            </Button>
        </form>
    );
};

export default FormLogin;
