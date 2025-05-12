'use client'

export default function add() {

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Handle submit clicked")

    }
    return <>
        <form onSubmit={ handleSubmit }>
        <h3>Add Boarding House (Kost)</h3>
        
        <div className="mb-3">
            <label  className="form-label">Name</label>
            <input type="text" className="form-control" id="kostName" placeholder="Enter boarding house name" />
        </div>

        <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" id="kostDescription" rows="3" placeholder="Describe the boarding house"></textarea>
        </div>

        <div className="mb-3">
            <label  className="form-label">Facilities</label>
            <input type="text" className="form-control" id="kostFacility" placeholder="e.g., WiFi, Laundry, Parking"/>
        </div>

        <div className="row">
            <div className="col-md-6 mb-3">
            <label   className="form-label">Latitude</label>
            <input type="text" className="form-control" id="latitude" placeholder="-6.200000"/>
            </div>
            <div className="col-md-6 mb-3">
            <label   className="form-label">Longitude</label>
            <input type="text" className="form-control" id="longitude" placeholder="106.816666"/>
            </div>
        </div>

        <div className="mb-3">
            <label  className="form-label">Price per Month (IDR)</label>
            <input type="number" className="form-control" id="price" placeholder="e.g., 1500000"/>
        </div>

        <div className="mb-3">
            <label  className="form-label">Address</label>
            <textarea className="form-control" id="address" rows="2" placeholder="Full address"></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    </>
}