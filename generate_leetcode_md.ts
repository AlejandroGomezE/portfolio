// @ts-check
const { readdir, readFile, writeFile } = require('fs/promises');
const matter = require('gray-matter');

const directory = './src/app/leetcode';

async function updateFrontMatter({ folder, filepath }: { folder: string; filepath: string }) {
  const { content }: { content: string } = matter(await readFile(filepath));
  const jsonContent: Array<{ title: string; slug: string; difficulty: string; description: string; code: string }> = await require(`./src/lib/leetcode/${folder}.js`);
  const insertIndex = content.indexOf('[//]: #ExamplesStart') + 20;

  const examplesEnd = content.indexOf('[//]: #ExamplesEnd');
  let newContent = content.slice(0, insertIndex);

  for (const item of jsonContent) {
    newContent += `
    <CodeGroup title="${item.title}">
        ${item.code}
    </CodeGroup>
    `;
  }

  newContent += content.slice(examplesEnd);

  await writeFile(filepath, newContent);
}

async function main() {
  // Get all folder/files crom directory
  const folderNames = (await readdir(directory)) as string[];

  // Get all Folders only
  const mdxFiles = folderNames.filter((f) => !f.endsWith('.tsx'));

  // Go inside folders and get mdx files paths
  const mdxFilesPaths: Array<{ folder: string; filepath: string }> = [];

  // Get all mdx files paths
  for (const folder of mdxFiles) {
    const folderPath = `${directory}/${folder}`;
    const mdxFile = (await readdir(folderPath)) as string[];
    const mdxFilePath = mdxFile.find((f) => f.endsWith('.mdx'));
    mdxFilesPaths.push({ folder, filepath: `${directory}/${folder}/${mdxFilePath}` });
  }

  await Promise.all(mdxFilesPaths.map(updateFrontMatter));
}

main().catch(console.error);
