# State -> 

# Porps -> sending data form one component to another component. 
#       -> when sending data from one component to another compoennt the data is readonly.

# what is Hooks ? 

- ## Hooks are Special Functions, That allow us to use state and other react features in functional components.

- ## Earlier, When we Used to create react app using Functional Components, then we didn't have access to the state management and lifecycle methods.

- ## To access these we had to use class components, so this was the problem with functional component. 

- ## But after introducing React Hooks from version 16.8, we can now use state management and other react features without writing class components. 

- ## In other words, hooks are the functions that make functional components work like class components

- ## hooks made react functional components so easy to use, so Developers prefer functional components over class components. 

----------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Benefits of React Hooks ? 

- ## React Hooks simplify the code, improves the readability, reuseability and overall performance of the application. 

----------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Most Commonly used hooks are !! 

- ## useState 
- ## useEffect
- ## useRef
- ## useMemo 
- ## useCallback
- ## useContext 
- ## useReducer
- ## useLayoutEffect
- ## custom hook (we can use our own custom hooks in react)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

# useState Hook in React Hooks : 

- ## useState is a React Hook that stores and manages values in a component. Whenever the value changes, React automatically refreshes the UI with the new value.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

# useEffect Hook in React Hooks : 

- ## useEffect is a React Hook used to perform actions in a component when it loads, updates, or when specific data changes.

- # Some Examples of Side Effects are : 

- ## Fetching Data from API 
- ## Directly Updating the DOM 
- ## Timers like SetTImeOut and SetInterval 

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

# useRef Hook in React Hooks : 

- ## useRef is a React Hook used to store a value that can be changed without causing the component to re-render.

- ## useRef is also used for accessing DOM elements.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

# useMemo in React Hooks : 

- ## useMemo is a React Hook used to memoize expensive calculations, ensuring they run only when their dependent values change.

- ## The useMemo Hook only runs when one of its dependencies gets updated

- ## This can improve the performance of the application. There is one more hook in react to improve performance, that is useCallback hook.

- ## The useMemo and useCallback Hooks are similar. The main difference is : 
- use memo returns memoized value.
- useCallback returns a memoized function.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# useCallback in React Hook : 

- ## useCallback is a React Hook that remembers a function and reuses the same function during re-renders, preventing unnecessary function creation.

# Basically => 

### - useMemo -> caches a value.
### - useCallback -> caches a function.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# UseContext in React Hook : 

- ## useContext is a React Hook used to share data between components without passing props manually at every level.

- ## It helps manage global data like user info, theme, language, or authentication across the React app.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# UseReducer in React Hook : 

- ## UseReducer is similar to useState, But instead of providing state and setter function. It provides state and dispatch fucntion

- ## The UseReducer Hook Accepts two arguments : 
- Reducer Function 
- Initial state 
and returns : Current state and Dispatch method.

- ## The Reducer Function specifies how the state gets updated.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# useLayoutEffect in React Hook : 

- ## useLayoutEffect works similar to useEffect, but it runs before the browser displays the UI on the screen.

- ## useEffect runs after the DOM is rendered and visible to the user.

- ## useLayoutEffect runs before the DOM is painted on the screen, making it useful for measuring or updating layout without flickering.

- ## In React Document is says that the useLayoutEffect will hurt the performance of the application so it is recommended to use useEffect when ever its possible

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# CustomHook in React Hook : 

- ## React allows us to create our own Hook which is known as custom hook. 

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------