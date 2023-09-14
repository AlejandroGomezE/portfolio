import SubCollapsableMenu from '../SubCollapsableMenu';
import { CloseAll, NewFile, SaveAll } from '@/icons';
import { SubMenu, useSelector, selectEditor } from '@/lib/redux';

export default function Editors() {
  const editors = useSelector(selectEditor);

  return (
    <SubCollapsableMenu
      subMenuTitle="OPEN EDITORS"
      subMenuButtons={[
        { id: 0, button: <NewFile /> },
        { id: 1, button: <SaveAll /> },
        { id: 2, button: <CloseAll /> },
      ]}
      subMenu={SubMenu.EDITOR}
      open={editors.open}
      maxHeight={editors.maxHeight}
      overflowY={editors.overflowY}
    >
      <></>
    </SubCollapsableMenu>
  );
}
