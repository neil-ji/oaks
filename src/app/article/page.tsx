import { Markdown } from "@/components/index";
import styles from "./page.module.css";
import "katex/dist/katex.min.css";

const text = `
## 前言

数（据结构）算（法）再回顾，加深记忆抗遗忘。

## 前序遍历

[144. 二叉树的前序遍历](https://leetcode.cn/problems/binary-tree-preorder-traversal/)

基本规律：二叉树前序遍历结果一定是\`[root, left, right]\`

~~~js
// 递归
var preorderTraversal = function (root) {
  if (!root) return [];

  const r1 = preorderTraversal(root.left);
  const r2 = preorderTraversal(root.right);

  return [root.val].concat(r1).concat(r2);
};
~~~

~~~js
// 迭代
var preorderTraversal = function (root) {
  const stack = [];
  const result = [];

  while (root || stack.length) {
    // 沿左子树遍历
    while (root) {
      stack.push(root);
      result.push(root.val);
      root = root.left;
    }
    // 回到父节点
    const node = stack.pop();
    // 切换到右子树
    root = node.right;
  }

  return result;
};
~~~

## 中序遍历

[94. 二叉树的中序遍历](https://leetcode.cn/problems/binary-tree-inorder-traversal/)

基本规律：二叉树中序遍历结果一定是~[left, root, right]~

~~~js
// 递归
var inorderTraversal = function (root) {
  if (!root) return [];

  const r1 = inorderTraversal(root.left);
  const r2 = inorderTraversal(root.right);

  return r1.concat([root.val]).concat(r2);
};
~~~

~~~js
// 迭代
var inorderTraversal = function (root) {
  const stack = [];
  const result = [];

  while (root || stack.length) {
    // 沿左子树遍历
    while (root) {
      stack.push(root);
      root = root.left;
    }
    // 回溯到父节点
    const node = stack.pop();
    result.push(node.val);
    // 切换到右子树
    root = node.right;
  }

  return result;
};
~~~

## 后序遍历

[145. 二叉树的后序遍历](https://leetcode.cn/problems/binary-tree-postorder-traversal/)

基本规律：二叉树后序遍历结果一定是~[left, right, root]~

~~~js
// 递归
var postorderTraversal = function (root) {
  if (!root) return [];

  const r1 = postorderTraversal(root.left);
  const r2 = postorderTraversal(root.right);

  return r1.concat(r2).concat([root.val]);
};
~~~

~~~js
// 迭代
var postorderTraversal = function (root) {
  const stack = [];
  const result = [];
  let prevTraversedNode = null;

  while (root || stack.length) {
    // 沿左子树遍历
    while (root) {
      stack.push(root);
      root = root.left;
    }

    // 回溯到父节点
    const node = stack.pop();
    if (!node.right || node.right === prevTraversedNode) {
      // 确定右子树不存在，或右子树已经访问过，再来访问该节点
      result.push(node.val);
      // 更新已访问节点为该节点
      prevTraversedNode = node;
    } else {
      // 切换到右子树
      stack.push(node);
      root = node.right;
    }
  }

  return result;
};
~~~

## 前中后序遍历总结

递归实现只需记住返回结果时的规律：

1. 前：[root, left, right]
2. 中：[left, root, right]
3. 后：[left, right, root]

同理，该规律也可以用来解决这类经典问题：已知中序 + 前 or 后序遍历结果，重建二叉树；

迭代实现记住先左后右，然后注意何时取值；

1. 前：沿左遍历时取值；
2. 中：回溯到父节点时取值；
3. 后：回溯到父节点时：
   1. 如果右子树不存在或已经遍历过，此时再取值；
   2. 如果右子树存在且没有遍历过，之前 pop 的节点要再 push 回去，因为此时还不能取值；

## 层序遍历

- [102. 二叉树的层序遍历](https://leetcode.cn/problems/binary-tree-level-order-traversal/)
- [107. 二叉树的层序遍历 II](https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/)
- [103. 二叉树的锯齿形层序遍历](https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/)
- [剑指 Offer 32 - II. 从上到下打印二叉树 II](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/)
- [剑指 Offer 32 - III. 从上到下打印二叉树 III](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/)

~~~js
// 从根到叶
var levelOrder = function (root) {
  const queue = [root];
  const result = [];
  while (root && queue.length) {
    const layer = [];
    let len = queue.length;
    while (len) {
      const node = queue.pop();
      layer.push(node.val);
      node.left && queue.unshift(node.left);
      node.right && queue.unshift(node.right);
      len--;
    }
    result.push(layer);
  }

  return result;
};
// 从叶到根
var levelOrderBottom = function (root) {
  const queue = [root];
  const result = [];

  while (root && queue.length) {
    const layer = [];
    let len = queue.length;
    while (len) {
      const node = queue.pop();
      layer.push(node.val);
      node.left && queue.unshift(node.left);
      node.right && queue.unshift(node.right);
      len--;
    }

    result.push(layer);
  }

  return result.reverse();
};
// 交错层序
var zigzagLevelOrder = function (root) {
  const queue = [root];
  const result = [];
  let shouldReverse = false;

  while (root && queue.length) {
    let len = queue.length;
    const layer = [];
    while (len) {
      const node = queue.pop();
      layer.push(node.val);
      node.left && queue.unshift(node.left);
      node.right && queue.unshift(node.right);
      len--;
    }

    result.push(shouldReverse ? layer.reverse() : layer);
    shouldReverse = !shouldReverse;
  }

  return result;
};
~~~`;

export default function Article() {
  return (
    <>
      <Markdown text={text} />
    </>
  );
}
