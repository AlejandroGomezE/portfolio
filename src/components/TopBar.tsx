'use client';
import { ChromeClose, ChromeMenu, ChromeMinimize, ChromeRestore, SplitHorizontal, SplitVerticalUntoggled, ToggledSidebar, UntoggledSidebar, VSCode } from '@/icons';
import { Menu, SubMenu, expandableSlice, explorerSlice, selectExpanded, selectInitialLoad, useDispatch, useSelector } from '@/lib/redux';
const menuItems = ['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help'];

export default function TopBar() {
  const menuExpanded = useSelector(selectExpanded);

  return (
    <div className="flex justify-between text-gray-500 border-b-2 border-dark_border items-center">
      <MenuBar />
      <h1 className="text-sm py-3 pointer-events-none select-none hidden sm:block">Alejandro Gomez - Portfolio</h1>
      <div className="flex">
        <ToggleButtons menuExpanded={menuExpanded} />
        <ControlButtons />
      </div>
    </div>
  );
}

function MenuBar() {
  const initialLoad = useSelector(selectInitialLoad);
  const dispatch = useDispatch();

  const toggleMenu: React.MouseEventHandler<HTMLDivElement> = () => {
    dispatch(expandableSlice.actions.toggleMenu({ menu: Menu.EXPLORER }));

    if (!initialLoad) return;
    dispatch(explorerSlice.actions.setInitialLoad());

    setTimeout(() => {
      dispatch(explorerSlice.actions.toggleMenu({ subMenu: SubMenu.PORTFOLIO }));
    }, 200);
  };

  return (
    <div className="p-1 flex">
      <div className="my-auto">
        <VSCode />
      </div>
      <div className="p-1 ml-2 hidden lg:block">
        {menuItems.map((item) => (
          <button key={item} className="py-1 px-2 hover:bg-gray-300 rounded-lg cursor-default">
            {item}
          </button>
        ))}
      </div>
      <div className="flex items-center ml-4 lg:hidden hover:bg-gray-300 px-4 rounded-md py-2" onClick={toggleMenu}>
        <ChromeMenu />
      </div>
    </div>
  );
}

const toggleButtons = [{ icon: <SplitVerticalUntoggled /> }, { icon: <SplitHorizontal /> }];

function ToggleButtons({ menuExpanded }: { menuExpanded: boolean }) {
  const dispatch = useDispatch();

  const toggleMenu: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(expandableSlice.actions.toggleMenu({}));
  };

  return (
    <div className="flex py-2 mx-1">
      {menuExpanded ? (
        <button onClick={toggleMenu} className="hover:bg-gray-300 p-1 rounded-md">
          <ToggledSidebar />
        </button>
      ) : (
        <button onClick={toggleMenu} className="hover:bg-gray-300 p-1 rounded-md">
          <UntoggledSidebar />
        </button>
      )}
      {toggleButtons.map((button, index) => (
        <button key={index} className="hover:bg-gray-300 p-1 rounded-md">
          {button.icon}
        </button>
      ))}
    </div>
  );
}

function ControlButtons() {
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
