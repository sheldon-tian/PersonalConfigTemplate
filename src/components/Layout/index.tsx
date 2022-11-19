import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';

import Icon from '../../style/icon';

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

  const isLogin = useSelector((state: any) => state.login.isLogin);

  return (
    <Layout className="layout">
      <Sider className="common">Sider</Sider>
      <Layout>
        <Header className="common">Header</Header>
        <Content className="common">
          <h2 className="welcome">{welcome}</h2>
          <div>
            Islogin:
            {isLogin && <Icon.SvgIcon.Panda style={{ fontSize: '32px' }} />}
          </div>

          <MainContent />
        </Content>
        <Footer className="common">Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default OverallLayout;
