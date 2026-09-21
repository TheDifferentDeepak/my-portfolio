import profileImg from '../assets/profile.png';

function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto py-24 px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Photo */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-200 rounded-3xl -z-10 rotate-3"></div>
            <img 
              src={profileImg} 
              alt="Deepak" 
              className="w-72 h-72 md:w-80 md:h-80 object-cover object-top rounded-3xl shadow-xl"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div>
          <p className="text-indigo-600 font-semibold mb-2">Get to know me</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
           Hi! I’m Deepak, a passionate web developer currently learning to work with MongoDB, Express, React, and Node.js (the MERN stack). I enjoy building new projects and honing my skills.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            I learn something new with every project—whether it’s frontend design or backend logic. My goal is to build clean, efficient, and user-friendly applications.
          </p>

          {/* Small stats/highlights */}
          <div className="flex gap-8">
            <div>
              <h3 className="text-2xl font-bold text-indigo-600">MERN</h3>
              <p className="text-sm text-gray-500">Stack Learner</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-indigo-600">100%</h3>
              <p className="text-sm text-gray-500">Passion Driven</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About;