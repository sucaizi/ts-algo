export class Node {

    data: any
    left: Node | null
    right: Node | null

    constructor(data: any, left: Node | null = null, right: Node | null = null) {
        this.data = data
        this.left = left
        this.right = right
    }
}

export class BinaryTree {

    private root: Node | null = null

    constructor(tree: Array < number > | number) {

        if (Array.isArray(tree)) {
            for (let i = 0, len = tree.length; i < len; i++) {
                this.insert(tree[i]);
            }
        } else if (typeof tree === 'number') {
            this.insert(tree)
        } else {
            console.error('请输入Number类型或者Array类型的参数')
        }
    }

    /**
     * insert
     * @param data 
     */
    public insert(data: any): void {

        let newNode = new Node(data)
        if (this.root === null) {
            this.root = newNode
        } else {
            let currentNode = this.root
            while (currentNode != null) {
                if (data < currentNode.data) {
                    if (currentNode.left === null) {
                        currentNode.left = newNode
                        break
                    }
                    currentNode = currentNode.left
                } else {
                    if (currentNode.right === null) {
                        currentNode.right = newNode
                        break
                    }
                    currentNode = currentNode.right
                }

            }
        }
    }

    /**
     * exist
     * @param data 
     */
    public exist(data: any): boolean {

        let searchNode = (node: Node | null, data: any): boolean => {
            if (node === null) return false
            else if (data < node.data) return searchNode(node.left, data)
            else if (data > node.data) return searchNode(node.right, data)
            else return true
        }
        return searchNode(this.root, data)
    }

    /**
     * find
     * @param data
     */
    public find(data: any): Node | null {

        if (data === null) return null
        let currentNode = this.root
        while (true) {
            if (currentNode === null) return null

            if (currentNode.data === data) {
                return currentNode
            }

            currentNode = data < currentNode.data ? currentNode.left : currentNode.right
        }
    }

    /**
     * remove
     */
    public remove(data: any) {

        let node: Node | null = this.find(data)
        if (node === null) return

        if (node.left === null && node.right === null) {
            node = null
            return
        }

        if (node.right === null || node.left === null) {
            node = node.left || node.right
            return
        }

        if (node.right != null && node.left != null) {
            let currentNode: Node | null = node
            while (currentNode && currentNode.left != null) {
                currentNode = currentNode.left
            }
            node.data = currentNode.data
        }
    }

    /**
     * inOrderTraverse
     */
    public inOrderTraverse(visitedFn: (data: any) => any) {

        let inOrderTraverseNode = (node: any | null, visitedFn: (data: any) => any) => {
            if (node !== null) {
                inOrderTraverseNode(node.left, visitedFn);
                visitedFn(node.data);
                inOrderTraverseNode(node.right, visitedFn);
            }
        }
        inOrderTraverseNode(this.root, visitedFn)
    }

    /**
     * preOrderTraverse
     */
    public preOrderTraverse(visitedFn: (data: any) => any) {
        let preOrderTraverseNode = (node: any | null, visitedFn: (data: any) => any) => {
            if (node !== null) {
                visitedFn(node.data);
                preOrderTraverseNode(node.left, visitedFn);
                preOrderTraverseNode(node.right, visitedFn);
            }
        }
        preOrderTraverseNode(this.root, visitedFn)
    }

    /**
     * postOrderTraverse
     */
    public postOrderTraverse(visitedFn: (data: any) => any) {
        let postOrderTraverseNode = (node: any | null, visitedFn: (data: any) => any) => {
            if (node !== null) {
                postOrderTraverseNode(node.left, visitedFn);
                postOrderTraverseNode(node.right, visitedFn);
                visitedFn(node.data);
            }
        }
        postOrderTraverseNode(this.root, visitedFn)
    }

    /**
     * min
     */
    public min(): any {
        let currentNode = this.root
        if (currentNode) {
            while (currentNode && currentNode.left) {
                currentNode = currentNode.left
            }
            return currentNode.data
        }
    }

    /**
     * max
     */
    public max() {
        let currentNode = this.root
        if (currentNode) {
            while (currentNode && currentNode.right) {
                currentNode = currentNode.right
            }
            return currentNode.data
        }
    }

    /**
     * maxDepth
     */
    public maxDepth(): number {
        let depth = (node: Node | null): number => {
            if (node === null) return 0
            return Math.max(depth(node.left), depth(node.right)) + 1
        }

        return depth(this.root)
    }

    public show(): Node | null {
        return this.root
    }

}