# React Image Gallery App

## Overview
The **React Image Gallery App** is a single-page application built using the popular React library. This project showcases an image gallery by fetching and displaying images from the Flickr API. The application is designed to be fast, modular, and responsive, following best practices in modern web development. The app features a dynamic user interface with routing and search capabilities, making it easy for users to navigate through different topics and search for images of their choice.

In this project, you'll gain hands-on experience with React, including using JSX for markup-like syntax, managing state with container components, and working with tools like Vite and React Router. The skills acquired from this project will prepare you to use React in other projects and demonstrate your competency with this in-demand library.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Additional Notes](#additional-notes)
- [License](#license)
- [Contact](#contact)

## Features
- Responsive and modern image gallery.
- Fetches and displays images from the Flickr API.
- React Router for navigation between default topic pages and a search page.
- Dynamic search functionality with data fetched from the API.
- Loading indicator while fetching data.
- 404 error page for invalid routes.
- No matches message when no results are found.

## Installation

1. Clone the repository:
    ```sh
   git clone <repository-url>

2. Navigate to the project directory:
    ```sh
   cd your-repo-name

3. Install dependencies:
    ```sh
    npm install

4. Run the server:
    ```sh
    npm start

## Usage

1. Open your browser and go to `http://localhost:3000` to view the Image Gallery App.
2. Navigate through the topic pages or use the search functionality to explore different images.
3. The app will display images fetched from the Flickr API based on the topic or search query.

## Technologies Used

- **React.js**
- **Vite**
- **React Router**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **Flickr API**

## Project Structure

project-root/
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── scripts.js
├── src/
│   ├── components/
│   │   └── various-react-components.js
│   ├── App.js
│   ├── index.js
│   └── routes/
│       └── various-routes.js
├── data/
│   └── config.js
├── .gitignore
├── package.json
└── README.md

## Additional Notes

- This project uses **Vite** for fast development and build processes.
- Make sure to configure the **Flickr API key** in the `config.js` file located in the `data` directory.
- The app handles browser history, allowing navigation through search history with the browser's back and forward buttons.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to contact the project maintainer:

- **Name:** Jeph Mari Daligdig
- **Email:** [daligdig.jephmari@gmail.com](mailto:daligdig.jephmari@gmail.com)
- **GitHub:** [greatxrider](https://github.com/greatxrider)
