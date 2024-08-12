import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { useTheme } from '../Dark&Lightmode/ThemeContext';
const SocialMediaSection = ({}) => {
  const socialMediaData = [
    { icon: <FaFacebookF />, count: '1.1K', name: 'Facebook', color: 'text-[#4267B2]' },
    { icon: <FaTwitter />, count: '68.9K', name: 'Twitter', color: 'text-[#1DA1F2]' },
    { icon: <FaPinterestP />, count: '10.7K', name: 'Pinterest', color: 'text-[#E60023]' },
    { icon: <FaInstagram />, count: '46.4K', name: 'Instagram', color: 'text-[#E1306C]' },
    { icon: <FaTelegramPlane />, count: '', name: 'Telegram', color: 'text-[#0088cc]' },
    { icon: <FaWhatsapp />, count: '', name: 'WhatsApp', color: 'text-[#25D366]' },
  ];
  const { isDarkMode } = useTheme();
  return (
    <div className= {`p-6 rounded-md max-w-xs mx-auto ${isDarkMode ? "text-white bg-[#181818]" : "text-black bg-white" }`}>
      <h2 className=" text-lg font-semibold mb-4 text-center">We're Social</h2>
      <div className="grid grid-cols-2 gap-4">
        {socialMediaData.map((social, index) => (
          <div key={index} className="flex items-center border border-[#333] p-3 rounded-xs hover:bg-[#333] transition-colors duration-300">
            <div className={`text-2xl ${social.color} mr-3`}>
              {social.icon}
            </div>
            <div>
              <div className=" font-semibold text-sm">{social.count}</div>
              <div className="text-gray-400 text-xs">{social.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaSection;
