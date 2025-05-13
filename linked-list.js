class Node {
	constructor(value) {
		this.value = value
		this.prev = null
		this.next = null
	}
}

class LinkedList {
	#head
	#tail
	constructor() {
		this.#head = null
		this.#tail = null
	}
	
	prepend(value) {
		const newNode = new Node(value)
		if (!this.#head) {
			this.#head = newNode
			this.#tail = newNode
		}
		else {
			newNode.next = this.#head
			this.#head.prev = newNode
			this.#head = newNode
		}
	}
	
	append(value) {
		const newNode = new Node(value)
		if (!this.#head) {
			this.#head = newNode
			this.#tail = newNode
		}
		else {
			this.#tail.next = newNode
			newNode.prev = this.#tail
			this.#tail = newNode
		}
	}
	
	get size() {
		let currentNode = this.#head
		let nodeCount = 0
		while (currentNode) {
			currentNode = currentNode.next
			nodeCount++
		}
		return nodeCount
	}
	
	get head() {
		return this.#head
	}
	
	get tail() {
		return this.#tail
	}
	
	at(index) {
		if (index >= 0) {
			let currentNode = this.#head
			let nodeCount = 0
			while (currentNode) {
				if (nodeCount === index) { return currentNode }
				currentNode = currentNode.next
				nodeCount++
			}
		}
		else {
			let currentNode = this.#tail
			let nodeCount = -1
			while (currentNode) {
				if (nodeCount === index) { return currentNode }
				currentNode = currentNode.prev
				nodeCount--
			}
		}
		throw new Error('Index out of bound')
	}
	
	pop() {
		let tailNode = this.#tail
		if (tailNode) {
			tailNode = tailNode.prev
			tailNode.next = null
		}
	}
	
	contains(value) {
		let currentNode = this.#head
		while (currentNode) {
			if (currentNode.value === value) { return true }
			currentNode = currentNode.next
		}
	}
	
	find(value) {
		let currentNode = this.#head
		let nodeCount = 0
		while (currentNode) {
			if (currentNode.value === value) { return nodeCount }
			currentNode = currentNode.next
			nodeCount++
		}
	}
	
	toString() {
		let currentNode = this.#head
		let string = ''
		while (currentNode) {
			string += `(${currentNode.value}) -> `
			currentNode = currentNode.next
		}
		string += 'null'
		return string
	}
	
	insertAt(value, index) {
		if(index === -1){
			this.append(value)
			return
		}
		
		if(index === 0){
			this.prepend(value)
			return
		}
		const nodeAtIndex = this.at(index)
		const nodeBeforeIndex = nodeAtIndex.prev
		const newNode = new Node(value)
		nodeAtIndex.prev = newNode
		nodeBeforeIndex.next = newNode
		newNode.next = nodeAtIndex
	}
	
	removeAt(index){
		const nodeAtIndex = this.at(index)
		const nodeBeforeIndex = nodeAtIndex.prev
		const nodeAfterIndex = nodeAtIndex.next
		nodeBeforeIndex.next = nodeAfterIndex
		nodeAfterIndex.prev = nodeBeforeIndex
	}
}

const list = new LinkedList()
list.append('juwon')
list.append('james')
list.prepend('first')
list.removeAt(-1)
console.log(list.head)
console.log(String(list))