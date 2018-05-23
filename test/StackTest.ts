import { expect } from 'chai';
import { Stack } from '../src/index'

class Foo {
  private val: number;
  constructor(val: number) {
    this.val = val;
  }

  get bar() {
    return this.val;
  }
}

describe('Stack Tests', () => {
  it('should create an empty stack #1', () => {
    let values: number[] = [];

    // pass in the contents of an empty array
    let stack = new Stack<number>(...values);
    expect(stack.size).to.equal(0);
    expect(stack.top).to.be.null;
  });

  it('should create an empty stack #2', () => {

    // call the constructor without any arguments
    let stack = new Stack<number>();
    expect(stack.size).to.equal(0);
    expect(stack.top).to.be.null;
  });

  it('should create a Linkedstack with a single value', () => {
    let stack = new Stack<number>(4);
    expect(stack.size).to.equal(1);
    expect(stack.top).to.equal(4);
  });

  it('should create a Stack with mutiple initial values', () => {
    let values: number[] = [4, 5, 6]
    let stack = new Stack<number>(...values);
    expect(stack.size).to.equal(3);
    expect(stack.top).to.equal(4);
  })

  it('should allow "any" type', () => {
    let values: any[] = [4, { hello: 'world' }, 'hello']
    let stack = new Stack<any>(...values);
    expect(stack.size).to.equal(3);
    expect(stack.top).to.equal(4);
  });

  it('should allow custom types', () => {
    let foo1 = new Foo(4);
    let foo2 = new Foo(5);
    let foo3 = new Foo(6);
    let foo4 = new Foo(7);

    let stack = new Stack<Foo>(foo1, foo2, foo3, foo4);
    expect(stack.size).to.equal(4);
    expect(stack.top).to.equal(foo1);
    expect(stack.top.bar).to.equal(foo1.bar);
  });

  it('should push a value to the top of the stack', () => {
    let values: number[] = [4, 5, 6]
    let stack = new Stack<number>(...values);
    expect(stack.size).to.equal(3);
    expect(stack.top).to.equal(4);
    stack.push(7);
    expect(stack.size).to.equal(4);
    expect(stack.top).to.equal(7);
  });

  it('should push a value to the top of an emptystack', () => {
    let stack = new Stack<number>();
    expect(stack.size).to.equal(0);
    expect(stack.top).to.be.null;
    stack.push(1);
    expect(stack.size).to.equal(1);
    expect(stack.top).to.equal(1);
  });

  it('should pop a value from the top of the stack', () => {
    let values: number[] = [4, 5, 6]
    let stack = new Stack<number>(...values);
    expect(stack.size).to.equal(3);
    expect(stack.top).to.equal(4);
    let val = stack.pop();
    expect(stack.size).to.equal(2);
    expect(stack.top).to.equal(5);
    expect(val).to.equal(4);
  });

  it('should handle popping a value from an empty stack', () => {
    let stack = new Stack<number>();
    expect(stack.size).to.equal(0);
    expect(stack.top).to.be.null;
    expect(stack.tail).to.be.null;
    let val = stack.pop()
    expect(stack.size).to.equal(0);
    expect(stack.top).to.be.null;
    expect(val).to.be.undefined;
  });

  it('should convert the stack to an array', () => {
    let values: number[] = [4, 5, 6]
    let stack = new Stack<number>(...values);
    expect(stack.size).to.equal(3);
    expect(stack.top).to.equal(4);
    let result = stack.toArray()
    expect(stack.size).to.equal(3);
    expect(stack.top).to.equal(4);
    expect(result).to.deep.equal(values);
  });
});