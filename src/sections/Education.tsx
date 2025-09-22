import { useInView } from '../hooks/useInView';
import { EducationType } from '../types';

const educationItems: EducationType[] = [
  {
    id: 'university',
    degree: 'Bachelor of Electronics and Computer Engineering',
    institution: 'Tribhuvan University',
    period: '2021 - 2025',
    description: 'Specializing in both hardware and software systems, with a focus on designing innovative solutions in electronics, computer engineering, and embedded systems. Gaining hands-on experience in embedded systems, circuit design, software development, and systems engineering.',
    achievements: ['ECG Monitoring System', 'Smart Stick For Visually impaired'],
    color: 'blue',
    position: 'right',
  },
  {
    id: 'highschool',
    degree: '+2 Science',
    institution: "Kalika Manavgyan Secondary School",
    period: '2018 - 2020',
    description: 'Completed +2 Science with a focus on Physics, Mathematics, and Computer Science, building a solid foundation in scientific principles and analytical thinking.',
    achievements: ['Developed strong problem-solving and analytical skills'],
    color: 'purple',
    position: 'left',
  },
  {
    id: 'middleschool',
    degree: 'SEE',
    institution: 'Little Angel`s High School',
    period: '2005 - 2018',
    description: 'Early exposure to programming and robotics. Participated in national science competitions.',
    achievements: ['Robotics Team', 'Quiz competition'],
    color: 'green',
    position: 'right',
  },
];

const colorMap: { [key: string]: string } = {
  blue: '#3B82F6',    // Tailwind blue-500
  purple: '#8B5CF6',  // Tailwind purple-500
  green: '#22C55E',   // Tailwind green-500
};

const Education = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="education" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl lg:text-4xl font-bold text-center mb-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          Education Timeline
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {educationItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex items-center justify-between ${
                  inView ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {item.position === 'left' ? (
                  <>
                    <div className="w-5/12 bg-white p-6 rounded-xl shadow-sm border border-gray-300">
                      <div className="flex flex-col">
                        <span className={`text-${item.color}-600 font-semibold mb-1`}>{item.period}</span>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.degree}</h3>
                        <span className="text-gray-600 mb-3">{item.institution}</span>
                        <p className="text-gray-600">{item.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.achievements.map((achievement, i) => (
                            <span key={i} className={`px-3 py-1 bg-${item.color}-50 text-${item.color}-600 rounded-full text-sm`}>
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div
                      className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 bg-white z-10"
                      style={{ borderColor: colorMap[item.color] }}
                    ></div>

                    <div className="w-5/12">{/* Empty for spacing */}</div>
                  </>
                ) : (
                  <>
                    <div className="w-5/12">{/* Empty for spacing */}</div>

                    {/* Center Dot */}
                    <div
                      className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 bg-white z-10"
                      style={{ borderColor: colorMap[item.color] }}
                    ></div>

                    <div className="w-5/12 bg-white p-6 rounded-xl shadow-sm border border-gray-300">
                      <div className="flex flex-col">
                        <span className={`text-${item.color}-600 font-semibold mb-1`}>{item.period}</span>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.degree}</h3>
                        <span className="text-gray-600 mb-3">{item.institution}</span>
                        <p className="text-gray-600">{item.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.achievements.map((achievement, i) => (
                            <span key={i} className={`px-3 py-1 bg-${item.color}-50 text-${item.color}-600 rounded-full text-sm`}>
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
