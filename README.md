## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.


## State (local storage):
Initialize HP, Gold, quests completed, username

(do data modeling)

## Signup page
- Form with a button
- on submit . . .
    - put the name and class into local storage

## Map page
- Some div (with background image) to position our links into
- on load . . .
    - if the user is dead of otherwise done, redirects them to the results page
    - check which quests have been completed
    - disable links for completed quests, 
    - render links for uncompleted quests
        - links should have the id in the query params

## Quest page
- Div to put all our quest stuff into
- on load . . .
    - get the quest object that matches the query parameter
    - use that object to render data onto the page
- on submit . . .
    - look at the selected choice 
    - use the selected choice to update state with new values for HP, gold, and completed
    - replace the form HTML with a description (from the choice object)
    - find a way to redirect the user to the map

## Results page
- Div to put all our results stuff into
- on load . . .
    - render results based on current state

## Backlog
- Do data modeling. Copy some quest data over.
- We'll need our utils (findById, local-storage-utils.js)
- Do HTML skeleton Setup. Everything depends on HTML setup.
- We need our user data in local storage
    - That means we should start with the login page
- We need a simple version of the map page set up so that we can even navigate to the the quest page
    - We need links
- Once we can get to the quest page we should build out the quest page
    - Render out quest
    - Update local storage on submit
    - Redirect back to map
- Now that we've built out the quest page, we can trail back to the map page and add more features
    - Conditionally render links or checkmarks based on completed quests
    - Check if the game is over. If so, redirect to results page