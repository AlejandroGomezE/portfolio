// @ts-check
const { readdir, readFile, writeFile } = require('fs/promises');
const matter = require('gray-matter');

const directory = './src/app/leetcode';

async function updateFrontMatter({ folder, filepath }: { folder: string; filepath: string }) {
  const { content }: { content: string } = matter(await readFile(filepath));
  const jsonContent: Array<{ title: string; slug: string; difficulty: string; description: string; code: string; explanation: string }> = await require(`./leetcode/${folder}.js`);

  const sectionsInsertIndex = content.indexOf('//SectionsStart') + 15;
  const sectionsEndIndex = content.indexOf('//SectionsEnd');
  const examplesStart = content.indexOf('[//]: #ExamplesStart') + 20;
  const examplesEnd = content.indexOf('[//]: #ExamplesEnd');

  let newSections: { index: number; title: string; id: string }[] = [];

  let newContent = content.slice(0, examplesStart);

  for (const [index, item] of jsonContent.entries()) {
    newSections.push({
      index: index + 1,
      title: item.title,
      id: item.slug + '.' + item.difficulty,
    });
    newContent += `
    <Section id={sections[${index + 1}].id} className="pt-2">
      <Border className="translate-y-5"/>
    
      ### ${item.title}

      ${item.description}
      <CodeGroup slug="${item.slug}">
        ${item.code}
      </CodeGroup>
      ${item.explanation}
    </Section>
    `;
  }

  newContent += content.slice(examplesEnd);

  newContent = newContent.slice(0, sectionsInsertIndex)  + newSections.map((s) => `\n\t{ index: ${s.index}, title: '${s.title}', id: '${s.id}' }`) + '\n\t' + newContent.slice(sectionsEndIndex);

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
