import React, { useContext, useState } from 'react'
import productcontext from '../context/Productcontext'

export default function Addproductpage() {
  const { addproduct } = useContext(productcontext)
  const [addinfo, setaddinfo] = useState({ name: "", price: null, description: "", stock: null, category: "", public_id: "", image_url: "", sizem:"false", sizes:"false",sizel:"false",sizexl:"false",sizexxl:"false" })

  const onchange = (e) => {
    // e.preventDefault()
    setaddinfo({
      ...addinfo, [e.target.name]: e.target.value
    })
    console.log(addinfo.sizes)
  }
  const onsubmit = async (e) => {
    const bodyinfo = {
      name: addinfo.name,
      price: addinfo.price,
      description: addinfo.description,
      stock: addinfo.stock,
      category: addinfo.category,
      image: {
        public_id: addinfo.public_id,
        url: addinfo.image_url
      },
      size:{
      S:addinfo.sizes==="false"?false:true,
      M:addinfo.sizem==="false"?false:true,
      L:addinfo.sizel==="false"?false:true,
      XL:addinfo.sizexl==="false"?false:true,
      XXL:addinfo.sizexxl==="false"?false:true
      }

    }
    e.preventDefault()
    await addproduct(bodyinfo)
    console.log(bodyinfo.size.S)
  }


  return (
    <>
      <form className='container my-4'>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" onChange={onchange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" />
        </div>
        <div className="input-group" style={{ height: "150px" }}>
          <span className="input-group-text">description</span>
          <textarea className="form-control" onChange={onchange} aria-label="With textarea" name="description"></textarea>
        </div>
        <div className="mb-3 row my-4 mx-1">
          <label for="exampleInputPassword1" className="form-label">Price</label>
          <input type="number" name="price" className="form-control" id="exampleInputPassword1" onChange={onchange} style={{ width: "120px" }} />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Stock</label>
          <input type="text" className="form-control" name="stock" onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp" style={{ width: "120px" }} />
        </div>
        <div className="form-floating">
          <select className="form-select" id="floatingSelect" name="category" onChange={onchange} aria-label="Floating label select example" style={{ width: "200px" }}>
            <option>choose category</option>
            <option value="men">men</option>
            <option value="women">women</option>
            <option value="kids">kids</option>
          </select>
        </div>
        <div className="form-floating my-3" >
          <textarea className="form-control" onChange={onchange} placeholder="Leave a comment here" id="floatingTextarea" name="image_url"></textarea>
          <label for="floatingTextarea">image url</label>
        </div>
        <div className="form-floating my-3">
          <textarea className="form-control" onChange={onchange} placeholder="Leave a comment here" name="public_id" id="floatingTextarea"></textarea>
          <label for="floatingTextarea">image id</label>
        </div>
        <div>select sizes</div>
        <div className="form-check my-1">
          <input className="form-check-input" onChange={onchange} name="sizes" type="checkbox" value={addinfo.sizes==="true"?"false":"true"} id="flexCheckDefault" />
          <label className="form-check-label" for="flexCheckDefault">
            S
          </label>
        </div>
        <div className="form-check my-1">
          <input className="form-check-input" onChange={onchange} name="sizem" value={addinfo.sizem==="true"?"false":"true"} type="checkbox" id="flexCheckChecked" />
          <label className="form-check-label" for="flexCheckChecked">
            M
          </label>
        </div>
        <div className="form-check my-1">
          <input className="form-check-input" onChange={onchange} name="sizel" value={addinfo.sizel==="true"?"false":"true"} type="checkbox"  id="flexCheckChecked" />
          <label className="form-check-label" for="flexCheckChecked">
            L
          </label>
        </div>
        <div className="form-check my-1">
          <input className="form-check-input" onChange={onchange} name="sizexl" value={addinfo.sizexl==="true"?"false":"true"} type="checkbox" id="flexCheckChecked" />
          <label className="form-check-label" for="flexCheckChecked">
            XL
          </label>
        </div>
        <div className="form-check my-1">
          <input className="form-check-input" onChange={onchange} name="sizexxl" value={addinfo.sizexxl==="true"?"false":"true"} type="checkbox" id="flexCheckChecked" />
          <label className="form-check-label" for="flexCheckChecked">
            XXL
          </label>
        </div>
        <button className="btn btn-primary" onClick={onsubmit}>Submit</button>
      </form>
    </>
  )
}

