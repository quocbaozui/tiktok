import axios from 'axios';

const resquest = axios.create({
  // cái này được xài khi trang có nhiều api cùng chỉ về 1 địa chỉ, dùng để thu gọn địa chỉ api khúc đầu
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

// hàm này sẽ trả về Promise
export const get = async (path, option = {}) => {
  const respond = await resquest.get(path, option);
  return respond.data;
};

export default resquest;
