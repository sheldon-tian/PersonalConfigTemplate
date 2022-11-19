import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from 'antd';
import actions from '../../store/actions';

const { loginActions } = actions;

interface MainContentProps {

}

const MainContent: FC<MainContentProps> = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginActions.login());
  };

  return (
    <>
      <Button type="primary" className="cursor-wait">Primary Button</Button>
      <Button type="primary" danger onClick={handleLogin}>Do you want little bear?</Button>
    </>
  );
};

export default MainContent;
