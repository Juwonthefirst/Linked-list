## Linked List Class 

A simple JavaScript class for creating double linked list with each element being a node

`import {LinkedList} from './Linked-list.js'`

`const linkedList = new LinkedList()`

`linkedList.append('foo')`

### Features

- `prepend(value)` takes an argument "value" and adds a new element to the front of the list and also to the end if the list is empty
  `linkedList.prepend(foo)`
  
- `append(value)` takes an argument "value" and adds the value to the back of the list and also to the front if the list is empty
  `linkedList.append(bar)`
  
- `size` returns the total number of nodes(elements) in the list
  `linkedList.size // 3`
  
- `at(index)` takes an argument "index" then returns the node present at that index
  `linkedList.at(1) // foo `

  it even supports negative indexing
  `linkedList.at(-1) // bar `
  
- `head` returns the first element in the list

  `linkedList.head // foo`

- `tail` returns the first element in the list

`linkedList.tail // bar`

- `pop()` deletes the last node(element) from the list

  `linkedList.pop()`

- `contains(value)` takes an argument "value" and returns true if a node with that value exists

   `linkedList.contains('foo') // true`

- `find(value)` takes an argument "value" and if a node with that value exists it returns the index of the node
  `linkedList.find('bar') // 2`

- `toString()` converts the list into a human readable string
  `linkedList.toString()`
  `String(linkedList)`

- `insertAt(value, index)` takes two arguments "value" and "index" and inserts a node of that value into the index provided without deleting any other element
  `linkedList.insertAt("rat", 2)`

- `removeAt(index)` takes an argument "index" and removes the node at that index
  `linkedList.removeAt(1)`
  
