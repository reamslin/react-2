### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

React Router allows for client side routing and allows for single page applications. 

- What is a single page application?

A single page application is when parts of th4e web page are rendered based on user's needs rather than full page loads, giving a smoother experience for users.

- What are some differences between client side and server side routing?
In client side ruting, only parts of the page are rewritten with new data vs entire new page loads from server side routing.


- What are two ways of handling redirects with React Router? When would you use each?

You can redirect by rendering a redirect component or by pushing onto the history. You would use a redirect component when you don't want a user to be able to return to the page, and history when they should be able to go back using the back button.

- What are two different ways to handle page-not-found user experiences using React Router? 

You can include a catch-all in your switch component and render a not-found component, or you could have the catch all redirect to a 404 page.

- How do you grab URL parameters from within a component using React Router?

You can use the useParams hook.

- What is context in React? When would you use it?

Context allows you to share data across all components. You would use it to avoid prop drilling when nested components need access to data stored at a higher component level.

- Describe some differences between class-based components and function
  components in React.

Function based components rely on hooks for state, effects, and other features. Class-based components utilize properties of the instance of the class to store state. They also have lifecycle methods to help with effects.

- What are some of the problems that hooks were designed to solve?
One main issue was reusing common business logic across different components.