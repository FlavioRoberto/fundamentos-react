import products from '../../data/products';

const ProductsTable = () => {
  const productsItems = products.map((product) => (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price.toFixed(2)}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price ($)</th>
        </tr>
      </thead>
      <tbody>{productsItems}</tbody>
    </table>
  );
};

export default ProductsTable;
