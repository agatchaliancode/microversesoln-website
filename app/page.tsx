import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

    <section id="home" className="px-6 py-20 text-center">
        <h1 className="text-6xl font-bold mb-6 leading-tight">
  Accelerate Business Growth with
        <span className="block text-sky-400">
          AI, Analytics & Automation
        </span>
      </h1>

      <p className="text-xl text-slate-300 max-w-4xl mx-auto">
        Microverse Solutions helps small businesses streamline operations,
        unlock actionable insights, and leverage enterprise-grade technology
        without enterprise-grade costs.
      </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
              href="/solutions"
              className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Solutions
            </a>

            <a
              href="/contact"
              className="border border-slate-500 hover:border-sky-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule a Consultation
            </a>
        </div>
        
        <div className="mt-12 flex justify-center gap-8 text-slate-400 text-sm flex-wrap">
          <span>✓ AI Solutions</span>
          <span>✓ Business Intelligence</span>
          <span>✓ Process Automation</span>
          <span>✓ Custom Applications</span>
        </div>

      </section>

      <section id="solutions" className="px-6 py-16 bg-slate-900">

        <h2 className="text-4xl font-bold text-center mb-4">
          How We Help Businesses Grow
        </h2>

        <p className="text-center text-slate-300 max-w-3xl mx-auto mb-12">
          From automation and business intelligence to
          custom applications and AI-powered solutions,
          we help organizations work smarter and grow faster.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <a href="/solutions">
            <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                      <h3 className="text-xl font-bold mb-3">
                Automation
              </h3>
              <p>
                Streamline operations through workflow automation.
              </p>
            </div>
          </a>

          <a href="/solutions">
            <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <h3 className="text-xl font-bold mb-3">
              Analytics
            </h3>
            <p>
              Turn business data into actionable insights.
            </p>
          </div>
          </a>

          <a href="/solutions">
            <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-bold mb-3">
              Business Intelligence
            </h3>
            <p>
              Interactive Power BI dashboards and KPI reporting.
            </p>
          </div>
          </a>

          <a href="/solutions">
            <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-bold mb-3">
              Artificial Intelligence
            </h3>
            <p>
              AI-powered solutions for smarter business decisions.
            </p>
          </div>
          </a>

        </div>
      </section>
    </main>
  );
}