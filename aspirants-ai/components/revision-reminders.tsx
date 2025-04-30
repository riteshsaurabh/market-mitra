import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

export default function RevisionReminders() {
  const reminders = [
    {
      topic: "Indian Constitution",
      dueIn: "Today",
      cards: 12,
      priority: "high",
    },
    {
      topic: "Economic Survey Highlights",
      dueIn: "Tomorrow",
      cards: 8,
      priority: "medium",
    },
    {
      topic: "International Organizations",
      dueIn: "3 days",
      cards: 15,
      priority: "low",
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-4">
      {reminders.map((reminder, index) => (
        <div key={index} className="flex flex-col space-y-1">
          <div className="font-medium">{reminder.topic}</div>
          <div className="flex items-center text-sm">
            <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground mr-2">Due: {reminder.dueIn}</span>
            <Badge className={getPriorityColor(reminder.priority)}>{reminder.cards} cards</Badge>
          </div>
        </div>
      ))}
    </div>
  )
}
