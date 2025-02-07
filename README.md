


# Press point

## Project Overview

This is a full-stack web application for a Newspaper platform that allows users to consume news articles, subscribe to premium content, and contribute articles. The platform is built using **React** for the frontend, **Node.js** and **Express** for the backend, and **MongoDB** for the database. Firebase is used for user authentication, and React Router is utilized for routing.

## Features

- **Trending Articles Slider**: Displays the top 6 trending articles based on views.
- **Publisher Section**: Lists all publishers added by the admin.
- **Statistics Page**: Shows the count of all users, normal users, and premium users using `react-countup`.
- **Plans Section**: Displays free and premium user features. Clicking a button navigates to the subscription page.
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop views.
- **Admin Dashboard**: A private route that is visible only to admin users, allowing them to manage content and users.
- **CRUD Operations**: Articles can be added, updated, and deleted by admins. Users can add articles pending approval.
- **User Authentication**: Users can register, log in, and access personalized features such as My Articles and Premium Articles (if subscribed).
- **Sweet Alerts**: Custom notifications for CRUD operations, login, and sign-up success/failure.
- **Environment Variables**: Firebase and MongoDB credentials are stored in environment variables for security.

## Technologies Used

- **Frontend**: React, React Router, React-Select, React-CountUp
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: Firebase Authentication
- **Notifications**: SweetAlert2, Toastify
- **Environment Variables**: For sensitive data like Firebase and MongoDB credentials.


### Live Site

You can access the live version of the website at the following URL:  
[Live Site URL](https://press-point-k.web.app)

## Admin Credentials

- **Admin Username**: ``` admin@press.com```
- **Admin Password**: ``` Admin@11 ```

## Key Features

1. **Home Page**:
   - Navbar with links to Home, Add Articles, All Articles, Subscription, Dashboard, My Articles, Premium Articles, and User Profile.
   - Trending Articles section (slider).
   - All Publishers section (displayed only if the user is an admin).
   - Statistics section showing user counts.
   - Plans section for free and premium users.

2. **Add Article Page** (Private Route):
   - Form to submit articles with title, image, publisher, tags, and description.
   - Articles are submitted for admin approval before being visible to the public.

3. **User Profile**:
   - Users can view their profile and manage their articles.

4. **Subscription**:
   - Users can view features available for free and premium subscribers.
   - Subscription page allows users to subscribe to premium content.

5. **Admin Dashboard**:
   - Admin can manage articles, publishers, and users.

## GitHub Commits

- **Frontend**: At least 20 notable commits.
- **Backend**: At least 12 notable commits.

## Development Notes

- The app uses **React Router** for navigation between pages.
- **React Select** is used for the multi-select dropdown for tags.
- The app is designed to be responsive using CSS media queries.
- **Tanstack Query** is used for data fetching with the GET method.
- SweetAlert2 is used for all CRUD operation notifications, login, and sign-up success.

## How to Contribute

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request.



## Acknowledgements

- **React**: For building the frontend.
- **Node.js**: For building the backend.
- **Express**: For creating the backend server.
- **MongoDB**: For database management.
- **Firebase**: For user authentication.
- **SweetAlert2**: For custom notifications.

  
## Dependencies
```
"dependencies": {
    "@heroicons/react": "^2.2.0",
    "@material-tailwind/react": "^2.1.10",
    "@stripe/react-stripe-js": "^3.1.1",
    "@stripe/stripe-js": "^5.5.0",
    "@tanstack/react-query": "^5.64.1",
    "axios": "^1.7.9",
    "date-fns": "^4.1.0",
    "firebase": "^11.1.0",
    "moment": "^2.30.1",
    "prop-types": "^15.8.1",
    "react": "^18.3.1",
    "react-confetti": "^6.2.2",
    "react-countup": "^6.5.3",
    "react-dom": "^18.3.1",
    "react-fast-marquee": "^1.6.5",
    "react-google-charts": "^5.2.1",
    "react-helmet": "^6.1.0",
    "react-hook-form": "^7.54.2",
    "react-hot-toast": "^2.5.1",
    "react-icons": "^5.4.0",
    "react-router-dom": "^7.1.1",
    "react-select": "^5.9.0",
    "sweetalert2": "^11.15.10",
    "swiper": "^11.2.1",
    "usehooks-ts": "^3.1.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.17.0",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.17.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.14.0",
    "postcss": "^8.5.0",
    "tailwindcss": "^3.4.17",
    "vite": "^6.0.5"
  }
```
## Contact

If you have any questions or need further assistance, feel free to reach out to us at:  
**Email**: mehefujalim@gmail.com  
**GitHub**: [mehefujali](https://github.com/mehefujali)


