import SubCollapsableMenu from '../SubCollapsableMenu';
import { SubMenu, useSelector, selectTimeline } from '@/lib/redux';

export default function Timeline() {
  const timeline = useSelector(selectTimeline);

  return (
    <SubCollapsableMenu subMenuTitle="TIMELINE" subMenuButtons={[]} subMenu={SubMenu.TIMELINE} open={false} maxHeight={timeline.maxHeight} overflowY={timeline.overflowY}>
      <></>
    </SubCollapsableMenu>
  );
}
