import classNames from 'classnames/bind';
import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';

import images from '~/assets/images';
import styles from './Image.module.scss';

// dùng forwardRef là bởi vì function Image là tự tạo nên Tippy sẽ không biết vị trí trong Dom nên phải dùng forwardRef để tippy biết vị trí
// fallback default là images.noImage nếu có truyền fallback xuống thì lấy fallback đó
const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(customFallback);
  };
  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
