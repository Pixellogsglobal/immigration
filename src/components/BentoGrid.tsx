import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, BookOpen, Users, Calendar, ArrowRight } from 'lucide-react';

const BentoGrid = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const iconAnimation = {
    hover: {
      rotate: [0, -10, 10, 0],
      scale: 1.2,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        repeat: Infinity
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto p-4"
    >
      {/* Hero Section - Spans 2 columns */}
      <motion.div
        variants={item}
        whileHover={{
          backgroundColor: "rgba(220, 38, 38, 0.15)",
          transition: { duration: 0.3 }
        }}
        className="md:col-span-2 min-h-[500px] relative overflow-hidden rounded-[2.5rem] group
          bg-gradient-to-br from-brand-red-500/10 via-brand-red-400/5 to-transparent"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-brand-red-500/30 via-black/10 to-transparent backdrop-blur-sm"
          whileHover={{
            opacity: 0.9,
            background: "linear-gradient(135deg, rgba(220,38,38,0.4), rgba(0,0,0,0.1))"
          }}
        />
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(220,38,38,0.5) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(220,38,38,0.5) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <div className="relative h-full p-12 flex flex-col justify-between">
          <div>
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Transform Your
              <motion.span 
                className="block bg-gradient-to-r from-brand-red-300 to-white bg-clip-text text-transparent font-black"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              >
                Academic Future
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl font-semibold text-white/90 max-w-xl drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Expert guidance for your educational journey, tailored to your aspirations and goals
            </motion.p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.98 }}
            className="w-fit px-8 py-4 bg-gradient-to-r from-brand-red-600 to-brand-red-500 text-white rounded-2xl font-extrabold
              flex items-center gap-2 group/button shadow-lg shadow-brand-red-500/30 hover:shadow-xl hover:shadow-brand-red-500/40
              transition-all duration-300 relative overflow-hidden text-lg"
          >
            <motion.span className="relative z-10">Get Started</motion.span>
            <motion.div
              className="relative z-10"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-brand-red-500 to-brand-red-600"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{ opacity: 0.6 }}
            />
          </motion.button>
        </div>
      </motion.div>

      {/* Stats Card with Image */}
      <motion.div
        variants={item}
        whileHover={{
          backgroundColor: "rgba(220, 38, 38, 0.25)",
          transition: { duration: 0.3 }
        }}
        className="relative overflow-hidden rounded-[2rem] group
          bg-gradient-to-br from-brand-red-500/15 via-brand-red-400/10 to-transparent"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-brand-red-500/40 to-black/20 backdrop-blur-md"
          whileHover={{
            opacity: 0.9,
            background: "linear-gradient(135deg, rgba(220,38,38,0.5), rgba(0,0,0,0.2))"
          }}
        />
        <div className="relative h-full">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.8, 0.9, 0.8],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1740&q=80"
              alt="Students studying"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="relative p-8 space-y-6">
            <motion.div 
              className="p-4 bg-brand-red-500/30 backdrop-blur-xl rounded-2xl w-fit"
              whileHover="hover"
              variants={iconAnimation}
            >
              <GraduationCap className="w-8 h-8 text-white" />
            </motion.div>
            <motion.h3 
              className="text-4xl font-black text-white drop-shadow-lg"
              animate={{
                textShadow: [
                  '0 0 20px rgba(220,38,38,0.6)',
                  '0 0 40px rgba(220,38,38,0.4)',
                  '0 0 20px rgba(220,38,38,0.6)'
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              1000+
            </motion.h3>
            <p className="text-xl font-bold text-white drop-shadow-md">Students Guided</p>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={item}
        className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          { icon: BookOpen, title: "Academic Planning", desc: "Personalized study plans tailored to your goals" },
          { icon: Users, title: "Career Guidance", desc: "Expert counseling for your future path" },
          { icon: Calendar, title: "Consultations", desc: "One-on-one sessions with industry experts" }
        ].map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ 
              y: -10,
              backgroundColor: "rgba(220, 38, 38, 0.25)",
              transition: { duration: 0.3 }
            }}
            className="relative overflow-hidden rounded-[2rem] group
              bg-gradient-to-br from-brand-red-500/15 via-brand-red-400/10 to-transparent"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-brand-red-500/30 via-black/20 to-transparent backdrop-blur-md"
              whileHover={{
                opacity: 0.9,
                background: "linear-gradient(135deg, rgba(220,38,38,0.4), rgba(0,0,0,0.1))"
              }}
            />
            <div className="relative p-8">
              <motion.div 
                className="p-4 bg-brand-red-500/30 backdrop-blur-xl rounded-2xl w-fit mb-6"
                whileHover="hover"
                variants={iconAnimation}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h3 
                className="text-2xl font-extrabold mb-4 text-white drop-shadow-lg"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(220,38,38,0.4)',
                    '0 0 40px rgba(220,38,38,0.3)',
                    '0 0 20px rgba(220,38,38,0.4)'
                  ],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                {service.title}
              </motion.h3>
              <p className="text-lg font-semibold text-white/90 drop-shadow-md">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BentoGrid;