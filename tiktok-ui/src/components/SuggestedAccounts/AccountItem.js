import classNames from 'classnames/bind';
// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';

import Image from '../Images';
import style from './SuggestedAccounts.module.scss';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import PopperWrapper from '../Popper/Wrapper';

const cx = classNames.bind(style);

function AccountItem() {
  useEffect(() => {
    fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=hoaa&type=less')
      .then((res) => res.json())
      .then((res) => {
        setResults(res.data);
      });
  }, []);

  const [results, setResults] = useState([]);

  return (
    <>
      {results.map((result) => (
        <div className={cx('preview')} key={result.id}>
          <HeadlessTippy
            placement='bottom-start'
            delay={[800, 0]}
            interactive={true}
            render={attrs => (
              <div className={cx('user-info')} tabIndex="-1" {...attrs}>
                <PopperWrapper className={cx('info-wrapper')}>
                  <div className={cx('info-content')}>
                    <Image src={result.avatar} alt={result.full_name} className={cx('avatar')} />
                    <Button primary>Follow</Button>
                  </div>
                  <div className={cx('info')}>
                    <div className={cx('nickname')}>
                      <strong>{result.nickname}</strong>
                      <FontAwesomeIcon icon={faCircleCheck} className={cx('check')} />
                    </div>
                    <p className={cx('name')}>{result.full_name}</p>
                  </div>
                  <div className={cx('analytics')}>
                      <strong>{result.followers_count}</strong>
                      <span className={cx('label')}>Followers</span>
                      <strong>{result.likes_count}</strong>
                      <span className={cx('label')}>Likes</span>
                  </div>
                </PopperWrapper>
              </div>
            )}
          >
            <div className={cx('account-item')} key={result.id}>
              <Image src={result.avatar} alt={result.full_name} className={cx('avatar')} />
              <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                  <strong>{result.nickname}</strong>
                  <FontAwesomeIcon icon={faCircleCheck} className={cx('check')} />
                </p>
                <p className={cx('name')}>{result.full_name}</p>
              </div>
            </div>
          </HeadlessTippy>
        </div>
        
      ))}
    </>
  );
}

export default AccountItem;
