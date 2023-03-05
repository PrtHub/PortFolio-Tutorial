import React, { useEffect, useState } from 'react'
import { AppWrap, MotionWraper } from '../../wrapper';
import { motion } from "framer-motion";
import { images } from "../../contents";
import './about.scss'
import { urlFor, client } from '../../client';


const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
   const query = '*[_type == "abouts"]';

   client.fetch(query)
   .then((data) => setAbouts(data))
  }, []);

  return (
    <section  className='app__about' id='about'> 
      <h2 className='head-text'>
        I know that <span>Good Dev</span> <br /> means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default AppWrap(
 MotionWraper(About, 'app__about'),
   'about',
   'app__whitebg'
);
