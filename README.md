# React Nike E-Commerce

This project is a fully responsive e-commerce website built using React, Redux, Tailwind CSS, and Firebase. The website is inspired by Nike's design and includes features such as product listing, a detailed product page with image zoom, and a shopping cart with local storage and Redux state management.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Demo

You can view the live demo of the project [here](https://react-nike-ecommerce-simsek.netlify.app/).

## Features

- **Responsive Design:** Fully responsive design that works on all devices.
- **Product Listing:** View a list of products with options to filter and sort.
- **Product Detail Page:** Detailed product view with multiple images, zoom feature, and size selection.
- **Shopping Cart:** Add products to the cart, view cart details, and manage quantities.
- **Authentication:** User login and registration using Firebase.
- **State Management:** Redux is used for managing the cart state.
- **Local Storage:** Cart data is persisted in local storage.
- **Tailwind CSS:** Modern and clean design with Tailwind CSS.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management tool for React.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Firebase**: Backend services including authentication and database.
- **Framer Motion**: Library for animations and transitions.
- **React Hook Form**: Forms handling with validation in React.
- **React Router**: Declarative routing for React applications.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-nike-ecommerce.git
   cd react-nike-ecommerce
   npm install
## Usage 
npm start

## Project Structure

   src/
│
├── assets/                 # Images and static assets
├── components/             # Reusable components
│   ├── Cart/
│   ├── Header/
│   ├── Footer/
│   ├── Product/
│   └── ...
├── constants/              # Constant values and configurations
├── hooks/                  # Custom React hooks
├── pages/                  # Page components
│   ├── Home/
│   ├── ProductDetails/
│   ├── Cart/
│   └── ...
├── redux/                  # Redux store, slices, and actions
│   ├── slices/
│   ├── store.js
│   └── ...
├── styles/                 # Global styles and Tailwind configurations
├── App.js                  # Main application component
├── index.js                # Entry point of the application
└── ...

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any changes.

Fork the repository.
Create a new feature branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add YourFeature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.
## License
This project is licensed under the MIT License - see the LICENSE file for details.
