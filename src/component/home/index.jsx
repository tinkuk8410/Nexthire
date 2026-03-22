import './index.css';
import Header from '../header';
import { useState, useEffect } from 'react';
import { FaSearch, FaArrowRight, FaBriefcase, FaUsers, FaChartLine, FaGlobe, FaStar, FaCheckCircle } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "Google",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "Found my dream job within 2 weeks! The platform is amazing and very user-friendly."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "Microsoft",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      text: "Best job portal I've ever used. Got multiple offers from top companies."
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Data Scientist",
      company: "Amazon",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      text: "The filters and job recommendations helped me find the perfect role!"
    }
  ];
  
  const stats = [
    { icon: <FaBriefcase />, number: "10,000+", label: "Live Jobs" },
    { icon: <FaUsers />, number: "50,000+", label: "Active Candidates" },
    { icon: <FaChartLine />, number: "5,000+", label: "Companies Hiring" },
    { icon: <FaGlobe />, number: "150+", label: "Countries" }
  ];
  
  const features = [
    { icon: <FaSearch />, title: "Smart Search", desc: "Find jobs tailored to your skills and preferences" },
    { icon: <FaCheckCircle />, title: "Easy Apply", desc: "One-click application with your saved profile" },
    { icon: <FaStar />, title: "Top Companies", desc: "Get hired by world's leading companies" },
    { icon: <IoLocationSharp />, title: "Remote & Local", desc: "Find both remote and on-site opportunities" }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <div className='home-main-cont'>
      <Header />
      
      {/* Hero Section */}
      <section className='hero-section'>
        <div className='hero-overlay'></div>
        <div className='hero-content container'>
          <div className='row align-items-center min-vh-100'>
            <div className='col-lg-7 text-white' data-aos="fade-right">
              <h1 className='hero-title'>
                Connecting Talent with <span className='highlight'>Opportunity</span>
              </h1>
              <p className='hero-subtitle'>
                Start Your Journey Today! Find your dream job with thousands of opportunities waiting for you.
              </p>
              
              {/* Search Bar */}
              <div className='hero-search'>
                <div className='search-container'>
                  <input 
                    type='text' 
                    placeholder='Job title, keywords, or company'
                    className='search-input'
                  />
                  <button className='search-btn'>
                    <FaSearch /> Search Jobs
                  </button>
                </div>
                <p className='popular-tags'>
                  Popular: <span>Software Engineer</span> • <span>Data Scientist</span> • <span>Product Manager</span> • <span>Remote</span>
                </p>
              </div>
            </div>
            
            <div className='col-lg-5' data-aos="fade-left">
              <div className='hero-stats-card'>
                <div className='stats-grid'>
                  {stats.map((stat, index) => (
                    <div key={index} className='stat-item'>
                      <div className='stat-icon'>{stat.icon}</div>
                      <h3 className='stat-number'>{stat.number}</h3>
                      <p className='stat-label'>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className='features-section'>
        <div className='container'>
          <div className='section-header text-center'>
            <h2 className='section-title'>Why Choose Us?</h2>
            <p className='section-subtitle'>We make your job search easier and faster</p>
          </div>
          
          <div className='row g-4'>
            {features.map((feature, index) => (
              <div key={index} className='col-md-6 col-lg-3'>
                <div className='feature-card' data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className='feature-icon'>{feature.icon}</div>
                  <h3 className='feature-title'>{feature.title}</h3>
                  <p className='feature-desc'>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Banner */}
      <section className='stats-banner'>
        <div className='container'>
          <div className='row text-center g-4'>
            <div className='col-md-3'>
              <div className='banner-stat'>
                <h3 className='banner-number'>95%</h3>
                <p className='banner-label'>Placement Rate</p>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='banner-stat'>
                <h3 className='banner-number'>24hrs</h3>
                <p className='banner-label'>Average Response Time</p>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='banner-stat'>
                <h3 className='banner-number'>5000+</h3>
                <p className='banner-label'>Companies Hiring</p>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='banner-stat'>
                <h3 className='banner-number'>1M+</h3>
                <p className='banner-label'>Jobs Posted</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className='testimonials-section'>
        <div className='container'>
          <div className='section-header text-center'>
            <h2 className='section-title'>What Our Users Say</h2>
            <p className='section-subtitle'>Success stories from people who found their dream jobs</p>
          </div>
          
          <div className='testimonial-slider'>
            <button className='slider-btn prev' onClick={prevSlide}>❮</button>
            
            <div className='testimonial-card'>
              <div className='testimonial-image'>
                <img src={testimonials[currentSlide].image} alt={testimonials[currentSlide].name} />
                <div className='quote-icon'>"</div>
              </div>
              <p className='testimonial-text'>{testimonials[currentSlide].text}</p>
              <h4 className='testimonial-name'>{testimonials[currentSlide].name}</h4>
              <p className='testimonial-role'>{testimonials[currentSlide].role} at {testimonials[currentSlide].company}</p>
              <div className='rating'>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className='star' />
                ))}
              </div>
            </div>
            
            <button className='slider-btn next' onClick={nextSlide}>❯</button>
            
            <div className='dots'>
              {testimonials.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className='cta-section'>
        <div className='container'>
          <div className='cta-content text-center'>
            <h2 className='cta-title'>Ready to Start Your Career Journey?</h2>
            <p className='cta-text'>Join thousands of successful candidates who found their dream jobs with us</p>
            <button className='cta-btn'>
              Get Started Now <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
      
      {/* Marquee */}
      <div className='marquee-container'>
        <marquee behavior='scroll' className='marquee-content'>
          🚀 Let secure your career and find job with us. We'll never disappoint you! • 
          🌟 10,000+ jobs added daily • 
          💼 Top companies hiring now • 
          🎯 Your dream job is just a click away •
          🔥 Apply before positions fill up!
        </marquee>
      </div>
    </div>
  );
};

export default Home;