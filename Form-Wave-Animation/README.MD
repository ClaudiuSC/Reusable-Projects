A project from Brad Traversy's **50 Projects in 50 Days**:
- it features a form that has the labels positioned relative to their inputs;
- the letter from each text label transitions on the Y axis when the inputs are focused; they do so one-by-one with the use of the property "transition-delay" which is assigned 
inline with an incremented value of 50ms for each letter, using JS.

Improvement from the original project:
- the label, being on top of the input, was obstructing the part of the input which it covered to be clicked, thus being necessary to avoid that area => i gave the labels the CSS 
property "pointer-events: none;" which makes the element unclickable while the input underneath it is still clickable.
