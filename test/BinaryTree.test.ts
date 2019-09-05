import {
    BinaryTree, Node
} from '../src/base/BinaryTree';

describe('binary tree', () => {
    it('create binary tree', () => {
        let data = [8, 3, 6, 4, 9, 11, 2, 5, 7];
        let bitree = new BinaryTree(data);
        var root = bitree.show();
        console.log(root);
        var rootData = 8 

        expect(rootData).toEqual(8);
    });
});