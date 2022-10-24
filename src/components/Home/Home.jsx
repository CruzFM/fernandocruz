import profilePic from '../../images/profilePic.jpg'

export default function Home(){
    return(
        <>
            <section className="h-screen bg-red-200 my-0 mx-auto">
                <div className="flex w-10/12 mx-auto my-0 flex-col items-center justify-center md:flex-row  h-screen border-solid border-white border md:justify-between">

                    <div className="py-3 border-solid border-white border w-full flex items-center justify-center">
                        <img src={profilePic} className="max-w-full w-52 rounded-full" alt='picsum'/>
                    </div>
                    <div className='w-full  border-solid border-white border w-full'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aspernatur totam in qui soluta praesentium rem, voluptates nesciunt dolores vero nostrum minima sit? Voluptates officia incidunt tempore laboriosam ipsam magnam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatibus vitae, sit in minus omnis ipsa</p> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatibus vitae, sit in minus omnis ipsa</p> 
                    </div>

                </div>
            </section>

            <section className='h-screen bg-red-400 my-0 mx-auto"'>

            </section>
        </>
    )
}