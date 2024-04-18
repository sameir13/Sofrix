import Accounts from "../components/Accounts";
import Networth from "../components/Networth"
import SignUp from "../components/Sign-up";
import Notify from "../components/Notify";
import Report from "../components/Report"

const Page = () => {
  return (
    <div>
      <SignUp />
      <Accounts />
      <Networth />
      <Notify />
      <Report />
    </div>
  );
};

export default Page;
