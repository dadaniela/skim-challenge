# SKIM challenge

## [This page](http://dadaniela.github.io/skim-challenge) consists of 2 coding problems and a bonus challenge that requires the page to be responsive with one challenge next to the other. The coding problems have a set of specifications sent to me via email that are not disclosed here.

### Process

Day 1

- Set a GitHub repo
- Quick wireframe on paper
- HTML and CSS setup
- Responsiveness

Day 2

- First challenge
- HTML and CSS adjustments

Day 3

- Second challenge
- HTML and CSS adjustments

Day 4

- Final adjustments and checking edge cases
- Readme
- Deploy using GitHub pages

### Implementation

<span style="color:mediumblue">Challenge **1** - find the factorial</span>

I started by adding an input field and a button to allow the user to type in the digits and then click on calculate, later I replaced the button with an output field to better match the challenge description.

Then, I started the logic by selecting the elements and transforming them into integers before passing them to the factorial function. That function will then check each input case to handle it correctly, returning the result in the output field.

<span style="color:mediumvioletred">Challenge **2** - fizzbuzz</span>

For the second challenge, I’ve added an input field that will display console logs. After, selecting the input element and parsing the value into integers, the fizzbuzz function will check the remainder of a division to return the correct log in the console.

### Other / nice to have

- For challenge 2 it would be nice to have a small delay that allows the user to finish tying in the value before showing the console logs. I found out about debouncing functions but I’m afraid the implementation would cost me much more time as I need to learn it first and didn’t want to copy a piece of code I don’t fully understand. It also happens on challenge 1, but the output field changes dynamically and it makes sense, in the console, however, if the user enters two digits the logs might look confusing at first.
- On challenge 1 I would like the output field to be *readonly*, but adding this property to the HTML won’t lock it. I could not find a solution to this.
- On Chrome, the input field with type number works properly, but on Safari and Firefox, it’s actually possible to write any character. I did not find a way of limiting that behavior, but the function will check if the values are integers and it doesn’t cause issues.
- On Firefox I could not remove the **-webkit-inner-spin-button**