import FormLogin from '../components/Fragments/FormLogin';
import AuthLayouts from '../components/Layouts/AuthLayouts';
import DontAccess from './dont-access';

const Home = () => {
    return (
        <>
            <AuthLayouts
                section='WELCOME'
                ketUser='Dont have an account?'
                link='/sign-up'
                ketLink=' Sign up'
            >
                <FormLogin />
            </AuthLayouts>

            <DontAccess />
        </>
    );
};

export default Home;
