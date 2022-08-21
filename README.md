# Description:

This is a React Application that queries the anime API, and returns 25 results to the user. If the user clicks on a photo, the app will return details about that photo from the API. ![Screen Shot 2021-07-02 at 7 50 09 AM](https://github.com/CrowdedAstronaut/all-about-anime/blob/main/src/assets/images/all-about-anime.png)

# Table of Contents

- [About this project](#about)
- [Workflow](#workflow)
- [Technologies](#technologies)
- [Links](#links)
- [Installation](#install)
- [APIs](#apis)

<hr />
<br />
[Home_Mobile](https://user-images.githubusercontent.com/65795477/125976547-f39ebe7f-00e5-4988-b107-ff53a5ca906f.jpeg)

## Project Description

All About Anime is a working, interactive, React application that receives data from an anime API and returns results to the user. The app allows users to learn more about anime, their photos, their names, and their descriptions.

## User Stories (MVP/CRUD)

- As a user of All About Anime, I want to be able to view the top anime and view the details of each character so I can have all the information in a centralized location.

## Workflow

Our team used Agile workflow for this sprint.

# Version Control

I implemented Git Feature Branch Workflow. All pull requests in Github were reviewed by another team member before being merged into the main branch.

## Learning Experience

Cut problems into smaller pieces and console.log any unknown data. This was our first project as a team and so we relied heavily upon each other to debug our own problems. We learned a lot about communication, division of labor, project management, and how to utilize each of our individual strengths. Read documentation!!! Most of the answers are available if you know where and how to search.

## Setting Up Project

One of the key feature of React is the composition of the functional components. Components are reuseable functions in React, and in order to efficiently build our app, we had to carefully decide on a uniform set of data and plan who would work on which components. Before diving into the creating the app, it was important to understand the components hierarchy.

## Building the Core Structure

React Components
The Component Hierarchy diagram, above, represents of how the components are structured in our app.

In this case, all of the event listeners and the main API calls were done in the 'App.js' file and that data is passed down to Languages and then Language.

## User Experience - Responsive design.

Creating a responsive App. All About Anime uses React bootstap paired with Flexbox and media queries in order to make it responsive across mobile, tablet, and desktop widths.

## Future Directions

User Stories (Stretch Goals)

- As a user of All About Anime, I want a search feature that allows me to search for character by name.

## Accomplishments

This application uses a Node, Express, and Mongoose API. There is Create, Read, Update, and Destroy functionality built throughout the app. The front-end uses React and leverages the backend API RESTfully to Create, Read, Update, and Destroy resources. This app uses CSS Grid and Flexbox along with media queries to make your app responsive across mobile, tablet, and desktop widths.

## Installation

```
yarn install

```
