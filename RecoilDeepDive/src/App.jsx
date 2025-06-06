import './App.css'
import { networkAtom, jobAtom, messagingAtom, notificationAtom } from '../src/atoms';
import { RecoilRoot, useRecoilValue } from 'recoil';

export default function App() {
  return <RecoilRoot>
    <MainApp></MainApp>
  </RecoilRoot>
}

function MainApp() {
  const networkValue = useRecoilValue(networkAtom);
  const jobValue = useRecoilValue(jobAtom);
  const messagingValue = useRecoilValue(messagingAtom);
  const notificationValue = useRecoilValue(notificationAtom);
  return (
    <>
      <RecoilRoot>
        <CustomButton name={"Home"} ></CustomButton> <br></br>
        <CustomButton name={"My Network"} value={networkValue > 99 ? "99+" : networkValue}></CustomButton> <br></br>
        <CustomButton name={"Jobs"} value={jobValue > 99 ? "99+" : jobValue}></CustomButton> <br></br>
        <CustomButton name={"Messaging"} value={messagingValue > 99 ? "99+" : messagingValue}></CustomButton> <br></br>
        <CustomButton name={"Notifications"} value={notificationValue > 99 ? "99+" : notificationValue}></CustomButton > <br></br>
        <CustomButton name={"Me"}></CustomButton> <br></br>
      </RecoilRoot>
    </>
  )
}

function CustomButton({ name, value }) {
  return <div>
    <button>{name} {value ? value : ""}</button>
  </div>
}