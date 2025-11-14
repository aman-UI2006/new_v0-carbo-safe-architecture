import { Leaf, Lock, Globe } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Leaf,
      title: 'AI-Verified Projects',
      description: 'Advanced verification ensures every credit represents real impact'
    },
    {
      icon: Lock,
      title: 'Blockchain Secured',
      description: 'Tamper-proof records and transparent tracking on blockchain'
    },
    {
      icon: Globe,
      title: 'Real Impact, Instantly',
      description: 'See immediate results with verified carbon removal metrics'
    }
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose CarboSafe?
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Industry-leading verification and transparency for confident carbon offsetting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="group p-8 rounded-xl border border-slate-200 bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-4 p-3 w-fit bg-accent/10 rounded-lg group-hover:bg-accent/20 transition">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
