function Hero() {
    return(
        <div className="h-3/5 px-8 pt-11 py-16 border border-black flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold text-primary-color">Fernando Cruz</h1>
            <h2 className="text-xl font-semibold">Software developer</h2>
            <p className="text-normal font-normal mt-2.5">Coding with passion, delivering with precision.</p>
            <button type="button" className="btn-primary w-44 pr-6 pl-0.5 py-2 rounded-md mt-2.5">Selected projects</button>
        </div>
    );
}

export default Hero;