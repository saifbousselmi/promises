// // Task 1

// async function IterateWithAsyncAwait(values) {
//     for (let value of values) {
//         console.log(value);
//         console.log("pending ....");
//         await new Promise((resolve) => setTimeout(resolve,1000));
// }
//     }

// const values = [1,2,3,4,5,6];
// IterateWithAsyncAwait(values);

// Task 2

// const url = "https://fakestoreapi.com/products";

// // Define fetchData outside awaitCall for reuse
// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then((res) => res.json())
//             .then((data) => {
//                 // Filter the data
//                 data = data.filter((item) => item.price < 0);
//                 // Resolve or reject based on filtered data
//                 data.length ? resolve({ data }) : reject("No data found");
//             })
//             .catch((error) => reject("Error fetching data: " + error));
//     });
// };

// // Call fetchData and handle the result
// fetchData()
//     .then((data) => console.log("Fetched data:", data))
//     .catch((error) => console.error("Error:", error));

// // Define the async function to fetch data with a delay
// async function awaitCall() {
//     const fetchDataWithDelay = () => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 fetch(url)
//                     .then((response) => response.json())
//                     .then((data) => resolve({ data }))
//                     .catch((error) => resolve({ error: "Error fetching data: " + error }));
//             }, 2000);
//         });
//     };

//     try {
//         console.log("Fetching data...");
//         const response = await fetchDataWithDelay();
//         if (response.error) {
//             console.error("Error:", response.error);
//         } else {
//             console.log("Data received:", response.data);
//         }
//     } catch (error) {
//         console.error("Error in awaitCall:", error);
//     }
// }

// awaitCall();

// Task 3
const functionOne = async () =>{
 await new Promise((resolve) =>setTimeout(resolve, 1000))
 console.log("FunctionOne finished");
}
const functionTwo= async () =>{
    await new Promise((resolve) =>setTimeout(resolve, 1000))
    console.log("functionTwo finished");
   }
   const functionThree = async () =>{
    await new Promise((resolve) =>setTimeout(resolve, 1000))
    console.log("functionThree finished");
   }

   const executedFunctions = async  () =>{
    await functionOne();
    await functionTwo();
    await functionThree();
   }
   executedFunctions()