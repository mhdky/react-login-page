import FormRegister from '../components/Fragments/FormRegister';
import AuthLayouts from '../components/Layouts/AuthLayouts';
import DontAccess from './dont-access';

const Register = () => {
    return (
        <>
            <AuthLayouts
                section='SIGN UP'
                ketUser='You have an account?'
                link='/'
                ketLink=' Sign in'
            >
                <FormRegister />
            </AuthLayouts>

            <DontAccess />
        </>
    );
};

export default Register;
