import { FC } from 'react';

import { Button } from 'antd';

interface MainContentProps {

}

const MainContent: FC<MainContentProps> = () => (
  <>
    <Button type="primary" className="cursor-wait">Primary Button</Button>
    <Button type="primary" danger>Primary Button</Button>
  </>
);

export default MainContent;
