"use strict";
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
exports.__esModule = true;
var Node = /** @class */ (function () {
    function Node(data, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.data = data;
        this.left = left;
        this.right = right;
    }
    return Node;
}());
exports.Node = Node;
var BinaryTree = /** @class */ (function () {
    function BinaryTree(tree) {
        this.root = null;
        if (Array.isArray(tree)) {
            for (var i = 0, len = tree.length; i < len;) {
                this.insert(tree[i]);
            }
        }
        else if (typeof tree === 'number') {
            this.insert(tree);
        }
        else {
            console.error('请输入Number类型或者Array类型的参数');
        }
    }
    /**
     * insert
     * @param data
     */
    BinaryTree.prototype.insert = function (data) {
        var newNode = new Node(data);
        console.log(this.root);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            var currentNode = this.root;
            while (true) {
                if (data < currentNode.data) {
                    if (currentNode.left === null) {
                        currentNode.left = newNode;
                        break;
                    }
                    currentNode = currentNode.left;
                }
                else {
                    if (currentNode.right === null) {
                        currentNode.right = newNode;
                        break;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    };
    /**
     * exist
     * @param data
     */
    BinaryTree.prototype.exist = function (data) {
        var searchNode = function (node, data) {
            if (node === null)
                return false;
            else if (data < node.data)
                return searchNode(node.left, data);
            else if (data > node.data)
                return searchNode(node.right, data);
            else
                return true;
        };
        return searchNode(this.root, data);
    };
    /**
     * find
     * @param data
     */
    BinaryTree.prototype.find = function (data) {
        if (data === null)
            return null;
        var currentNode = this.root;
        while (true) {
            if (currentNode === null)
                return null;
            if (currentNode.data === data) {
                return currentNode;
            }
            currentNode = data < currentNode.data ? currentNode.left : currentNode.right;
        }
    };
    /**
     * remove
     */
    BinaryTree.prototype.remove = function (data) {
        var node = this.find(data);
        if (node === null)
            return;
        if (node.left === null && node.right === null) {
            node = null;
            return;
        }
        if (node.right === null || node.left === null) {
            node = node.left || node.right;
            return;
        }
        if (node.right != null && node.left != null) {
            var currentNode = node;
            while (currentNode && currentNode.left != null) {
                currentNode = currentNode.left;
            }
            node.data = currentNode.data;
        }
    };
    /**
     * inOrderTraverse
     */
    BinaryTree.prototype.inOrderTraverse = function (visitedFn) {
        var inOrderTraverseNode = function (node, visitedFn) {
            if (node !== null) {
                inOrderTraverseNode(node.left, visitedFn);
                visitedFn(node.key);
                inOrderTraverseNode(node.right, visitedFn);
            }
        };
        inOrderTraverseNode(this.root, visitedFn);
    };
    /**
     * preOrderTraverse
     */
    BinaryTree.prototype.preOrderTraverse = function (visitedFn) {
        var preOrderTraverseNode = function (node, visitedFn) {
            if (node !== null) {
                visitedFn(node.key);
                preOrderTraverseNode(node.left, visitedFn);
                preOrderTraverseNode(node.right, visitedFn);
            }
        };
        preOrderTraverseNode(this.root, visitedFn);
    };
    /**
     * postOrderTraverse
     */
    BinaryTree.prototype.postOrderTraverse = function (visitedFn) {
        var postOrderTraverseNode = function (node, visitedFn) {
            if (node !== null) {
                postOrderTraverseNode(node.left, visitedFn);
                postOrderTraverseNode(node.right, visitedFn);
                visitedFn(node.key);
            }
        };
        postOrderTraverseNode(this.root, visitedFn);
    };
    /**
     * min
     */
    BinaryTree.prototype.min = function () {
        var currentNode = this.root;
        if (currentNode) {
            while (currentNode && currentNode.left) {
                currentNode = currentNode.left;
            }
            return currentNode.data;
        }
    };
    /**
     * max
     */
    BinaryTree.prototype.max = function () {
        var currentNode = this.root;
        if (currentNode) {
            while (currentNode && currentNode.right) {
                currentNode = currentNode.right;
            }
            return currentNode.data;
        }
    };
    /**
     * maxDepth
     */
    BinaryTree.prototype.maxDepth = function () {
        var depth = function (node) {
            if (node === null)
                return 0;
            return Math.max(depth(node.left), depth(node.right)) + 1;
        };
        return depth(this.root);
    };
    BinaryTree.prototype.show = function () {
        return this.root;
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
var data = [8, 3, 6, 4, 9, 11, 2, 5, 7];
var bitree = new BinaryTree(data);
var root = bitree.show();
console.log(root);
