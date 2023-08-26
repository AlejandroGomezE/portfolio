import { ChromeClose, ChromeMinimize, ChromeRestore } from '@/icons';

export default function ControlButtons() {
  return (
    <div className="flex">
      <div className="hover:bg-gray-300 p-3 transform duration-300">
        <ChromeMinimize />
      </div>
      <div className="hover:bg-gray-300 p-3 transform duration-300">
        <ChromeRestore />
      </div>
      <div className="hover:bg-red-500 hover:text-white p-3 transform duration-300">
        <ChromeClose />
      </div>
    </div>
  );
}
