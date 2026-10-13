import banner from './banner-stack.png'
export default function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
      <div>
        <strong>
          <h1 className='text-5xl' style={{color:'black'}}>
          Build Your Ideal<span className="text-brand">dev stack</span>
        </h1>
        </strong>
        <p>
        Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#technologies" className="btn bg-brand rounded-full border-0 px-6 text-white">
            Explore Technologies
          </a>
          <a href="#about" className="btn btn-outline rounded-full border-2 px-6">
            Learn More
          </a>
        </div>
      </div>
      <div>
        <img src={banner} alt="" />
      </div>
    </section>
  );
}
