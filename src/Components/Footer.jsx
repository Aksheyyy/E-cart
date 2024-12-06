import React from 'react'
const Footer = () => {
  return (

    <footer className="bg-slate-950 text-gray-500 py-8" style={{marginTop:'80px'}}>
      <div className="container mx-auto text-center">
    
        <div className="flex justify-center space-x-6 mb-4">
          <a href="/" className="hover:text-sky-200">About</a>
          <a href="/" className="hover:text-gray-800">Blog</a>
          <a href="/" className="hover:text-gray-800">Jobs</a>
          <a href="/" className="hover:text-gray-800">Press</a>
          <a href="/" className="hover:text-gray-800">Accessibility</a>
          <a href="/" className="hover:text-gray-800">Partners</a>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        
        <div>
          <p>&copy; 2020 Ecart, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer