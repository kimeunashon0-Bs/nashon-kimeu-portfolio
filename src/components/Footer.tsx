
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Nashon Kimeu. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/Kimeunashon" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12C2 16.419 4.865 20.166 9 21.491V19.016C9 19.016 8.636 19.097 8.104 19.097C6.883 19.097 6.296 18.235 6.042 17.578C5.874 17.189 5.561 16.82 5.177 16.491C4.904 16.292 4.722 16.166 5.269 16.166C5.817 16.166 6.47 16.82 6.731 17.189C7.388 18.148 8.164 18.329 8.104 18.329C8.632 18.329 8.942 18.148 9.073 17.999C9.230 17.144 9.549 16.491 10 16.04V15.838C7.108 15.447 6.042 13.316 6.042 11.501C6.042 10.384 6.501 9.267 7.284 8.389C7.133 8.149 6.923 7.262 7.322 5.988C7.322 5.988 8.552 5.690 9.971 6.729C10.648 6.475 11.324 6.347 12 6.347C12.676 6.347 13.352 6.475 14.029 6.729C15.448 5.690 16.678 5.988 16.678 5.988C17.077 7.262 16.867 8.149 16.716 8.389C17.499 9.267 17.958 10.384 17.958 11.501C17.958 13.299 16.863 15.43 14 15.824V16.040C14.457 16.497 15 17.270 15 18.173V21.491C19.135 20.166 22 16.419 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/nashonkimeu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
