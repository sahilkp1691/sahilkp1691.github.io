# AI/ML Portfolio Website

A sleek, modern portfolio website built with React, Tailwind CSS, and Material-UI. This project showcases my skills and projects in the field of Machine Learning and Artificial Intelligence.

![Portfolio Website Screenshot](preview.png)

## Features

- Interactive AI/ML-themed background using Three.js
- Responsive design works on all devices
- Dark mode with a clean, modern UI
- Sections for Projects, CV/Resume, and Contact
- Python Flask backend for handling form submissions and serving the React app
- Optimized for GitHub Pages deployment

## Demo

You can visit the live demo [here](https://sahilkp1691.github.io/portfolio).

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Material-UI
- Three.js (for interactive background)
- React Router (for navigation)

### Backend
- Python
- Flask

## Project Structure

```
portfolio-website/
├── public/              # Static files
│   ├── index.html
│   ├── favicon.ico
│   └── robots.txt
├── src/                 # React source files
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   │   ├── HomePage.js
│   │   ├── ProjectsPage.js
│   │   ├── CVPage.js
│   │   └── ContactPage.js
│   ├── assets/          # Images, fonts, etc.
│   ├── styles/          # CSS files
│   ├── App.js           # Main App component
│   └── index.js         # Entry point
├── backend/             # Python Flask backend
│   ├── app.py
│   ├── requirements.txt
│   └── wsgi.py
├── .github/             # GitHub Actions for deployment
│   └── workflows/
│       └── deploy.yml
├── package.json
├── tailwind.config.js
├── .gitignore
└── README.md
```

## Installation and Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Python 3.8 or higher
- Git

### Installation Steps for Mac M2

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. **Install frontend dependencies**

```bash
npm install
```

3. **Install the necessary NPM packages**

```bash
npm install react react-dom react-router-dom @mui/material @mui/icons-material @emotion/react @emotion/styled tailwindcss postcss autoprefixer three
```

4. **Set up Tailwind CSS**

```bash
npx tailwindcss init -p
```

5. **Set up Python virtual environment and install backend dependencies**

```bash
# Create a virtual environment
python3 -m venv venv

# Activate the virtual environment
source venv/bin/activate

# Navigate to backend directory
cd backend

# Install dependencies
pip install -r requirements.txt
```

6. **Run the development server**

In one terminal (frontend):
```bash
npm start
```

In another terminal (backend):
```bash
cd backend
python app.py
```

## Deployment to GitHub Pages

### Setting up GitHub Pages

1. Create a new repository on GitHub or use an existing one.
2. Push your project to the repository.
3. Edit the `package.json` file to include your GitHub Pages URL:

```json
{
  "homepage": "https://yourusername.github.io/portfolio-website",
  // ...
}
```

4. Install the `gh-pages` package:

```bash
npm install --save-dev gh-pages
```

5. Add deployment scripts to `package.json`:

```json
"scripts": {
  // ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

6. Deploy to GitHub Pages:

```bash
npm run deploy
```

7. On GitHub, go to your repository settings and ensure the GitHub Pages source is set to the `gh-pages` branch.

### Configuring the Flask Backend for Production

For a production environment, you'll need to deploy the Flask backend to a server. Here are some options:

1. **Heroku**
2. **AWS Elastic Beanstalk**
3. **DigitalOcean**
4. **Render**
5. **Vercel**

Choose the platform that best suits your needs and follow their deployment guides for Flask applications.

## Customization

To customize this portfolio website for your own use:

1. Replace the placeholder content with your own information:
   - Update the name, title, and description in each page component
   - Add your own projects in the `ProjectsPage.js` file
   - Update your CV/Resume information in the `CVPage.js` file
   - Update your contact information in the `ContactPage.js` file

2. Customize the colors and theme:
   - Modify the `tailwind.config.js` file to change the color scheme
   - Update the Material-UI theme in `App.js`

3. Replace placeholder images with your own images

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Three.js](https://threejs.org/)
- [Flask](https://flask.palletsprojects.com/)