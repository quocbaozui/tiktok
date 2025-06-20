import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {
  faCircleQuestion,
  faCircleXmark,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faMagnifyingGlass,
  faRightToBracket,
  faSpinner,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images/';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, MessageIcon, GetCoinIcon, SearchIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Images';

// giúp viết được className theo kiểu post-item
const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    // children là sub menu cấp 2
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
          children: {
            type: 'language',
            title: 'Language',
            data: [
              {
                type: 'language',
                code: 'en',
                title: 'English 1',
              },
              {
                type: 'language',
                code: 'vi',
                title: 'Tiếng Việt 1',
              },
            ],
          },
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and helps',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const currentUser = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  });

  // handle logic
  const handleMenuChange = (menuItem) => {
    // console.log(menuItem);
    switch (menuItem.type) {
      case 'language':
        // handle change
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '@hieuthuhai',
    },
    {
      icon: <GetCoinIcon className={'get_coin'} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Setting',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faRightToBracket} />,
      title: 'Log out',
      to: '/logout',
      separate: true, // có thuộc tính này thì border-top
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo tiktok */}
        <img src={images.logo} alt="Logo" />
        {/* Ô tìm kiếm  */}
        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search account and videos" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('search-btn')}>
              <SearchIcon />
            </button>
          </div>
        </HeadlessTippy>

        {/* Hành động */}
        <div className={cx('action')}>
          {currentUser ? (
            <div className={cx('current-user')}>
              <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                {/* Các action khi đã đăng nhập vào */}
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>

              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>

              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </div>
          ) : (
            // Các action khi chưa đăng nhập
            <div>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </div>
          )}

          <Menu items={userMenu ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src="https://th.bing.com/th/id/OIP.GHcIt6VKAVpiJcofBCfnygHaGS?rs=1&pid=ImgDetMain"
                alt="Hieu"
                fallback="https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
