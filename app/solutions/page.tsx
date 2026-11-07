export default function Solutions() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="px-6 py-20 text-center">
        <h1 className="text-6xl font-bold mb-6">
          Solutions
        </h1>

        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Helping businesses streamline operations,
          improve decision-making, and accelerate growth
          through AI, Analytics, and Automation.
        </p>
      </section>

      <section
        id="automation"
        className="px-6 py-16 bg-slate-900"
      >
        <h2 className="text-4xl font-bold mb-4">
          Business Process Automation
        </h2>

        <p className="text-slate-300 max-w-4xl">
          Eliminate repetitive tasks, improve efficiency,
          and streamline operations using automated workflows
          powered by Microsoft Power Platform and modern cloud technologies.
        </p>
      </section>

      <section
        id="analytics"
        className="px-6 py-16"
      >
        <h2 className="text-4xl font-bold mb-4">
          Advanced Analytics
        </h2>

        <p className="text-slate-300 max-w-4xl">
          Transform business data into actionable insights
          through reporting, KPI tracking, forecasting,
          and performance monitoring.
        </p>
      </section>

      <section
        id="bi"
        className="px-6 py-16 bg-slate-900"
      >
        <h2 className="text-4xl font-bold mb-4">
          Business Intelligence
        </h2>

        <p className="text-slate-300 max-w-4xl">
          Build executive dashboards and self-service
          reporting solutions using Power BI and Microsoft Fabric.
        </p>
      </section>

      <section
        id="ai"
        className="px-6 py-16"
      >
        <h2 className="text-4xl font-bold mb-4">
          Artificial Intelligence
        </h2>

        <p className="text-slate-300 max-w-4xl">
          Leverage AI-powered insights, predictive analytics,
          and intelligent automation to make smarter business decisions.
        </p>
      </section>

      <section className="px-6 py-20 bg-slate-900 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>

        <p className="text-slate-300 mb-8">
          Let's discuss how Microverse Solutions can help
          transform your business.
        </p>

        <a
          href="/contact"
          className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Contact Us
        </a>
      </section>

    </main>
  );
}