import { PASTORS_TEAM } from "@/constants/pastors";
import { Pastor } from "./Pastor";

const PastorsList = () => {
  return (
    <>
      {PASTORS_TEAM.map(pastor => (
        <Pastor key={pastor.id} data={pastor} />
      ))}
    </>
  )
}

export { PastorsList };