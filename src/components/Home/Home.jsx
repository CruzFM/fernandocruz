import profilePic from '../../images/profilePic.jpg'

export default function Home(){
    return(
        <>
            <section className="h-2/3 md:h-screen bg-red-200 my-0 mx-auto">
                <div className="flex w-10/12 mx-auto my-0 flex-col items-center justify-center md:flex-row md:h-screen border-solid border-white border md:justify-between">

                    <div className="py-3 border-solid border-white border w-full flex items-center justify-center">
                        <img src={profilePic} className="max-w-full w-52 md:w-80 rounded-full" alt='picsum'/>
                    </div>
                    <div className='w-full  border-solid border-white border p-10'>
                        <h1 className='font-bold text-3xl md:text-5xl'>Front end developer, former lawyer, enthusiastic professional.</h1>
                    </div>

                </div>
            </section>

            <section className='h-75vh  bg-red-400 my-0 mx-auto aboutMe'>
                <div className="flex h-75vh w-10/12 mx-auto my-0 flex-col items-center border-solid border-white border ">
                    <div className="py-3 border-solid border-white border w-full flex items-center justify-center">
                        <h2 className='text-3xl md:text-4xl font-medium text-center'>About me in 10 seconds:</h2>
                    </div>
                    <div className=' border-black border w-full bg-red-600 overflow-y-scroll md:overflow-auto md:w-3/4'>
                        <p className='py-2 text-base md:text-lg'>Hi there, I'm Fernando! I'm a self-taught front end developer from Argentina.</p>
                        <p className='py-2 text-base md:text-lg'>Right now, I work as a Lawyer for my city's Government department, but I want to make a full career switch and break into the tech industry.</p>
                        <p className='py-2 text-base md:text-lg'>But you may wonder, why? Why switch careers after a short, but succesful career as a Lawyer? Well, it's because technology has something that you can't find in laws: it evolves according to our imagination, our dreams, our needs, and it evolves REALLY fast.</p>
                        <p className='py-2 text-base md:text-lg'>I may have a lot to learn, but I'm gonna give my everything in order to help the team and become a valuable and trustworthy member of it.</p>
                    </div>
                </div>

            </section>
        </>
    )
}