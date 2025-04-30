import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, BookOpen, Tag, BarChart2 } from "lucide-react"

export default function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-white border border-muted">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-heading font-medium text-navy">Processed Articles</CardTitle>
          <FileText className="h-4 w-4 text-forest" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary">127</div>
          <p className="text-xs text-muted-foreground">+24 from last week</p>
        </CardContent>
      </Card>
      <Card className="bg-white border border-muted">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-heading font-medium text-navy">Flashcards Created</CardTitle>
          <BookOpen className="h-4 w-4 text-forest" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-secondary">583</div>
          <p className="text-xs text-muted-foreground">+89 from last week</p>
        </CardContent>
      </Card>
      <Card className="bg-white border border-muted">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-heading font-medium text-navy">Topics Covered</CardTitle>
          <Tag className="h-4 w-4 text-forest" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary">42</div>
          <p className="text-xs text-muted-foreground">+5 from last week</p>
        </CardContent>
      </Card>
      <Card className="bg-white border border-muted">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-heading font-medium text-navy">PYQ Connections</CardTitle>
          <BarChart2 className="h-4 w-4 text-forest" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-secondary">78</div>
          <p className="text-xs text-muted-foreground">+12 from last week</p>
        </CardContent>
      </Card>
    </div>
  )
}
