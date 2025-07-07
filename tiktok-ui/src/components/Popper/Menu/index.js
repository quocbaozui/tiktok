import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ children, hideOnClick = false, items = [], onChange }) {
  // ban đầu render ra cái list item nhận ở props (là item = [])
  const [history, setHistory] = useState([{ data: items }]);
  // trang nhất sẽ luôn là phần tử cuối mảng
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children; // !! trả về giá trị boolen

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              // nếu không có children thì hiển thị nội dung thay đổi
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      offset={[12, 8]}
      interactive
      delay={[0, 700]}
      placement="bottom-end"
      hideOnClick={hideOnClick}
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {/* history.length > 1 có nghĩa là đang ở sub menu cấp 2 hoăc 3... */}
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, history.length - 1));
                }}
              />
            )}
            <div className={cx('menu-body')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
