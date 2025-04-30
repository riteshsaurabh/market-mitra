import type React from "react"
import { ClockIcon } from "lucide-react"

export function Clock(props: React.ComponentProps<typeof ClockIcon>) {
  return <ClockIcon {...props} />
}
