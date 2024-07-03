import { PASTORS_TEAM } from "@/constants/pastors";
import { Pastor } from "./Pastor";
import { MotionBox } from "@/components/MotionBox";

const PastorsList = () => {
  return (
    <>
      {PASTORS_TEAM.map(pastor => (
        <MotionBox delay={+`0.${pastor.id}`} key={pastor.id}>
          <Pastor data={pastor} />
        </MotionBox>
      ))}
    </>
  )
}

export { PastorsList };