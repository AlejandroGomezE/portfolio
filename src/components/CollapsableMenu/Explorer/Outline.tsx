import { SubMenu, selectOutline, useSelector } from '@/lib/redux';
import SubCollapsableMenu from '../SubCollapsableMenu';

export default function Outline() {
  const outline = useSelector(selectOutline);

  return (
    <SubCollapsableMenu subMenuTitle="OUTLINE" subMenuButtons={[]} subMenu={SubMenu.OUTLINE} open={outline.open} maxHeight={outline.maxHeight}>
      <></>
    </SubCollapsableMenu>
  );
}
