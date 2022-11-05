import profilePic from '../../images/profilePic.jpg'

export default function Home(){
    return(
        <>
            <section className="w-full h-2/3 md:h-screen  my-0 mx-auto">
                <div className="flex w-10/12 mx-auto my-0 flex-col items-center justify-center md:flex-row-reverse md:h-screen border-solid border-white border md:justify-between">

                    <div className='w-full  border-solid border-white border p-10'>
                        <h1 className='text-3xl md:text-7xl text-center md:text-left'>Fernando Cruz </h1>
                        <p className='text-2xl md:text-5xl text-center md:text-left'>Front End Dev</p>
                    </div>
                    <div className="py-3 border-solid border-white border w-full flex items-center justify-center">
                        <img src={profilePic} className="max-w-full w-52 md:w-80 rounded" alt='picsum'/>
                    </div>

                </div>
            </section>

            <section className='h-75vh   my-0 mx-auto aboutMe'>
                <div className="flex h-75vh w-10/12 mx-auto my-0 flex-col items-center border-solid border-white border ">
                    <div className="py-3 border-solid border-white border w-full flex items-center justify-center">
                        <h2 className='text-3xl md:text-4xl font-medium text-center'>About me in 10 seconds:</h2>
                    </div>
                    <div className=' border-black border w-full  md:w-3/4'>
                        <p className='py-2 text-base md:text-3xl'>Hi there, I'm Fernando! I'm a self-taught front end developer from Argentina.</p>
                        <p className='py-2 text-base md:text-3xl'>Right now, I work as a Lawyer for my city's Government department, but I want to make a full career switch and break into the tech industry.</p>
                        {/* <p className='py-2 text-base md:text-lg'>But you may wonder, why? Why switch careers after a short, but succesful career as a Lawyer? Well, it's because technology has something that you can't find in laws: it evolves according to our imagination, our dreams, our needs, and it evolves REALLY fast.</p> */}
                        <p className='py-2 text-base md:text-3xl'>Why I'm a great asset to your team? Because my main goal is to participate in challenging projects alongside a team whose main focus is collaboration and team work.</p>
                    </div>
                </div>

            </section>
        </>
    )
}