# React Tips


### Children props

All components have access to special type of prop named "children".
`<Comp regularProp="xyz"><p>Hello</p></Comp>`
Paragraph hello can be accessed inside the function component as props.children.

### Using array index as key
Even though is possible to use the array indices as key when mapping,
it is not advisable as idx can change if you are adding, removing elements of the arr.
Rule of thumb, use id's if at all possible.

### Handling events with arguments
Events without arguments can simply be called like so:
`<Comp onClick={myFunction} />`
However, if we try to add an argument to myFunction it will be executed immediately 
on component mount. To prevent this, we need to put our function in a callback:
`<Comp onClick={()=> myFuction(arg)} />`