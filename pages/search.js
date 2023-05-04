import { useState } from 'react';
import Layout from '../components/layout'
import DataTable from 'react-data-table-component';

export default function Search() {
    const [product, setproduct] = useState([])
    fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(data => setproduct(data))

    const columns = [
        {
            name: "Title",
            title: "title",
            selector: row => row.title
        }, {
            name: "Price",
            price: "price",
            selector: row => row.price
        }, {
            name: "Description",
            description: "description",
            selector: row => row.description
        },
        {
            name: "Images",
            images: "images",
            selector: row => <img src={row.image} width={100} height={120} />
        },
        {   
            name: "Action",
            cell: (row) => (
                <>
                    <button
                        onClick={() =>
                            alert("Sorry, edit function is not working right now . I 'm Sorry. ")
                        }
                        className="btn btn-primary me-2"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() =>
                            alert("Sorry, delete function is not working right now . I 'm Sorry.")
                        }
                        className="btn btn-danger"
                    >
                        Delete
                    </button>
                </>
            ),
        },
    ]

    function handleFilter(event) {
        const newData = product.filter((row) => {
            return row.title.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setproduct(newData);
    }

    return (
        <Layout products>

            <div class="container">
                <DataTable columns={columns} data={product}
                    fixedHeader
                    highlightOnHover
                    title="Product listing"
                    pagination
                    actions={
                        <div className="text-end">
                            <input
                                type="text"
                                className="rounded border-1"
                                style={{
                                    padding: "10px",
                                }}
                                placeholder="Search products"
                                onChange={handleFilter}
                            ></input>
                        </div>
                    }
                />
            </div>

        </Layout>
    )
}


