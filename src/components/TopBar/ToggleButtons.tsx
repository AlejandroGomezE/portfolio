import { SplitHorizontal, SplitVertical, ToggleSidebar } from '@/icons';

const toggleButtons = [{ icon: <SplitVertical /> }, { icon: <ToggleSidebar /> }, { icon: <SplitHorizontal /> }];

export default function ToggleButtons() {
  return (
    <div className="flex py-2 mx-1">
      {toggleButtons.map((button, index) => (
        <div key={index} className="hover:bg-gray-300 p-1 rounded-md cursor-pointer">
          {button.icon}
        </div>
      ))}
    </div>
  );
}
