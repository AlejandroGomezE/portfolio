import MenuBar from './MenuBar';
import ToggleButtons from './ToggleButtons';
import ControlButtons from './ControlButtons';

export default function ExplorerBar() {
  return (
    <div className="flex justify-between text-gray-500 border-b-2 border-dark_border items-center">
      <MenuBar />
      <h1 className="text-sm py-3">Alejandro Gomez - Portfolio</h1>
      <div className="flex">
        <ToggleButtons />
        <ControlButtons />
      </div>
    </div>
  );
}
