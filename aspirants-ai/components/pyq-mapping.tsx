import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PYQMapping() {
  const pyqConnections = [
    {
      id: 1,
      topic: "Climate Change and Paris Agreement",
      question:
        "Discuss the impact of climate change on global food security. Also discuss the strategies for ensuring food security in the times of increasing climate variability. (UPSC 2022)",
      relevance: "High",
      recentNews: [
        "India's Updated NDC Targets under Paris Agreement",
        "Climate Finance Discussions at COP28",
        "IPCC's Sixth Assessment Report",
      ],
    },
    {
      id: 2,
      topic: "Electoral Reforms",
      question:
        "Do you think that the Constitution of India does not accept the principle of strict separation of powers rather it is based on the principle of 'checks and balances'? Explain. (UPSC 2021)",
      relevance: "Medium",
      recentNews: [
        "Supreme Court Verdict on Electoral Bonds",
        "Election Commission's New Guidelines for Political Parties",
        "One Nation, One Election Proposal",
      ],
    },
    {
      id: 3,
      topic: "India's Foreign Trade Policy",
      question:
        "What are the main constraints in transport and marketing of agricultural produce in India? (UPSC 2019)",
      relevance: "Medium",
      recentNews: [
        "India's New Foreign Trade Policy Announced",
        "Agricultural Export Promotion Initiatives",
        "E-commerce Export Hubs Establishment",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        This section maps current news topics to previous UPSC questions, helping you understand their relevance and
        potential for future exams.
      </p>

      <div className="space-y-4">
        {pyqConnections.map((item) => (
          <Card key={item.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{item.topic}</CardTitle>
                <Badge
                  className={
                    item.relevance === "High"
                      ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                  }
                >
                  {item.relevance} Relevance
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm">Previous Year Question:</h4>
                  <p className="text-sm mt-1 italic">{item.question}</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Related Recent News:</h4>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    {item.recentNews.map((news, index) => (
                      <li key={index} className="text-sm">
                        {news}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Detailed Analysis
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
