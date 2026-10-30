import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

    <section id="home" className="px-6 py-24 text-center">
        <h1 className="text-6xl font-bold mb-6">
          Microverse Solutions
        </h1>

        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Empowering Micro Businesses Through AI,
          Analytics, and IT Innovation.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-sky-500 px-6 py-3 rounded-lg font-semibold">
            Explore Solutions
          </button>

          <button className="border border-slate-500 px-6 py-3 rounded-lg font-semibold">
            Contact Us
          </button>
        </div>
      </section>

      <section id="solutions" className="px-6 py-20 bg-slate-900">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              Automation
            </h3>
            <p>
              Streamline operations through workflow automation.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              Analytics
            </h3>
            <p>
              Turn business data into actionable insights.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              Business Intelligence
            </h3>
            <p>
              Interactive Power BI dashboards and KPI reporting.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              Artificial Intelligence
            </h3>
            <p>
              AI-powered solutions for smarter business decisions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}