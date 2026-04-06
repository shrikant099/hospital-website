export default function BookAppointment({ city, areaName }) {
    return (
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
  
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Get a certified Doctor & Nurse at Your Home in  <span className="font-bold text-brand-primary"> {areaName} </span> Today
              </h2>
  
              <p className="text-gray-600 mb-4">
                Fill the details on this form and our doctor will call you back
                within 2 minutes to confirm your booking.
              </p>
  
              <ul className="space-y-2 text-gray-700">
                <li>• No advance payment required</li>
                <li>• Doctor arrives in {city.avgArrivalTime}</li>
                <li>• 24/7 Availability</li>
                <li>• Written prescription after every visit</li>
                <li>• 40+ certified doctors & Nurse in {city.name}</li>
              </ul>
            </div>
  
            {/* RIGHT FORM */}
            <div>
              <form className="space-y-4">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Patient Name"
                    className="border rounded-lg p-3 w-full outline-none focus:ring-2 focus:ring-teal-500"
                  />
  
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className="border rounded-lg p-3 w-full outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
  
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="border rounded-lg p-3 w-full outline-none focus:ring-2 focus:ring-teal-500"
                  />
  
                  <select className="border rounded-lg p-3 w-full outline-none focus:ring-2 focus:ring-teal-500">
                    <option>10:00 - 12:00 PM</option>
                    <option>12:00 - 02:00 PM</option>
                    <option>02:00 - 04:00 PM</option>
                    <option>04:00 - 06:00 PM</option>
                  </select>
                </div>
  
                <textarea
                  placeholder="Write your message"
                  rows="4"
                  className="border rounded-lg p-3 w-full outline-none focus:ring-2 focus:ring-teal-500"
                ></textarea>
  
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition"
                >
                  Request a Callback
                </button>
  
              </form>
            </div>
  
          </div>
        </div>
      </section>
    );
  }