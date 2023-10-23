import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = {name, quantity,supplier, taste, category, details, photo};
        console.log(updatedCoffee);
    
        // send data to the server ----POST-----
        fetch(`http://localhost:5000/coffee/${_id}`,{
          method:'Put',
          headers:{
            'content-type' : 'application/json'
          },
          body:JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data); 
        //   form.reset();
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
            }
        })
      }
   
    return (
        <div className="bg-[#F4F3F0] p-28">
      <h2 className="text-4xl  font-serif font-extrabold text-center mb-5">
         Update Coffee: {name}
      </h2>
      <form onSubmit={handleUpdateCoffee} >
        {/* form name and quantity row */}
        <div className="md:flex  mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="text-base">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="text-base ml-5">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Available Quantity"
                className="input input-bordered w-full ml-5"
              />
            </label>
          </div>
        </div>
        {/* form supplier and taste row */}
        <div className="md:flex  mb-6 ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="text-base">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Supplier Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="text-base ml-5">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Taste"
                className="input input-bordered w-full ml-5"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex   mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="text-base">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="text-base ml-5">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Details"
                className="input input-bordered w-full ml-5"
              />
            </label>
          </div>
        </div>
        {/* form Photo url row */}
        <div className="mb-6 ">
          <div className="form-control w-full">
            <label className="label">
              <span className="text-base">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Update Coffee" className="btn btn-outline btn-primary w-full" />
      </form>
    </div>
    );
};

export default UpdateCoffee;