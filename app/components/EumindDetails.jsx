// pages/index.js
import Head from "next/head";

export default function EumindDetails() {
  return (
    <div className="lg:px-36 mx-auto px-6 py-12 pb-20">
      <Head>
        <title>
          EUMIND (Europe Meets India) - Bridging Cultures, Building Futures
        </title>
      </Head>

      {/* Header */}
      <h1 className="text-[24px] mb-8">
        <span className="font-light">EUMIND </span>
        <span className="font-bold">(Europe Meets India)</span>
        <span className="font-light">
          : Bridging Cultures, Building Futures
        </span>
      </h1>

      {/* Introduction Paragraph */}
      <p className="mb-12  lg:text-[20px]  leading-snug font-light ">
        Founded by visionary schools from Belgium, the Netherlands, and
        India—our school proudly being a founding member - EUMIND is a vibrant
        platform fostering cultural and educational exchanges between European
        and Indian schools. From a humble beginning of just 5 schools, EUMIND
        has blossomed into a thriving network of over 200 schools united by the
        spirit of collaboration and learning.
      </p>

      {/* Connection Section */}
      <h2 className="text-lg mb-8  lg:text-[20px]  leading-snug font-light ">
        Here's how we connect:
      </h2>

      {/* Two Column Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12 items-start justify-start">
        {/* Left Section */}
        <div className="flex flex-col">
          <h3 className="font-bold text-[24px]">E-Journal Project</h3>
          <p className="lg:text-[20px] leading-snug font-light pr-4">
            A digital bridge where students from across continents share ideas,
            publish articles, and engage in enriching video conferences—bringing
            minds together, one click at a time.
          </p>
        </div>

        {/* Right Section with Divider */}
        <div className="flex items-center gap-8 ">
          {/* Divider */}
          <div className="h-[180px] border-gray-600 border-r-[1px]  mr-4"></div>

          {/* Content */}
          <div className="flex flex-col">
            <h3 className="font-bold text-[24px]">Physical Exchange</h3>
            <p className="lg:text-[20px] leading-snug font-light lg:w-[472px]">
              The heart of EUMIND, where friendships cross borders. Each
              November, European students experience the vibrancy of our school,
              while our students get to explore European schools in May,
              embracing new cultures and creating memories for a lifetime.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Statement */}
      <p className=" lg:text-[20px]  leading-snug font-light ">
        At EUMIND, every connection is a step toward a brighter, interconnected
        world.
      </p>
    </div>
  );
}
