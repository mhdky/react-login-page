const RememberMe = () => {
    return (
        <div className='w-full flex justify-between items-center mt-7 '>
            <div className='flex'>
                <input
                    type='checkbox'
                    name='remember'
                    id='remember'
                    className='w-5 h-5 mr-3'
                />
                <label htmlFor='remember' className='cursor-pointer'>
                    Remember me
                </label>
            </div>

            <p className='cursor-pointer'>Forgot Password</p>
        </div>
    );
};

export default RememberMe;