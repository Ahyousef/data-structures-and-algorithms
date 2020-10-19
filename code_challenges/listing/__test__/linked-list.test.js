const LinkedList = require('../linked-list.js')

describe("Can successfully instantiate an empty linked list", () => {
  const ll = new LinkedList();
  it("should be instance of LinkedList", () => {
    expect(ll).toBeInstanceOf(LinkedList);
  });
  it("should be empty", () => {
    const ll = new LinkedList();
    expect(ll.head).toBeNull();
  });
});
describe("insert()", () => {
  const ll = new LinkedList();
  it("Can properly insert into the linked list", () => {
    ll.insert(0);
    let head = ll.head
    expect(head.value).toEqual(0);
  });
  it("head property will properly point to the first node in the linked list", () => {
    let head = ll.head
    expect(head.next).toEqual(null);
    expect(head.value).toEqual(0);
  });
  it("Can properly insert multiple nodes into the linked list", () => {
    let head = ll.head;
    ll.insert(2);
    ll.insert(1);
    let nextNode = head.next;
    expect(head.value).toEqual(0);
    expect(nextNode.value).toEqual(1);
  });
});

describe("include()", () => {
  const ll = new LinkedList();
  ll.append(0);
  it("Will return true when finding a value within the linked list that exists", () => {
    expect(ll.includes(0)).toEqual(true);
  });
  it("Will return false when searching for a value in the linked list that does not exist", () => {
    expect(ll.includes(1)).toEqual(false);
  });
});
describe("toString()", () => {
  const ll = new LinkedList();
  ll.append('a');
  ll.append('b');
  ll.append('c');
  it("Can properly return a collection of all the values that exist in the linked list", () => {
    expect(ll.toString()).toEqual(`{a} -> {b} -> {c} -> NULL`);
  });
});
describe("insertBefore()", () => {
  const ll = new LinkedList();
  ll.append('a');
  ll.append('b');
  ll.append('c');
  it("Can successfully insert a node before a node located in the middle of a linked list", () => {
    expect(ll.insertBefore('b', 'd')).toEqual(`{a} -> {d} -> {b} -> {c} -> NULL`);
  });
  it("Can successfully insert a node before the first node of a linked list", () => {
    expect(ll.insertBefore('a', 'd')).toEqual(`{d} -> {a} -> {d} -> {b} -> {c} -> NULL`);
  });
});
describe("insertAfter()", () => {
  const ll = new LinkedList();
  ll.append('a');
  ll.append('b');
  ll.append('c');
  it("Can successfully insert a node after a node located in the middle of a linked list", () => {
    expect(ll.insertAfter('b', 'd')).toEqual(`{a} -> {b} -> {d} -> {c} -> NULL`);
  });
  it("Can successfully insert a node after the first node of a linked list", () => {
    expect(ll.insertAfter('a', 'd')).toEqual(`{a} -> {d} -> {b} -> {d} -> {c} -> NULL`);
  });
});
describe("kthFromEnd()", () => {
  const oneLL = new LinkedList();
  oneLL.append('a');

  it("Where the linked list is of a size 1 ", () => {
    expect(oneLL.kthFromEnd(0)).toEqual('a');
  });
  const kLL = new LinkedList();
  kLL.append('a');
  kLL.append('b');
  kLL.append('c');
  kLL.append('d');
  // {a} -> {b} -> {c} -> {d} -> NULL
  it("Where k is greater than the length of the linked list", () => {
    expect(kLL.kthFromEnd(5)).toEqual(false);
  });
  it("Where k and the length of the list are the same", () => {
    expect(kLL.kthFromEnd(4)).toEqual(false);
  });
  it("“Happy Path” where k is not at the end, but somewhere in the middle of the linked list", () => {
    expect(kLL.kthFromEnd(2)).toEqual('b');
  });
});