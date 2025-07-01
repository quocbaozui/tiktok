import * as request from '~/utils/request';

export const search = async (q, type = 'less') => {
  try {
    // resuest ở đây đã giúp thu gọn địa chỉ api
    const res = await request.get('users/search', {
      // params ở đây là payload khi request
      params: {
        q,
        type,
      },
    });
    // .data là bởi vì sử dụng thư viện axios
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
