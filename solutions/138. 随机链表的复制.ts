class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList(head: _Node | null): _Node | null {
  const map = new Map<_Node, _Node>();
  return deepClone(head)
  function deepClone(node: _Node | null): _Node | null {
    if (node === null) return null;
    if (map.has(node)) return map.get(node)!;
    const newNode = new _Node(node.val);
    map.set(node, newNode);
    newNode.next = deepClone(node.next);
    newNode.random = deepClone(node.random);
    return newNode;
  }
}
