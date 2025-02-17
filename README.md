


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

## Contact

If you have any questions or need further assistance, feel free to reach out to us at:  
**Email**: mehefujalim@gmail.com  
**GitHub**: [mehefujali](https://github.com/mehefujali)


