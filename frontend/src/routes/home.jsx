import React from 'react';
import { Code, Book, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-8 text-blue-600">CodeCraft</h1>
        <h2 className="text-3xl font-semibold mb-6">Forge Your Coding Skills</h2>
        <p className="text-xl mb-8 leading-relaxed">
          Welcome to CodeCraft, your ultimate platform for mastering the art of coding. Whether you're a beginner taking your first steps or an experienced developer looking to sharpen your skills, CodeCraft provides the tools and community you need to excel.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <FeatureCard 
            icon={<Code className="w-8 h-8" />}
            title="Interactive Coding"
            description="Practice with real-time feedback and guided solutions across multiple programming languages."
          />
          <FeatureCard 
            icon={<Book className="w-8 h-8" />}
            title="Comprehensive Courses"
            description="Structured learning paths from basics to advanced topics in web, mobile, and data science."
          />
          <FeatureCard 
            icon={<Users className="w-8 h-8" />}
            title="Vibrant Community"
            description="Connect with peers, mentors, and industry experts to accelerate your learning journey."
          />
        </div>
        
        <p className="text-lg mb-4">
          Ready to craft your coding future? <a href="#" className="text-blue-600 hover:underline font-semibold">Sign up now</a> and join thousands of developers who are leveling up their skills with CodeCraft.
        </p>
        <p className="text-lg">
          Have questions? Check out our <a href="#" className="text-blue-600 hover:underline">FAQ</a> or <a href="#" className="text-blue-600 hover:underline">contact us</a>. We're here to help you succeed!
        </p>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default Home;