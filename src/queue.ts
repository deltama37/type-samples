type Queue<T> = [T[], T[]];
namespace Queue {
  export function empty<T>(): Queue<T> {
    return [[], []];
  }
  export function enqueue<T>(q: Queue<T>, x: T): Queue<T> {
    const [xs, ys] = q;
    return [xs, [x, ...ys]];
  }
  export function dequeue<T>(q: Queue<T>): [T | undefined, Queue<T>] {
    const [xs, ys] = q;
    if (xs.length === 0) {
      if (ys.length === 0) return [undefined, q];
      return [ys[0], [ys.slice(1).reverse(), []]];
    }
    return [xs[0], [xs.slice(1), ys]];
  }
}

let q: Queue<number> = Queue.empty();
Queue.enqueue<number>([[1], []], 1);
console.log(q);

Queue.enqueue<number>(q, 3);
console.log(String(""));

const array = [];

array.push(1);
