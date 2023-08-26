import { SplitHorizontal, SplitVertical, ToggleSidebar } from '@/icons';

export default function ToggleButtons() {
  return (
    <div className="flex py-2 mx-1">
      <div className="hover:bg-gray-300 p-1 rounded-md">
        <SplitVertical />
      </div>
      <div className="hover:bg-gray-300 p-1 rounded-md">
        <ToggleSidebar />
      </div>
      <div className="hover:bg-gray-300 p-1 rounded-md">
        <SplitHorizontal />
      </div>
    </div>
  );
}
