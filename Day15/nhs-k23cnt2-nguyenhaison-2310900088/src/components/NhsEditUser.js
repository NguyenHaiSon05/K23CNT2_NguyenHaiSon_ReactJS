import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function NhsEditUser() {
  const nhsUser = {
    id: 0,
    nhs_name: '',
    nhs_email: '',
    nhs_phone: '',
    nhs_active: true
  };

  const [nhs_user, setNhs_User] = useState(nhsUser);
  const nhsApi = "https://67e0d38858cc6bf785230bb7.mockapi.io/nhs-k23cnt1-2310900088/nhs_users";
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${nhsApi}/${id}`)
      .then(nhs_response => {
        console.log(nhs_response.data);
        setNhs_User(nhs_response.data);
      })
      .catch(error => {
        console.error('Có lỗi xảy ra:', error);
      });
  }, [id]);

  const nhsHandleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      await axios.put(`${nhsApi}/${id}`, nhs_user);
      alert('Cập nhật thành công!');
      navigate('/list-user'); // Chuyển hướng sau khi update
    } catch (error) {
      console.error('Lỗi khi cập nhật:', error);
    }
  };

  return (
    <div>
      <h2>Sửa thông tin user</h2>
      <form onSubmit={nhsHandleSubmit}>
        <div className="mb-3 row">
          <label htmlFor="nhs_name" className="col-sm-2 col-form-label">FullName</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="nhs_name"
              name="nhs_name"
              value={nhs_user.nhs_name}
              onChange={(ev) => setNhs_User({ ...nhs_user, nhs_name: ev.target.value })}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="nhs_email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="nhs_email"
              name="nhs_email"
              value={nhs_user.nhs_email}
              onChange={(ev) => setNhs_User({ ...nhs_user, nhs_email: ev.target.value })}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="nhs_phone" className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="nhs_phone"
              name="nhs_phone"
              value={nhs_user.nhs_phone}
              onChange={(ev) => setNhs_User({ ...nhs_user, nhs_phone: ev.target.value })}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="nhs_active" className="col-sm-2 col-form-label">Active</label>
          <div className="col-sm-10">
            <input type="radio" id="nhs_active_true" className='mx-3'
              onChange={() => setNhs_User({ ...nhs_user, nhs_active: true })}
              checked={nhs_user.nhs_active === true}
              value={true}
              name="nhs_active" />
            <label htmlFor="nhs_active_true">Hoạt động</label>

            <input type="radio" id="nhs_active_false" className='mx-3'
              onChange={() => setNhs_User({ ...nhs_user, nhs_active: false })}
              checked={nhs_user.nhs_active === false}
              value={false}
              name="nhs_active" />
            <label htmlFor="nhs_active_false">Tạm khóa</label>
          </div>
        </div>

        <div className='mb-3 row'>
          <label htmlFor="" className="col-sm-2 col-form-label"></label>
          <div className="col-sm-10">
            <button className="btn btn-primary mx-2 px-3" type="submit">
              Update
            </button>
            <button className="btn btn-secondary mx-2 px-3" type="button"
              onClick={() => navigate('/list-user')}>
              Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
