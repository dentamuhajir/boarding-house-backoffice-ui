import { Metadata } from "next"
import { Product } from "@models/Product"

export const metadata: Metadata = {
    'title': 'List Product'
}

const dummyData: Product[] = [
    {
        id: 1,
        name: 'Wireless Mouse',
        category: 'Electronics',
        price: 25.99,
        stock: 150,
        status: 'Active',
    },
    {
        id: 2,
        name: 'Coffee Maker',
        category: 'Home Appliances',
        price: 55.0,
        stock: 20,
        status: 'Out of Stock',
    }
]

export default async function product() {
    let products :Product[] = []

    const res = await fetch('https://fakestoreapi.com/products');
    const product = res.json();

    console.log(product)
    products = dummyData
    
    return (
        <div className="container mt-5">
        <h2 className="mb-4">Product List</h2>
        <table className="table table-striped table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
          {products.map((prod, index) => (
            <tr key={prod.id}>
              <td>{index + 1}</td>
              <td>{prod.name}</td>
              <td>{prod.category}</td>
              <td>{prod.price.toFixed(2)}</td>
              <td>{prod.stock}</td>
              <td>
              </td>
              <td>
                <button className="btn btn-sm btn-primary me-2">Edit</button>
                <button className="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    
    )
}