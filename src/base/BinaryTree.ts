// input [8,3,6,4,9,11,2,5,7];
// output
// let tree = {
//     key: 8,
//     left: {
//         key: 3,
//         left: {
//             key: 2,
//             left: null,
//             right: null
//         },
//         right: {
//             key: 6,
//             left: {
//                 key: 4,
//                 left: null,
//                 right: {
//                     key: 5,
//                     left: null,
//                     right: null
//                 }
//             },
//             right: {
//                 key: 7,
//                 left: null,
//                 right: null
//             }
//         }
//     }
//     right: {
//         key: 9,
//         left: null,
//         right: {
//             key: 11,
//             left: null,
//             right: null
//         }
//     }
// }


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

    constructor() {

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
            while (true) {
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
     * 
     */
    public remove() {

    }

    /**
     * inOrderTraverse
     */
    public inOrderTraverse(visitedFn: (data: any) => any) {

        let inOrderTraverseNode = (node: any | null, visitedFn: (data: any) => any) => {
            if (node !== null) {
                inOrderTraverseNode(node.left, visitedFn);
                visitedFn(node.key);
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
                visitedFn(node.key);
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
                visitedFn(node.key);
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

    public show(): Node | null {
        return this.root
    }

}