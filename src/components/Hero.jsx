function Hero() {
    return(
        <div className="h-3/5 md:h-screen px-8 md:px-32 pt-11 md:pt-40 py-16 border border-black flex flex-col gap-2">
            <h1 className="text-4xl md:text-7xl font-extrabold text-primary-color">Fernando Martin Cruz</h1>
            <h2 className="text-xl md:text-4xl font-semibold">Software developer</h2>
            <p className="text-normal md:text-2xl font-normal mt-2.5">Coding with passion, delivering with precision.</p>
            <button type="button" className="btn-primary w-48 py-2 md:py-4 md:px-5 btn rounded-none mt-2.5 font-semibold flex justify-center items-center">Selected projects</button>
        </div>
    );
}

export default Hero;