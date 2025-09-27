import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML', level: 95, color: 'from-orange-400 to-red-500' },
        { name: 'CSS', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'JavaScript', level: 88, color: 'from-yellow-400 to-orange-500' },
        { name: 'React', level: 85, color: 'from-cyan-400 to-blue-500' },
        { name: 'Tailwind CSS', level: 80, color: 'from-teal-400 to-teal-600' },
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', level: 82, color: 'from-green-400 to-green-600' },
        { name: 'Express.js', level: 80, color: 'from-gray-400 to-gray-600' },
        { name: 'MongoDB', level: 78, color: 'from-green-500 to-green-700' },
        { name: 'TypeScript', level: 75, color: 'from-blue-500 to-blue-700' },
        { name: 'SQL', level: 70, color: 'from-indigo-400 to-indigo-600' },
        { name: 'Python', level: 65, color: 'from-yellow-400 to-green-500' },
        { name: 'swift', level: 60, color: 'from-purple-400 to-pink-500' },
      ]
    },
    {
      category: 'Web3 & Blockchain',
      items: [
        { name: 'Solidity', level: 70, color: 'from-purple-400 to-purple-600' },
        { name: 'DeFi', level: 65, color: 'from-indigo-400 to-purple-500' },
        { name: 'PancakeSwap', level: 60, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Foundry', level: 55, color: 'from-gray-500 to-gray-700' },
        { name: 'EtherJS', level: 50, color: 'from-blue-600 to-blue-800' }
      ]
    }
  ];

  const SkillCard = ({ skill }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-white font-semibold text-lg">{skill.name}</h4>
        <span className="text-blue-400 font-bold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3">
        <div
          className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various technologies
          </p>
        </div>

        <div className="space-y-12">
          {skills.map((category, categoryIndex) => (
            <div key={category.category} data-aos="fade-up" data-aos-delay={categoryIndex * 200}>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {category.category}
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((skill, index) => (
                  <div
                    key={skill.name}
                    data-aos="zoom-in"
                    data-aos-delay={categoryIndex * 200 + index * 100}
                  >
                    <SkillCard skill={skill} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Pills */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="600">
          <h3 className="text-2xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Technologies I Work With
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Git', 'Docker', 'AWS', 'Ethereum', 'Web3.js', 'REST APIs', 'GraphQL', 'Jest', 'Webpack', 'Tailwind CSS'].map((tech, index) => (
              <span
                key={tech}
                className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-full border border-gray-600 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 cursor-default"
                data-aos="zoom-in"
                data-aos-delay={700 + index * 50}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;