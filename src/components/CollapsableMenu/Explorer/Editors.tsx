import { CloseAll, NewFile, SaveAll } from '@/icons';
import { SubMenu, selectEditor, useSelector } from '@/lib/redux';
import SubCollapsableMenu from '../SubCollapsableMenu';

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
    >
      <></>
    </SubCollapsableMenu>
  );
}
