// useState hook

// dùng khi nào?
// dùng khi muốn thay đổi dữ liệu thì giao diện tự động được cập nhật (render lại theo dữ liệu)

// cách dùng

// jsx
import { useState} from 'react'

function Component() {
  const [state, setState] = useState(initState)

  // ... 
}

// useState nhận vào giá trị khởi tạo dùng cho 1 lần
// return ra 2 phần tử (state và setState)
// ban đầu initState sẽ được gán cho state
// sau đó nếu muốn set lại initState thì dùng setState và truyền vào giá trị muốn thay đổi


// Lưu ý
// Component được re-render sau khi 'setState'
// Initial state chỉ dùng cho lần đầu
// Set state với callback?
// Initial state với callback?
// Set state là thay thế state bằng giá trị mới