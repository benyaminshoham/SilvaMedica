import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Leaf, AlertCircle, Target, Layers, BarChart3, Users, TrendingUp, Award, DollarSign, Calendar, Coffee, Sparkles } from 'lucide-react';
import './styles/globals.css';

const slides = [
  {
    id: 'title',
    type: 'hero',
    title: 'Silva Medica',
    subtitle: 'A herbal medicine simulation game rooted in Western tradition',
    tagline: 'Learning through play. Nature as system. Knowledge as progression.',
    image: 'https://images.unsplash.com/photo-1637943509177-bb43201f4f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBoZXJicyUyMHBsYW50c3xlbnwxfHx8fDE3NjU3Mzg2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'problem',
    type: 'problem',
    title: 'Problem',
    icon: AlertCircle,
    points: [
      'Modern games train speed, reward loops, and extraction',
      'Educational games feel shallow and uninspiring',
      'Herbal medicine knowledge is fragmented, unstructured, and disappearing',
      'There is no serious game that teaches real plant knowledge through systems and consequence'
    ]
  },
  {
    id: 'solution',
    type: 'solution',
    title: 'Solution',
    icon: Target,
    points: [
      'Silva Medica is a slow, systems driven herbal medicine simulation',
      'Players learn by observing forests, plants, seasons, and bodies',
      'Knowledge is earned through correct practice, not clicking',
      'The game teaches real herbal logic through play'
    ],
    image: 'https://images.unsplash.com/photo-1576020363294-ab5dca00b6f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMGhlcmJhbCUyMG1lZGljaW5lfGVufDF8fHx8MTc2NTczODY4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'what',
    type: 'content',
    title: 'What the Game Is',
    icon: Layers,
    points: [
      'A contemplative herbal medicine simulation',
      'Forest exploration and plant identification',
      'Harvesting with ecological limits',
      'Processing herbs into remedies',
      'Treating simulated conditions with real outcomes',
      'Knowledge unlocks depth, not power'
    ]
  },
  {
    id: 'gameplay',
    type: 'loop',
    title: 'Core Gameplay Loop',
    steps: [
      'Explore forest biomes',
      'Observe plants through seasons',
      'Harvest responsibly',
      'Process materia medica',
      'Apply remedies to cases',
      'Learn from success and failure',
      'Unlock deeper systems'
    ],
    image: 'https://images.unsplash.com/photo-1638774262202-8532fc3f0f58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBlY29zeXN0ZW18ZW58MXx8fHwxNzY1NzI0ODUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'education',
    type: 'content',
    title: 'Educational Depth',
    icon: Sparkles,
    points: [
      'Based on traditional Western herbalism',
      'Humoral theory and tissue states',
      'Plant energetics',
      'Preparation methods',
      'Contraindications and dosage logic',
      'Ecology and sustainability baked into mechanics'
    ],
    image: 'https://images.unsplash.com/photo-1727527248663-5b0c475061b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzY1NzI0MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'why',
    type: 'highlight',
    title: 'Why This Matters',
    points: [
      'Herbal knowledge is experiential and systemic',
      'Books do not teach judgment',
      'Silva Medica trains pattern recognition and responsibility',
      'This is how real herbalists learn, digitally translated'
    ]
  },
  {
    id: 'audience',
    type: 'content',
    title: 'Target Audience',
    icon: Users,
    points: [
      'Players who enjoy slow strategy and simulation',
      'Fans of games like Factorio, Oxygen Not Included, and Apothecary sims',
      'Herbalists and natural medicine students',
      'Educators and alternative learning platforms',
      'Players burned out on dopamine driven games'
    ]
  },
  {
    id: 'market',
    type: 'content',
    title: 'Market Opportunity',
    icon: TrendingUp,
    points: [
      'Simulation and management games are a proven category',
      'Educational games with depth are underserved',
      'Wellness and herbal medicine interest is growing globally',
      'Silva Medica sits at the intersection of gaming, education, and wellness'
    ]
  },
  {
    id: 'competitive',
    type: 'highlight',
    title: 'Competitive Landscape',
    points: [
      'No direct competitors with real herbal systems',
      'Most herbal games are cosmetic or fantasy based',
      'Educational software lacks engagement',
      'Silva Medica owns a new niche'
    ]
  },
  {
    id: 'advantage',
    type: 'content',
    title: 'Unique Advantage',
    icon: Award,
    points: [
      'Real world herbal logic as game systems',
      'High replay value through emergent outcomes',
      'Expandable content without power creep',
      'Strong IP potential across education, games, and tools'
    ]
  },
  {
    id: 'monetization',
    type: 'content',
    title: 'Monetization',
    icon: DollarSign,
    points: [
      'Premium PC release',
      'Optional expansion packs by biome or tradition',
      'Educational licensing for schools and courses',
      'No pay to win mechanics',
      'No exploitative monetization'
    ]
  },
  {
    id: 'scope',
    type: 'content',
    title: 'Development Scope',
    icon: Layers,
    points: [
      'PC first',
      'Unity or Godot engine',
      'Single player at launch',
      'Mod support planned post launch',
      'Scalable content architecture'
    ]
  },
  {
    id: 'roadmap',
    type: 'timeline',
    title: 'Roadmap',
    phases: [
      'Pre production and systems design',
      'Vertical slice prototype',
      'Closed alpha with herbalists and players',
      'Early access launch',
      'Full release',
      'Expansion content'
    ]
  },
  {
    id: 'team',
    type: 'content',
    title: 'Team',
    icon: Users,
    points: [
      'Founder with deep herbal medicine background',
      'Founder with software and systems design experience',
      'Advisors from herbal and education fields',
      'Small focused development team'
    ],
    image: 'https://images.unsplash.com/photo-1612729026396-024454dbec05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjB0ZWFtfGVufDF8fHx8MTc2NTczODY4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'funding',
    type: 'split',
    title: 'Funding Ask',
    subtitle: 'Seed funding for 18 to 24 months',
    points: [
      'Covers development, art, sound, and testing',
      'Focus on core systems and polish',
      'No marketing burn before product readiness'
    ]
  },
  {
    id: 'funds',
    type: 'content',
    title: 'Use of Funds',
    icon: BarChart3,
    points: [
      'Gameplay systems and simulation logic',
      'Art direction and world building',
      'Sound and atmosphere',
      'Testing and balancing',
      'Community building during early access'
    ]
  },
  {
    id: 'vision',
    type: 'highlight',
    title: 'Vision',
    points: [
      'Silva Medica is not one game',
      'It is a platform for experiential herbal knowledge',
      'Future titles, expansions, and educational tools',
      'A new category of slow, meaningful games'
    ],
    image: 'https://images.unsplash.com/photo-1531369098874-3575d551fb38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBzdHVkeWluZyUyMG5hdHVyZXxlbnwxfHx8fDE3NjU3Mzg2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'closing',
    type: 'closing',
    title: 'Silva Medica proves that games can teach real knowledge',
    points: [
      'Not through text',
      'Through systems',
      'Through consequence',
      'Through nature itself'
    ]
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-green-900 to-teal-950">
      {/* Print styles for PDF export */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .slide { page-break-after: always; min-height: 100vh; }
          body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
        }
      `}</style>

      {/* Navigation */}
      <div className="no-print fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-black/30 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-2 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? 'w-8 bg-emerald-400' 
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-2 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        <div className="ml-4 text-white/70 text-sm">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Slide Content */}
      <div className="slide relative w-full min-h-screen flex items-center justify-center p-8 md:p-16">
        
        {/* Hero Slide */}
        {slide.type === 'hero' && (
          <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full">
                <Leaf className="w-5 h-5 text-emerald-300" />
                <span className="text-emerald-200">Herbal Simulation</span>
              </div>
              <h1 className="text-6xl md:text-7xl text-white">{slide.title}</h1>
              <p className="text-2xl text-emerald-200">{slide.subtitle}</p>
              <p className="text-xl text-white/70">{slide.tagline}</p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 rounded-3xl blur-3xl"></div>
              <img 
                src={slide.image} 
                alt="Forest herbs"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        )}

        {/* Problem Slide */}
        {slide.type === 'problem' && (
          <div className="max-w-5xl w-full space-y-12">
            <div className="flex items-center gap-4">
              {Icon && <Icon className="w-16 h-16 text-red-400" />}
              <h2 className="text-5xl text-white">{slide.title}</h2>
            </div>
            <div className="grid gap-6">
              {slide.points.map((point, index) => (
                <div 
                  key={index}
                  className="bg-black/30 backdrop-blur-md border border-red-500/30 rounded-2xl p-8 hover:border-red-400/50 transition-all"
                >
                  <p className="text-xl text-white/90">{point}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Solution Slide */}
        {slide.type === 'solution' && (
          <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                {Icon && <Icon className="w-16 h-16 text-emerald-400" />}
                <h2 className="text-5xl text-white">{slide.title}</h2>
              </div>
              <div className="space-y-4">
                {slide.points.map((point, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-3 flex-shrink-0"></div>
                    <p className="text-xl text-white/90">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={slide.image} 
                alt="Solution"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        )}

        {/* Content Slide */}
        {slide.type === 'content' && (
          <div className="max-w-7xl w-full">
            {slide.image ? (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    {Icon && <Icon className="w-16 h-16 text-emerald-400" />}
                    <h2 className="text-5xl text-white">{slide.title}</h2>
                  </div>
                  <div className="space-y-4">
                    {slide.points.map((point, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 mt-3 flex-shrink-0"></div>
                        <p className="text-xl text-white/90">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-12">
                <div className="flex items-center gap-4">
                  {Icon && <Icon className="w-16 h-16 text-emerald-400" />}
                  <h2 className="text-5xl text-white">{slide.title}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {slide.points.map((point, index) => (
                    <div 
                      key={index}
                      className="bg-black/30 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-400/50 transition-all"
                    >
                      <p className="text-xl text-white/90">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Loop Slide */}
        {slide.type === 'loop' && (
          <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl text-white">{slide.title}</h2>
              <div className="space-y-4">
                {slide.steps.map((step, index) => (
                  <div key={index} className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-300">{index + 1}</span>
                    </div>
                    <p className="text-xl text-white/90">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={slide.image} 
                alt="Gameplay Loop"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        )}

        {/* Highlight Slide */}
        {slide.type === 'highlight' && (
          <div className="max-w-5xl w-full">
            {slide.image ? (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h2 className="text-5xl text-white">{slide.title}</h2>
                  <div className="space-y-6">
                    {slide.points.map((point, index) => (
                      <div 
                        key={index}
                        className="bg-emerald-500/10 border-l-4 border-emerald-400 rounded-r-2xl p-6"
                      >
                        <p className="text-xl text-white/90">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-12">
                <h2 className="text-5xl text-white text-center">{slide.title}</h2>
                <div className="space-y-6">
                  {slide.points.map((point, index) => (
                    <div 
                      key={index}
                      className="bg-emerald-500/10 border-l-4 border-emerald-400 rounded-r-2xl p-8"
                    >
                      <p className="text-2xl text-white/90">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Timeline Slide */}
        {slide.type === 'timeline' && (
          <div className="max-w-5xl w-full space-y-12">
            <div className="flex items-center gap-4">
              <Calendar className="w-16 h-16 text-emerald-400" />
              <h2 className="text-5xl text-white">{slide.title}</h2>
            </div>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-emerald-500/30"></div>
              <div className="space-y-8">
                {slide.phases.map((phase, index) => (
                  <div key={index} className="flex gap-6 items-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-4 border-emerald-400 flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-emerald-300">{index + 1}</span>
                    </div>
                    <div className="flex-1 bg-black/30 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-6">
                      <p className="text-xl text-white/90">{phase}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Split Slide */}
        {slide.type === 'split' && (
          <div className="max-w-5xl w-full space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-5xl text-white">{slide.title}</h2>
              <p className="text-3xl text-emerald-300">{slide.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {slide.points.map((point, index) => (
                <div 
                  key={index}
                  className="bg-black/30 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-400/50 transition-all text-center"
                >
                  <p className="text-xl text-white/90">{point}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Closing Slide */}
        {slide.type === 'closing' && (
          <div className="max-w-5xl w-full space-y-16 text-center">
            <h2 className="text-5xl md:text-6xl text-white leading-tight">{slide.title}</h2>
            <div className="space-y-6">
              {slide.points.map((point, index) => (
                <p key={index} className="text-3xl text-emerald-300">{point}</p>
              ))}
            </div>
            <div className="pt-8">
              <div className="inline-flex items-center gap-3 text-white/60">
                <Leaf className="w-8 h-8 text-emerald-400" />
                <span className="text-2xl">Silva Medica</span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Corner Logo */}
      <div className="no-print fixed top-8 left-8 flex items-center gap-3 text-white/80">
        <Leaf className="w-8 h-8 text-emerald-400" />
        <span className="text-xl">Silva Medica</span>
      </div>

      {/* Print Instructions */}
      <div className="no-print fixed top-8 right-8 bg-black/30 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-white/70 text-sm">
        Press Ctrl/Cmd + P to export as PDF
      </div>
    </div>
  );
}
