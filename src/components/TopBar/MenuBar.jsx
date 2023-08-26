import { VSCode } from '@/icons';

const MenuItems = ['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help'];

export default function MenuBar() {
  return (
    <div className="p-1 flex">
      <VSCode />
      <div className="p-1 cursor-default ml-2">
        {MenuItems.map((item) => (
          <span key={item} className="py-1 px-2 hover:bg-gray-300 rounded-lg">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
