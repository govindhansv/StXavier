// pages/index.js
import Head from "next/head";

export default function EumindDetails() {
  return (
    <div className="lg:px-40 mx-auto px-6 py-12 text-gray-700">
      <Head>
        <title>
          EUMIND (Europe Meets India) - Bridging Cultures, Building Futures
        </title>
      </Head>

      {/* Header */}
      <h1 className="text-2xl mb-8">
        <span className="font-normal">EUMIND </span>
        <span className="font-medium">(Europe Meets India)</span>
        <span className="text-gray-500">
          : Bridging Cultures, Building Futures
        </span>
      </h1>

      {/* Introduction Paragraph */}
      <p className="mb-12 leading-relaxed text-gray-600">
        Founded by visionary schools from Belgium, the Netherlands, and
        India—our school proudly being a founding member - EUMIND is a vibrant
        platform fostering cultural and educational exchanges between European
        and Indian schools. From a humble beginning of just 5 schools, EUMIND
        has blossomed into a thriving network of over 200 schools united by the
        spirit of collaboration and learning.
      </p>

      {/* Connection Section */}
      <h2 className="text-lg mb-8">Here's how we connect:</h2>

      {/* Two Column Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* E-Journal Project */}
        <div>
          <h3 className="font-medium text-xl mb-4">E-Journal Project</h3>
          <p className="text-gray-600 leading-relaxed">
            A digital bridge where students from across continents share ideas,
            publish articles, and engage in enriching video conferences—bringing
            minds together, one click at a time.
          </p>
        </div>

        {/* Physical Exchange */}
        <div>
          <h3 className="font-medium text-xl mb-4">Physical Exchange</h3>
          <p className="text-gray-600 leading-relaxed">
            The heart of EUMIND, where friendships cross borders. Each November,
            European students experience the vibrancy of our school, while our
            students get to explore European schools in May, embracing new
            cultures and creating memories for a lifetime.
          </p>
        </div>
      </div>

      {/* Footer Statement */}
      <p className="text-gray-600 italic">
        At EUMIND, every connection is a step toward a brighter, interconnected
        world.
      </p>
    </div>
  );
}
