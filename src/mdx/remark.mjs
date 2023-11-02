import { Parser } from 'acorn';
import jsx from 'acorn-jsx';
import escapeStringRegexp from 'escape-string-regexp';
import * as path from 'path';
import remarkGfm from 'remark-gfm';
import { unifiedConditional } from 'unified-conditional';

function remarkMDXLayout(source, metaName) {
  let parser = Parser.extend(jsx());
  let parseOptions = { ecmaVersion: 'latest', sourceType: 'module' };

  return (tree) => {
    let imp = `import _Layout from '${source}'`;
    let exp = `export default function Layout(props) {
      return <_Layout {...props} ${metaName}={${metaName}} />
    }`;

    tree.children.push(
      {
        type: 'mdxjsEsm',
        value: imp,
        data: { estree: parser.parse(imp, parseOptions) },
      },
      {
        type: 'mdxjsEsm',
        value: exp,
        data: { estree: parser.parse(exp, parseOptions) },
      }
    );
  };
}

export const remarkPlugins = [
  remarkGfm,
  [
    unifiedConditional,
    [new RegExp(`^${escapeStringRegexp(path.resolve('src/app/apps'))}`), [[remarkMDXLayout, '@/app/apps/wrapper', 'appData']]],
    [new RegExp(`^${escapeStringRegexp(path.resolve('src/app/leetcode'))}`), [[remarkMDXLayout, '@/app/leetcode/wrapper', 'leetData']]],
  ],
];
