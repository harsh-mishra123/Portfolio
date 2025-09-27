import React from 'react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science Engineering',
      institution: 'KIET Group of Institutions',
      location: 'Ghaziabad, Uttar Pradesh',
      duration: '2024 - 2028',
      description: 'Specialized in Software Engineering, Data Structures, Algorithms, and Web Technologies. Developed expertise in full-stack development and blockchain technologies. Active member of the coding club and participated in various hackathons.',
      achievements: [
        'Consistent academic performance throughout the program',
        'Participated in multiple coding competitions and hackathons',
        'Developed projects in Web 2.0 and Web 3.0 technologies',
        'Strong foundation in computer science fundamentals'
      ],
      icon: '🎓'
    },
    {
      id: 2,
      degree: 'Higher Secondary Certificate (12th)',
      field: 'Science (PCM)',
      institution: 'OM Public School',
      location: 'Gopiganj, Bhadohi, Uttar Pradesh',
      duration: '2021 - 2023',
      grade: 'Percentage: 90+%',
      description: 'Completed senior secondary education with Science stream focusing on Physics, Chemistry, and Mathematics. Built strong analytical and problem-solving skills that laid the foundation for engineering studies.',
      achievements: [
        'Achieved 90+% marks in CBSE Board examination',
        'Excellent performance in Mathematics and Science subjects',
        'Developed logical thinking and analytical skills',
        'Active participation in academic activities'
      ],
      icon: '📚'
    },
    {
      id: 3,
      degree: 'Secondary School Certificate (10th)',
      field: 'General Studies',
      institution: 'OM Public School',
      location: 'Gopiganj, Bhadohi, Uttar Pradesh',
      duration: '2019 - 2021',
      grade: 'Percentage: 95+%',
      description: 'Completed secondary education with outstanding academic performance. First exposure to computer science and programming concepts that sparked interest in technology and software development.',
      achievements: [
        'Achieved exceptional 95+% marks in CBSE Board examination',
        'Excellence in Mathematics and Science subjects',
        'Strong foundation in core subjects',
        'Developed interest in computer science and technology'
      ],
      icon: '🏫'
    }
  ];



  const TimelineItem = ({ education, index, isLast }) => (
    <div className="relative">
      {/* Connector Line */}
      {!isLast && (
        <div className="absolute left-4 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 z-0"></div>
      )}
      
      {/* Timeline Node */}
      <div className="relative z-10 flex items-start space-x-6">
        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center border-4 border-gray-900 shadow-lg">
          <span className="text-sm">{education.icon}</span>
        </div>
        
        {/* Content Card */}
        <div 
          className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 p-6 mb-8 transform hover:scale-105 hover:shadow-2xl"
          data-aos="fade-left"
          data-aos-delay={index * 200}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{education.degree}</h3>
              <p className="text-blue-400 font-semibold">{education.field}</p>
            </div>
            <div className="mt-2 lg:mt-0 text-right">
              <p className="text-gray-300 font-medium">{education.duration}</p>
              <p className="text-green-400 font-semibold">{education.grade}</p>
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="text-purple-400 font-semibold text-lg mb-1">{education.institution}</h4>
            <p className="text-gray-400">{education.location}</p>
          </div>
          
          <p className="text-gray-300 mb-4 leading-relaxed">{education.description}</p>
          
          {/* Achievements */}
          <div>
            <h5 className="text-white font-semibold mb-2">Key Achievements:</h5>
            <ul className="space-y-1">
              {education.achievements.map((achievement, idx) => (
                <li key={idx} className="text-gray-400 flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My academic journey and continuous learning path in technology
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Academic Timeline
            </span>
          </h3>
          <div className="max-w-4xl mx-auto">
            {educationData.map((education, index) => (
              <TimelineItem 
                key={education.id} 
                education={education} 
                index={index}
                isLast={index === educationData.length - 1}
              />
            ))}
          </div>
        </div>



        {/* Learning Philosophy */}
        <div className="mt-20 text-center" data-aos="fade-up" data-aos-delay="600">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Continuous Learning Philosophy
              </span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              "Technology evolves rapidly, and I believe in staying ahead of the curve through continuous learning. 
              From traditional web development to emerging blockchain technologies, I'm committed to expanding my 
              knowledge and skills to create innovative solutions for tomorrow's challenges."
            </p>
            <div className="flex justify-center mt-6">
              <div className="flex space-x-4">
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                  Always Learning
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
                  Future Ready
                </span>
                <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                  Innovation Focused
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;