1. What problem does the context API help solve?

Prop drilling. With context API we no longer have to pass props through components that don't need them.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

'actions' are exactly what they sound like, they tell the reducer what needs to be done. They are the 911 operator that says if we need to send a police car or fire truck or ambulance.

The reducer is a function that responds to the action type that came through. So this is like the first responders, which have been specified by the actions.

The store is the magical place that holds all of the app state. It's like a vault, and you need to follow a specific 'combination' to be able to change things in there.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the state across all of the app, basically all of the stuff the app needs to run. It's a lot of stuff.

Component state is more the smaller stuff that is very local and specific to the component it's in. 

Choosing one or the other really depends on the data. If it's big and in a lot of places and affects a lot, it's probably application. If it's little and no one else would notice if it disappeared, probably component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

A thunk is a function in a function. 'redux-thunk' is middleware that looks for thunks, invokes them, and passes dispatch to them

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Prop drilling I guess? It's kind of annoying and tedius, but hey I understood that one at least.