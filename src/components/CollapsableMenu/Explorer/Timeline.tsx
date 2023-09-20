import { SubMenu, selectTimeline, useSelector } from '@/lib/redux';
import SubCollapsableMenu from '../SubCollapsableMenu';

export default function Timeline() {
  const timeline = useSelector(selectTimeline);

  return (
    <SubCollapsableMenu subMenuTitle="TIMELINE" subMenuButtons={[]} subMenu={SubMenu.TIMELINE} open={false} maxHeight={timeline.maxHeight}>
      <></>
    </SubCollapsableMenu>
  );
}
