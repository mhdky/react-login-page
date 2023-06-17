import { Link } from "react-router-dom";
import Logo from "../elements/Logo";

const AuthLayouts = (props) => {
    const {children, section, ketUser, link, ketLink} = props;
    return (
        <div className='w-full h-screen flex'>
                <div className='bg-pink-500 w-1/2 h-full'>
                    <img
                        src='img/62949127d4865.jpg'
                        alt='mina'
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='bg-pink-700 w-1/2 h-full relative'>
                    {/* logo */}
                    <Logo></Logo>

                    {/* pembungkus form */}
                    <div className='w-full h-full flex justify-center items-center'>
                        <div className='w-[75%]'>
                            <h1 className='text-[32px] font-bold'>{section}</h1>
                            <p className='text-lg font-bold'>
                                Please enter your details
                            </p>

                            {children}
                        </div>
                    </div>

                    <p className='text-slate-950 absolute bottom-5 left-1/2 -translate-x-1/2'>
                        {ketUser}{' '}
                        <span className='text-pink-primary'>
                            <Link to={link}>{ketLink}</Link>
                        </span>
                    </p>
                </div>
            </div>
    )
}

export default AuthLayouts;