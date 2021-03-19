# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
   providing state without prop drilling

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   actions are objects that tell the reducers how to update state
   reducers update the state
   the store is like a database for the front-end, holding the state and providing it to the compnenets

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
   redux thunk allows our action creators to preform async functions like API calls

4. What is your favorite state management system you've learned and this sprint? Please explain why!
   Redux is the most powerful
