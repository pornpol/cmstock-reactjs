import React from 'react';

export default function Stock() {
  let dummyData = [
    { c1: 'xxx', c2: 'xxx', c3: 'xxx', c4: 'xxx', c5: 'xxx' },
    { c1: 'xxx', c2: 'xxx', c3: 'xxx', c4: 'xxx', c5: 'xxx' },
    { c1: 'xxx', c2: 'xxx', c3: 'xxx', c4: 'xxx', c5: 'xxx' },
    { c1: 'xxx', c2: 'xxx', c3: 'xxx', c4: 'xxx', c5: 'xxx' },
    { c1: 'xxx', c2: 'xxx', c3: 'xxx', c4: 'xxx', c5: 'xxx' },
  ];

  const renderRows = () =>
    dummyData.map((data, index) => (
      <tr key={index}>
        <td>{data.c1}</td>
        <td>{data.c2}</td>
        <td>{data.c3}</td>
        <td>{data.c4}</td>
        <td>{data.c5}</td>
      </tr>
    ));

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
                      <th>Rendering engine</th>
                      <th>Browser</th>
                      <th>Platform(s)</th>
                      <th>Engine version</th>
                      <th>CSS grade</th>
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
}
