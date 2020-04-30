/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';

import { getProducts } from '../../actions/stock.action';
import { connect } from 'react-redux';

const Stock = ({ getProducts, stockReducer }) => {
  const renderRows = () => {
    const { result } = stockReducer;
    if (result) {
      return result.products.map((data, index) => (
        <tr key={index}>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.image}</td>
          <td>{data.price}</td>
          <td>{data.stock}</td>
        </tr>
      ));
    }
  };

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className='content-wrapper'>
      {/* Content Header (Page header) */}
      <section className='content-header'>
        <div className='container-fluid'>
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h1 className='float-sm-left'>Stock</h1>
            </div>
            <div className='col-sm-6'>
              <ol className='breadcrumb float-sm-right'>
                <li className='breadcrumb-item'>
                  <a href='#'>Home</a>
                </li>
                <li className='breadcrumb-item active'>DataTables</li>
              </ol>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      {/* Main content */}
      <section className='content'>
        <div className='row'>
          <div className='col-12'>
            <div className='card'>
              <div className='card-header'>
                <h3 className='card-title'>
                  DataTable with minimal features &amp; hover style
                </h3>
              </div>
              {/* /.card-header */}
              <div className='card-body'>
                <table
                  id='example2'
                  className='table table-bordered table-hover'
                >
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>NAME</th>
                      <th>IMAGE</th>
                      <th>PRICE</th>
                      <th>STOCK</th>
                    </tr>
                  </thead>
                  <tbody>{renderRows()}</tbody>
                </table>
              </div>
              {/* /.card-body */}
            </div>
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
      </section>
      {/* /.content */}
    </div>
  );
};

const mapStateToProps = ({ stockReducer }) => ({
  stockReducer,
});

const mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Stock);
