import { FC } from 'react';
import { Layout } from 'antd';

import MainContent from '../MainContent/MainContent';

import './index.scss';

interface OverallLayoutProps {
  welcome: string;
}

const {
  Header,
  Footer,
  Sider,
  Content,
} = Layout;

const OverallLayout: FC<OverallLayoutProps> = (props: OverallLayoutProps) => {
  const { welcome } = props;

  return (
    <Layout className="layout">
      <Sider className="common">Sider</Sider>
      <Layout>
        <Header className="common">Header</Header>
        <Content className="common">
          <h2 className="welcome">{welcome}</h2>
          <MainContent />
        </Content>
        <Footer className="common">Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default OverallLayout;
