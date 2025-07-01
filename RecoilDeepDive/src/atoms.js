//#region Async Data Queries
// import { atom, selector } from 'recoil'
// import axios from 'axios'

// export const CountryAtom = atom({       // basically this technique can be used to fetch the data on the reload of page
//     key: "countryAtom",                 // here the data in the default must be synchronous or we can be a selector which further can be a asynchronous as the API call is always a async
//     default: selector({
//         key: "countryAtomSelector",
//         get: async () => {
//             debugger;
//             const res = await axios.get("https://restcountries.com/v3.1/name/india");
//             return res.data;
//         }
//     })
// })
//#endregion

//#region Basics of Recoil

// import { atom, selector } from 'recoil'

// export const networkAtom = atom({
//     key: "networkAtom", default: 120
// })
// export const jobAtom = atom({
//     key: "jobAtom", default: 12
// })
// export const messagingAtom = atom({
//     key: "messagingAtom", default: 93
// })
// export const notificationAtom = atom({
//     key: "notificationAtom", default: 543
// })

// export const totalNotificationSelector = selector({             // similar to use Memo hook
//     key: "totalNotificationSelector", get: ({ get }) => {
//         return get(networkAtom) + get(jobAtom) + get(messagingAtom) + get(notificationAtom)
//     }
// })


//#endregion