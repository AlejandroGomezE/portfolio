import { SubMenu, selectScripts, useSelector } from '@/lib/redux';
import SubCollapsableMenu from '../SubCollapsableMenu';

export default function Scripts() {
  const scripts = useSelector(selectScripts);

  return (
    <SubCollapsableMenu subMenuTitle="SCRIPTS" subMenuButtons={[]} subMenu={SubMenu.SCRIPTS} open={scripts.open} maxHeight={scripts.maxHeight}>
      <></>
    </SubCollapsableMenu>
  );
}
