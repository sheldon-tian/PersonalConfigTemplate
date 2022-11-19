import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

import svgIcons from './svgOrigin';

const Panda = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={svgIcons.Panda} {...props} />
);

export default { Panda };
