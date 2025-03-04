import React from 'react';

const NhsProductTable = () => {
  const products = [
    { id: "L001", name: "Dell XPS 13", quantity: 15, price: 1200 },
    { id: "L002", name: "MacBook Air", quantity: 20, price: 1500 },
    { id: "L003", name: "HP Spectre x360", quantity: 10, price: 1400 },
    { id: "L004", name: "Lenovo ThinkPad X1", quantity: 15, price: 1800 }
  ];

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#E0F7FA', borderRadius: '5px' }}>
      <h2 style={{ color: '#00796B' }}>Danh sách sản phẩm</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
        <thead>
          <tr style={{ backgroundColor: '#B2DFDB' }}>
            <th style={styles.th}>Product ID</th>
            <th style={styles.th}>Product Name</th>
            <th style={styles.th}>Quantity</th>
            <th style={styles.th}>Price</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
              <td style={styles.td}>{product.id}</td>
              <td style={styles.td}>{product.name}</td>
              <td style={styles.td}>{product.quantity}</td>
              <td style={styles.td}>{product.price}</td>
              <td style={styles.td}>
                <button style={styles.button}>Edit</button>
                <button style={{ ...styles.button, backgroundColor: '#d32f2f' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  th: { padding: '10px', textAlign: 'left', borderBottom: '2px solid #00796B' },
  td: { padding: '10px', borderBottom: '1px solid #ccc' },
  button: { marginRight: '5px', padding: '5px 10px', backgroundColor: '#0288D1', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '3px' },
  evenRow: { backgroundColor: '#f1f8e9' },
  oddRow: { backgroundColor: '#ffffff' }
};

export default NhsProductTable;
