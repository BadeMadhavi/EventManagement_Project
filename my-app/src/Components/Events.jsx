function Events(){

  const [events, setEvents] = useState([
    {
      id: 1,
      name: 'React Workshop',
      date: '2023-12-20',
      location: 'New York',
      category: 'Workshop',
      description: 'Learn React',
      remainingSpots: 5,
      attendees: [],
    },
    {
      id: 2,
      name: 'Tech Conference',
      date: '2023-12-22',
      location: 'San Francisco',
      category: 'Conference',
      description: 'Explore tech trends',
      remainingSpots: 10,
      attendees: [],
    },
  ])


  const [registeredEvents, setRegisteredEvents] = useState([])
  const [filters, setFilters] = useState({ category: '', location: '', search: '' })

  const handleRegister = (id) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === id
          ? { ...event, remainingSpots: event.remainingSpots - 1, attendees: [...event.attendees, 'User'] }
          : event
      )
    )


    const registeredEvent = events.find((event) => event.id === id);
    setRegisteredEvents((prev) => [...prev, registeredEvent]);
  };

  const filteredEvents = events.filter((event) => {
    return (
      (!filters.category || event.category === filters.category) &&
      (!filters.location || event.location === filters.location) &&
      (!filters.search ||
        event.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        event.location.toLowerCase().includes(filters.search.toLowerCase()) ||
        event.date.includes(filters.search))
    );
  });


  return(

    <div>
    <header>
        <h1>Event Management system</h1>
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
   <input type="text" placeholder="Search by name, location, or date" onChange={(e) => setFilters({ ...filters, search: e.target.value })}/>
</div>
 </div>


 <h2>Upcoming Events</h2>
        {filteredEvents.map((event) => (
          <div key={event.id} className="card">
            <h3>{event.name}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p> <strong>Category:</strong> {event.category}</p>
            <p>{event.description}</p>
<button onClick={() => handleRegister(event.id)} disabled={event.remainingSpots <= 0} >
 {event.remainingSpots > 0 ? `Register (${event.remainingSpots} spots left)` : 'Fully Booked'}
</button>
          </div>
        ))}




    <h2>Your Registered Events</h2>

     {registeredEvents.map((event) => (
    <div key={event.id} className="card">
    <h3>{event.name}</h3>
    <p><strong>Date:</strong> {event.date}</p>
   </div>
    ))}
    </div>

   
  )
}

export default Events;