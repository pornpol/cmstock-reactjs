import React, { useEffect } from 'react';
import './StockEdit.css'; // Tell Webpack that Button.js uses these styles
import { Formik } from 'formik';
import {
  // updateProduct,
  getProductById,
} from './../../actions/stock.edit.action';
import { connect } from 'react-redux';
import { IMAGE_URL } from './../../constants';
import Axios from 'axios';

const StockEdit = ({
  match: {
    params: { id },
  },
  getProductById,
  updateProduct,
  history,
  stockEditReducer,
  stockReducer,
}) => {
  useEffect(() => {
    getProductById(id);
  }, []);

  const showPreviewImage = (values) => {
    if (values.file_obj) {
      return (
        <img alt='preview' src={values.file_obj} style={{ height: 100 }} />
      );
    } else if (values.image) {
      return (
        <img
          alt='preview'
          src={`${IMAGE_URL}/uploaded/${values.image}`}
          style={{ height: 100 }}
        />
      );
    }
  };

  const showForm = ({
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  }) =>
    stockEditReducer.isInitialed && (
      <form className='form-horizontal' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className='control-label' htmlFor='name'>
            Name
          </label>
          <input
            name='name'
            value={values.name}
            onChange={handleChange}
            placeholder='โปรดระบุ'
            className='form-control'
            type='text'
            id='name'
          />
        </div>
        <div className='form-group' style={{ marginBottom: 10 }}>
          <label className='control-label' htmlFor='stock'>
            Stock
          </label>

          <div className='input-group'>
            <input
              name='stock'
              value={values.stock}
              onChange={handleChange}
              className='form-control'
              type='number'
            />
          </div>
        </div>
        <div className='form-group'>
          <label className='control-label' htmlFor='price'>
            Price
          </label>

          <div className='input-group'>
            <input
              name='price'
              value={values.price}
              onChange={handleChange}
              className='form-control'
              type='number'
              id='price'
            />
          </div>
        </div>

        <div className='form-group' style={{ marginTop: 15 }}>
          {/* {this.showPreviewImage(values)} */}
          {showPreviewImage(values)}
          <div className='wrap-upload-buttons control-label'>
            <span>
              {/* <img
              src={`${process.env.PUBLIC_URL}/images/ic_photo.png`}
              style={{ width: 25, height: 20 }}
            />
            <span style={{ color: '#00B0CD', marginLeft: 10 }}>
              {' '}
              Add Picture{' '}
            </span> */}
              <input
                onChange={(e) => {
                  e.preventDefault();
                  setFieldValue('file', e.target.files[0]); // for upload
                  setFieldValue(
                    'file_obj',
                    URL.createObjectURL(e.target.files[0]) // for preview
                  );
                }}
                type='file'
                name='image'
                className='picupload'
                multiple
                accept='image/*'
                style={{ padding: '20px 0' }}
              />
            </span>
          </div>
        </div>
        <div className=''>
          <button
            type='submit'
            disabled={isSubmitting}
            className='btn btn-primary pull-right col-6'
          >
            Submit
          </button>
          <a
            onClick={() => {
              history.goBack();
            }}
            type='Button'
            className='btn btn-default pull-right col-6'
          >
            Cancel
          </a>
        </div>
      </form>
    );

  return (
    <div className='content-wrapper'>
      {/* Content Header (Page header) */}
      <section className='content-header'>
        <h1>
          Stock
          <small>Edit</small>
        </h1>
      </section>
      {/* Main content */}
      <section className='content'>
        <div className='card card-primary'>
          <div className='card-header'>
            <p className='card-title'>Edit</p>
          </div>
          <div className='card-body text-left' style={{ marginTop: 30 }}>
            {stockEditReducer.isInitialed && (
              <Formik
                enableReinitialize
                initialValues={stockEditReducer.result.products}
                onSubmit={async (values, { setSubmitting }) => {
                  let formData = new FormData();
                  formData.append('id', id);
                  formData.append('name', values.name);
                  formData.append('price', values.price);
                  formData.append('stock', values.stock);
                  if (values.file) {
                    formData.append('image', values.file);
                  }
                  await Axios.put(
                    `http://localhost:8000/api/v1/stock/product/`,
                    formData
                  );
                  // await updateProduct(history, formData);
                  setSubmitting(false);
                  history.push('/stock');
                }}
              >
                {(props) => showForm(props)}
              </Formik>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = ({ stockEditReducer, stockReducer }) => ({
  stockEditReducer,
  stockReducer,
});

const mapDispatchToProps = {
  getProductById,
  // updateProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(StockEdit);
