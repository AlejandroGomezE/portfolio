import SubCollapsableMenu from '../SubCollapsableMenu';
import { SubMenu, useSelector, selectScripts } from '@/lib/redux';

export default function Scripts() {
  const scripts = useSelector(selectScripts);

  return (
    <SubCollapsableMenu subMenuTitle="SCRIPTS" subMenuButtons={[]} subMenu={SubMenu.SCRIPTS} open={scripts.open} maxHeight={scripts.maxHeight} overflowY={scripts.overflowY}>
      <></>
    </SubCollapsableMenu>
  );
}
