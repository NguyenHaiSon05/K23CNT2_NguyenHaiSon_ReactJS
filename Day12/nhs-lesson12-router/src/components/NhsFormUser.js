import React, { useState } from 'react';

export default function NhsFormUser({ onNhsAddNew }) {
  const [nhsId, setNhsId] = useState('');
  const [nhsFullname, setNhsFullName] = useState('');
  const [nhsUser, setNhsUser] = useState('');
  const [nhsPass, setNhsPass] = useState('');

  const nhsHandleSubmit = (event) => {
    event.preventDefault();
    console.log(nhsId, nhsFullname, nhsUser, nhsPass);

    if (onNhsAddNew) {
      onNhsAddNew({
        id: nhsId, 
        nhsFullName: nhsFullname, 
        nhsUserName: nhsUser,
        nhsPass: nhsPass
      });

      
      setNhsId('');
      setNhsFullName('');
      setNhsUser('');
      setNhsPass('');
    }
  };

  return (
    <div>
      <form>
        <p>Mã sinh viên:
          <input type="text" value={nhsId} onChange={(ev) => setNhsId(ev.target.value)} />
        </p>
        <p>Họ và tên:
          <input type="text" value={nhsFullname} onChange={(ev) => setNhsFullName(ev.target.value)} />
        </p>
        <p>Tài khoản:
          <input type="text" value={nhsUser} onChange={(ev) => setNhsUser(ev.target.value)} />
        </p>
        <p>Mật khẩu:
          <input type="password" value={nhsPass} onChange={(ev) => setNhsPass(ev.target.value)} />
        </p>
        <p>
          <button type="button" onClick={nhsHandleSubmit}>Save</button>
        </p>
      </form>
    </div>
  );
}
