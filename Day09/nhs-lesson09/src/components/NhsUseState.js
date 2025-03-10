import React, {useState} from 'react'

export default function NhsUseState() {
    // Tạo state là count và hàm cập nhật state là setCount
    const [count,setCount] = useState(0);

  return (
    <div className='alert alert-info'>
        <h2>Sử dụng useState</h2>
        <div>
            <b>Count: {count}</b>
            <button>Tăng</button>
            <button>Giảm</button>
            <button>Đặt lại</button>
        </div>
      
    </div>
  )
}
