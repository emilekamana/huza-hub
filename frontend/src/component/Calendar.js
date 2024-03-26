// // Start by importing necessary hooks and components
// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
// import { addAvailability, fetchAvailabilities } from '../redux/reducers/apiSlice';
// import formatDateWithDay from './Helper';

// const Availability = () => {
//     const [startDate, setStartDate] = useState(new Date());
//     const [startTime, setStartTime] = useState(new Date());
//     const [endTime, setEndTime] = useState(new Date());
  
//     const [addAvailabilityy, { isLoading, isSuccess, isError, error }] = addAvailability();
  
//     const isToday = (someDate) => {
//       const today = new Date();
//       return someDate.getDate() === today.getDate() &&
//              someDate.getMonth() === today.getMonth() &&
//              someDate.getFullYear() === today.getFullYear();
//     };
  
//     const fromTimeMinTime = isToday(startDate) ? new Date() : new Date().setHours(0, 0, 0, 0);
  
//     const toTimeMinTime = startTime;
//     const toTimeMaxTime = new Date(toTimeMinTime.getTime() + 24 * 60 * 60 * 1000);
  
//     const handleStartTimeChange = (date) => {
//       setStartTime(date);
//       if (date.getTime() >= endTime.getTime()) {
//         const adjustedEndTime = new Date(date.getTime() + 30 * 60000);
//         setEndTime(adjustedEndTime);
//       }
//     };
//   const handleSubmit = async () => {
//     const availabilityData = {
//       startTime: startTime.toISOString(),
//       endTime: endTime.toISOString(),
//       status: "free",
//       day: startDate,
//     };

//     console.log(availabilityData);
//     try {
//       await addAvailabilityy({startTime, endTime, status:"free", day: formatDateWithDay(startDate), id: 4});
//       // Handle success (e.g., showing a success message or redirecting)
//     } catch (err) {
//       // Handle error (e.g., showing an error message)
//     }
//   };



//   //fetching availabilities
//     const {data: availabilities, isLoading: fetchingAvailabilities} = fetchAvailabilities('fetch')
//     ;

//     //map and filter availabilities to leave those with user id equal to 4
//     const userAvailabilities = availabilities?.filter(availability => Number(availability?.user?.id) === 4);

//     console.log(userAvailabilities, "availabilities")

//   return (
//     <div className="flex flex-col items-center">
//       <h1 className="text-2xl font-bold mb-4">Availability</h1>
//       <div className="mb-4">
//         <p className="mb-2">Add availability</p>
//         <DatePicker 
//             selected={startDate}
//             onChange={(date) => {
//                 if (date) {
//                     const resetTime = new Date(date.setHours(0, 0, 0, 0));
//                     setStartDate(date);
//                     if (!isToday(date)) {
//                         setStartTime(resetTime);
//                         setEndTime(new Date(resetTime.getTime() + 30 * 60000));
//                     }
//                 }
//             }}
//             dateFormat="MMMM d, yyyy"
//             minDate={new Date()}
//             className="p-2 border rounded-md"
//         />
//         <div className="flex gap-4">
//           <div>
//             <DatePicker
//               selected={startTime}
//               onChange={handleStartTimeChange}
//               showTimeSelect
//               showTimeSelectOnly
//               timeIntervals={30}
//               timeCaption="Time"
//               dateFormat="h:mm aa"
//               minDate={startDate}
//               minTime={new Date(fromTimeMinTime)}
//               maxTime={new Date(new Date().setHours(23, 59, 0, 0))}
//               className="p-2 border rounded-md"
//             />
//           </div>
//           <div>
//             <DatePicker
//               selected={endTime}
//               onChange={(date) => setEndTime(date)}
//               showTimeSelect
//               showTimeSelectOnly
//               timeIntervals={30}
//               timeCaption="Time"
//               dateFormat="h:mm aa"
//               minDate={startDate}
//               minTime={new Date(toTimeMinTime)}
//               maxTime={new Date(new Date().setHours(23, 59, 0, 0))}
//               className="p-2 border rounded-md"
//             />
//           </div>
//         </div>
//       </div>
//       <button 
//         onClick={handleSubmit} 
//         disabled={isLoading}
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 disabled:bg-blue-300"
//       >
//         {isLoading ? 'Adding...' : 'Add Availability'}
//       </button>
//       {isSuccess && <p>Availability added successfully!</p>}
//       {isError && <p>Error adding availability: {error?.data?.message || 'Something went wrong'}</p>}
   
//    <p>all availabilities</p>
   
//    {fetchingAvailabilities && <p>Fetching availabilities...</p>}
//     {userAvailabilities?.map((availability) => (
//         <div key={availability.id} className="flex gap-4">
//             <p>{availability.startTime}</p>
//             <p>{availability.endTime}</p>
//             <p>{availability.status}</p>
//             <p>{availability.day}</p>
//         </div>
//     ))}

   
//     </div>
//   );
// };

// export default Availability;