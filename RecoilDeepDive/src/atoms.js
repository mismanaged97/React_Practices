import { atom, selector } from 'recoil'

export const networkAtom = atom({
    key: "networkAtom", default: 120
})
export const jobAtom = atom({
    key: "jobAtom", default: 12
})
export const messagingAtom = atom({
    key: "messagingAtom", default: 93
})
export const notificationAtom = atom({
    key: "notificationAtom", default: 543
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector", get: ({ get }) => {
        return get(networkAtom) + get(jobAtom) + get(messagingAtom) + get(notificationAtom)
    }
})