import { Badge } from "@/components/ui/badge"

export default function RecentNews() {
  const recentNews = [
    {
      title: "India's New Foreign Trade Policy Announced",
      category: "Economy",
      date: "2 hours ago",
    },
    {
      title: "Supreme Court Verdict on Electoral Bonds",
      category: "Polity",
      date: "5 hours ago",
    },
    {
      title: "New Climate Action Plan Released",
      category: "Environment",
      date: "1 day ago",
    },
  ]

  return (
    <div className="space-y-4">
      {recentNews.map((news, index) => (
        <div key={index} className="flex flex-col space-y-1">
          <div className="font-medium">{news.title}</div>
          <div className="flex items-center text-sm">
            <Badge variant="outline" className="mr-2">
              {news.category}
            </Badge>
            <span className="text-muted-foreground">{news.date}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
