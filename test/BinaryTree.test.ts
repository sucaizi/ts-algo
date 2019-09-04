import {
    BinaryTree
} from '../src/base/BinaryTree';

describe('binary tree', () => {
    it('create binary tree', () => {
        let data = [8, 3, 6, 4, 9, 11, 2, 5, 7];
        let bitree = new BinaryTree(data);
        let root = bitree.show();

        expect(root.data).toEqual(8);
    });
});