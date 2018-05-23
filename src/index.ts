import { LinkedList } from 'linked-list-typescript';

export class Stack<T> extends LinkedList<T> {
  constructor(...values: T[]) {
    super(...values);
  }

  get top() {
    return this.head;
  }

  get size() {
    return this.length;
  }

  push(val: T) {
    this.prepend(val);
  }

  pop(): T {
    return this.removeHead();
  }
}
