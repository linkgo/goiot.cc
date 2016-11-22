import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';
import styles from './Products.less';

const Products = (props) => {

  function handleDelete(id) {
    props.dispatch({
      type: 'products/delete',
      payload: id,
    });
  }

  return (
    <div className={styles.product}>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={props.products} />
    </div>
  );
};

// export default Products;
export default connect(({ products }) => ({
  products
}))(Products);
