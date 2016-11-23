import productList from './product-list';
import products from './products';
import taxonomies from './taxonomies';
import loader from './loader';

export default {
  fetchProducts: productList.fetchProducts,
  addProducts: products.addProducts,
  fetchProduct: products.fetchProduct,
  addProduct: products.addProduct,
  fetchTaxonomies: taxonomies.fetchTaxonomies,
  addTaxonomies: taxonomies.addTaxonomies,
  displayLoader: loader.displayLoader,
  hideLoader: loader.hideLoader
};
