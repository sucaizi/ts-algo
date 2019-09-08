import {
    BinaryTree, Node
} from '../src/base/BinaryTree';

describe('binary tree', () => {
    it('create binary tree', () => {
        let data = [8, 3, 6, 4, 9, 11, 2, 5, 7];
        let bitree = new BinaryTree(data);
        
        var result = new Array<number>();
        bitree.inOrderTraverse((data: number) => {
            result.push(data);
        } );

        expect(result).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 11]);
    });
});