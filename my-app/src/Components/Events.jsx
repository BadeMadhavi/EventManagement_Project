function Events(){


  return(
    <div>
    <header>
        <h1>Event Management</h1>
      </header>


      <div className="container">
<div className="filter-container">
<select onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
<option value="">All Categories</option>
<option value="Workshop">Workshop</option>
<option value="Conference">Conference</option>
</select>
<select onChange={(e) => setFilters({ ...filters, location: e.target.value })}>
<option value="">All Locations</option>
<option value="New York">New York</option>
<option value="San Francisco">San Francisco</option>
</select>
<input
            type="text"
            placeholder="Search by name, location, or date"
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
</div>

    </div>
    </div>
  )
}
export default Events;