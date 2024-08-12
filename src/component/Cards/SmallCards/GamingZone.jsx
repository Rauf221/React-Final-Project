import React from 'react';
import { useTheme } from '../../Dark&Lightmode/ThemeContext';

const articles = [
  {
    title: "New Oculus VR Kills IRL If Your Game Character Dies",
    date: "Apr 18, 2020",
    author: "Shane Doe",
    image: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/man-with-glasses-of-virtual-reality-nominated_t20_ZYvEBR.jpg" 
  },
  {
    title: "Hologate VR Serves Its Five Millionth Customer",
    date: "Mar 16, 2020",
    author: "Shane Doe",
    image: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-bruno-bueno-3854821-1024x683.jpg" 
  },
  {
    title: "The Nintendo Switch Can’t Seem To Handle Pokémon",
    date: "Mar 15, 2020",
    author: "Shane Doe",
    image: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/yasin-hasan-PU1uYnZrAL0-unsplash-1024x683.jpg" 
  },
  {
    title: "The Fujifilm X-T30 is The Perfect Camera for Gaming",
    date: "Mar 15, 2020",
    author: "Shane Doe",
    image: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/puria-berenji-tUnzh_uINw0-unsplash-1152x1536.jpg" 
  }
];

const ArticleList = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="p-6 rounded-lg max-w-sm mx-auto space-y-6 ">
      {articles.map((article, index) => (
        <div key={index} className="flex items-center gap-x-4">
          <div className="flex flex-col gap-2">
            <h3 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
              {article.title}
            </h3>
            <div className="flex items-center text-gray-400 text-xs mt-1">
              <span>{article.author}</span>
              <span className="mx-2">•</span>
              <span>{article.date}</span>
            </div>
          </div>
          <div className='w-32 h-20'>
            <img 
              src={article.image}
              alt={article.title}
              className="w-[190px] h-[100%] rounded-lg object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
