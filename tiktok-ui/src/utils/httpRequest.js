import axios from 'axios';

const httpRequest = axios.create({
  // cái này được xài khi trang có nhiều api cùng chỉ về 1 địa chỉ, dùng để thu gọn địa chỉ api khúc đầu
  baseURL: process.env.REACT_APP_BASE_URL,
});

// hàm này sẽ trả về Promise
export const get = async (path, option = {}) => {
  const respond = await httpRequest.get(path, option);
  return respond.data;
};

export default httpRequest;
