import React from 'react';
import NhsReadApiLocal from './components/NhsReadApiLocal';
import NhsReadMockAPI from './components/NhsReadMockAPI';
import NhsCreateMockAPI from './components/NhsCreateMockAPI';

export default function NhsApp() {
  return (
    <div className='container border my-3 p-3'>
        <h1> ReactJS - API - Nguyễn Hải Sơn</h1>
        <hr/>
        <NhsReadApiLocal />
        <hr/>
        <h2>Đọc dữ liệu từ MockAPI (mockapi.io)</h2>
        <NhsReadMockAPI />
        <NhsCreateMockAPI />
    </div>
  );
}
