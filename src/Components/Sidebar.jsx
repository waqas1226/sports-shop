import React, { useState } from 'react';
// import '../CSSfiles/Sidebar.scss';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';

const SideBar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Menu fixed='top' inverted>
        <Menu.Item onClick={() => setVisible(!visible)}>
          <Icon name='bars' />
        </Menu.Item>
        <Menu.Item position='right'>Ecommerce Website</Menu.Item>
      </Menu>

      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width='thin'
      >
        <Menu.Item as='a'>Home</Menu.Item>
        <Menu.Item as='a'>Products</Menu.Item>
        <Menu.Item as='a'>About</Menu.Item>
        <Menu.Item as='a'>Contact Us</Menu.Item>
        <Menu.Item as='a'>Shipping Information</Menu.Item>
        <Menu.Item as='a'>Return Policy</Menu.Item>
        <Menu.Item as='a'>Privacy Policy</Menu.Item>
        <Menu.Item as='a'>Terms of Service</Menu.Item>
        <Menu.Item as='a'>
          <Icon name='dropdown' />
          Categories
          <Menu.Menu>
            <Menu.Item as='a'>Category 1</Menu.Item>
            <Menu.Item as='a'>Category 2</Menu.Item>
            <Menu.Item as='a'>Category 3</Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Sidebar>
    </div>
  );
};


export default SideBar;