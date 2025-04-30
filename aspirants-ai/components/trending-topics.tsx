import { Badge } from "@/components/ui/badge"

export default function TrendingTopics() {
  const trendingTopics = [
    { name: "G20 Summit", count: 24 },
    { name: "Climate Change", count: 18 },
    { name: "Constitutional Amendments", count: 15 },
    { name: "International Relations", count: 12 },
  ]

  return (
    <div className="space-y-4">
      {trendingTopics.map((topic, index) => (
        <div key={index} className="flex items-center justify-between">
          <span className="font-medium">{topic.name}</span>
          <Badge variant="secondary">{topic.count} articles</Badge>
        </div>
      ))}
    </div>
  )
}
