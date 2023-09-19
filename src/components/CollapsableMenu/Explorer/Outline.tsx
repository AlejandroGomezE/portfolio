import SubCollapsableMenu from '../SubCollapsableMenu';
import { SubMenu, useSelector, selectOutline } from '@/lib/redux';

export default function Outline() {
  const outline = useSelector(selectOutline);

  return (
    <SubCollapsableMenu subMenuTitle="OUTLINE" subMenuButtons={[]} subMenu={SubMenu.OUTLINE} open={outline.open} maxHeight={outline.maxHeight}>
      <></>
    </SubCollapsableMenu>
  );
}
