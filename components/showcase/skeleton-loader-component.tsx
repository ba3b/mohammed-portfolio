"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonLoaderComponent() {
  const [loading, setLoading] = useState(true)

  const toggleLoading = () => {
    setLoading(!loading)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Content Loading States</h3>
        <Button variant="outline" size="sm" onClick={toggleLoading}>
          {loading ? "Show Content" : "Show Loading"}
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Card Skeleton */}
        <Card>
          <CardHeader>
            {loading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            ) : (
              <div>
                <h4 className="font-semibold">Project Title</h4>
                <p className="text-sm text-muted-foreground">Project description</p>
              </div>
            )}
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-4">
                <Skeleton className="h-32 w-full" />
                <div className="space-y-2">
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-2/3" />
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-6 w-20" />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold">Project Image</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  This is the actual content that appears after loading is complete.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">TypeScript</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* List Skeleton */}
        <Card>
          <CardHeader>
            <h4 className="font-semibold">Activity Feed</h4>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  {loading ? (
                    <>
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-3 w-3/4" />
                        <Skeleton className="h-3 w-1/2" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="h-10 w-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">{item}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Activity {item}</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
