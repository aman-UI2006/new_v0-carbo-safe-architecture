export function ProcessFlow() {
  const steps = [
    { num: '1', label: 'Calculate', description: 'Assess your carbon footprint' },
    { num: '2', label: 'Offset', description: 'Choose verified projects' },
    { num: '3', label: 'Certificate', description: 'Get blockchain proof' }
  ]

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Your Path to Carbon Neutral
        </h2>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Node */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-accent-foreground mb-6 glow-accent-lg animate-pulse">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 text-center">
                    {step.label}
                  </h3>
                  <p className="text-foreground/60 text-center text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
