import Swal from 'sweetalert2'
const AddCoffee = () => {
  const handleAddCoffee = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {name, quantity,supplier, taste, category, details, photo};
    console.log(newCoffee);

    // send data to the server ----POST-----
    fetch('http://localhost:5000/coffee',{
      method:'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body:JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data); 
      form.reset();
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Coffee Added Successfully',
          icon: 'success',
          confirmButtonText: 'Done'
        })
      }
    })
  }




  return (
    <div className="bg-[#F4F3F0] p-28">
      <h2 className="text-4xl  font-serif font-extrabold text-center mb-5">
        Add to coffee
      </h2>
      <form onSubmit={handleAddCoffee} >
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
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-outline btn-primary w-full" />
      </form>
    </div>
  );
};

export default AddCoffee;
