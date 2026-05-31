# Varition 1 => 

- it will run every render of the Application

React
```
useEffect(()={
    alert("it will run in every render");
})
```

# Varition 2 => 

- It will run only on first render 

React
```
useEffect(()={
    alert("It it will run only on first render ");
}, [])
```

# Varition 3 => 

- It it will run when this count value changes

React 
```
useEffect(()={
    alert("It it will run when this count value changes");
}, [count])

```

# Varition 4 => 

- It it will run when this count/total value changes.

React
```
useEffect(()={
    alert("It it will run when this count/total value changes");
}, [count, total])
```


