import { VSCode } from '@/icons';

const menuItems = ['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help'];

export default function MenuBar() {
  return (
    <div className="p-1 flex">
      <div className="my-auto">
        <VSCode />
      </div>
      <div className="p-1 ml-2">
        {menuItems.map((item) => (
          <button key={item} className="py-1 px-2 hover:bg-gray-300 rounded-lg cursor-default">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
