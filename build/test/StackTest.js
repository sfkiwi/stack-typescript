"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("../index");
class Foo {
    constructor(val) {
        this.val = val;
    }
    get bar() {
        return this.val;
    }
}
describe('Stack Tests', () => {
    it('should create an empty stack #1', () => {
        let values = [];
        // pass in the contents of an empty array
        let stack = new index_1.Stack(...values);
        chai_1.expect(stack.size).to.equal(0);
        chai_1.expect(stack.top).to.be.null;
    });
    it('should create an empty stack #2', () => {
        // call the constructor without any arguments
        let stack = new index_1.Stack();
        chai_1.expect(stack.size).to.equal(0);
        chai_1.expect(stack.top).to.be.null;
    });
    it('should create a Linkedstack with a single value', () => {
        let stack = new index_1.Stack(4);
        chai_1.expect(stack.size).to.equal(1);
        chai_1.expect(stack.top).to.equal(4);
    });
    it('should create a Stack with mutiple initial values', () => {
        let values = [4, 5, 6];
        let stack = new index_1.Stack(...values);
        chai_1.expect(stack.size).to.equal(3);
        chai_1.expect(stack.top).to.equal(4);
    });
    it('should allow "any" type', () => {
        let values = [4, { hello: 'world' }, 'hello'];
        let stack = new index_1.Stack(...values);
        chai_1.expect(stack.size).to.equal(3);
        chai_1.expect(stack.top).to.equal(4);
    });
    it('should allow custom types', () => {
        let foo1 = new Foo(4);
        let foo2 = new Foo(5);
        let foo3 = new Foo(6);
        let foo4 = new Foo(7);
        let stack = new index_1.Stack(foo1, foo2, foo3, foo4);
        chai_1.expect(stack.size).to.equal(4);
        chai_1.expect(stack.top).to.equal(foo1);
        chai_1.expect(stack.top.bar).to.equal(foo1.bar);
    });
    it('should push a value to the top of the stack', () => {
        let values = [4, 5, 6];
        let stack = new index_1.Stack(...values);
        chai_1.expect(stack.size).to.equal(3);
        chai_1.expect(stack.top).to.equal(4);
        stack.push(7);
        chai_1.expect(stack.size).to.equal(4);
        chai_1.expect(stack.top).to.equal(7);
    });
    it('should push a value to the top of an emptystack', () => {
        let stack = new index_1.Stack();
        chai_1.expect(stack.size).to.equal(0);
        chai_1.expect(stack.top).to.be.null;
        stack.push(1);
        chai_1.expect(stack.size).to.equal(1);
        chai_1.expect(stack.top).to.equal(1);
    });
    it('should pop a value from the top of the stack', () => {
        let values = [4, 5, 6];
        let stack = new index_1.Stack(...values);
        chai_1.expect(stack.size).to.equal(3);
        chai_1.expect(stack.top).to.equal(4);
        let val = stack.pop();
        chai_1.expect(stack.size).to.equal(2);
        chai_1.expect(stack.top).to.equal(5);
        chai_1.expect(val).to.equal(4);
    });
    it('should handle popping a value from an empty stack', () => {
        let stack = new index_1.Stack();
        chai_1.expect(stack.size).to.equal(0);
        chai_1.expect(stack.top).to.be.null;
        chai_1.expect(stack.tail).to.be.null;
        let val = stack.pop();
        chai_1.expect(stack.size).to.equal(0);
        chai_1.expect(stack.top).to.be.null;
        chai_1.expect(val).to.be.undefined;
    });
    it('should convert the stack to an array', () => {
        let values = [4, 5, 6];
        let stack = new index_1.Stack(...values);
        chai_1.expect(stack.size).to.equal(3);
        chai_1.expect(stack.top).to.equal(4);
        let result = stack.toArray();
        chai_1.expect(stack.size).to.equal(3);
        chai_1.expect(stack.top).to.equal(4);
        chai_1.expect(result).to.deep.equal(values);
    });
});
//# sourceMappingURL=StackTest.js.map