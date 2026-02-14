const content = [
  {
    title: 'Binary Tree Paths',
    slug: 'binary-tree-paths',
    difficulty: 'easy',
    description: `
      Given the root of a binary tree, return all root-to-leaf paths in any order.

      A leaf is a node with no children.

      #### Example 1:

      <strong>Input</strong>: root = [1,2,3,null,5]
      <br/><strong>Output</strong>: ["1->2->5","1->3"]

      #### Example 2:

      <strong>Input</strong>: root = [1]
      <br/><strong>Output</strong>: ["1"]

      #### Constraints:

      - The number of nodes in the tree is in the range [1, 100].
      - \`-100 <= Node.val <= 100\`
      `,
    code: `
      \`\`\`js
        /**
         * Definition for a binary tree node.
         * function TreeNode(val, left, right) {
         *     this.val = (val===undefined ? 0 : val)
         *     this.left = (left===undefined ? null : left)
         *     this.right = (right===undefined ? null : right)
         * }
         */
        /**
         * @param {TreeNode} root
         * @return {string[]}
         */
        var binaryTreePaths = function(root) {
            const res = [];
            if (!root) return res;

            const stack = [[root, \`\${root.val}\`]];

            while (stack.length > 0) {
                const [node, path] = stack.pop();

                if (!node.left && !node.right) {
                    res.push(path);
                }

                if (node.right) {
                    stack.push([node.right, \`\${path}->\${node.right.val}\`]);
                }

                if (node.left) {
                    stack.push([node.left, \`\${path}->\${node.left.val}\`]);
                }
            }

            return res;
        };
      \`\`\`
    `,
    explanation: `
    #### Explanation:

      1. Use a stack to simulate DFS: each entry is \`[node, pathSoFar]\`.
      2. Start with \`[root, root.val]\`.
      3. Pop a pair: if the node is a leaf (no left/right), push \`pathSoFar\` into the result.
      4. Otherwise push right then left onto the stack with \`pathSoFar->child.val\` so we explore and build paths without mutating a single path (no explicit backtrack step).
      5. Return the collected paths.
    `,
  },
];

module.exports = content;
