"use client"

import { useState } from "react"
import { Loader2, Trash2, Save, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function ActionDialogComponent() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState<string | null>(null)

  const handleAction = async (actionName: string) => {
    setLoading(actionName)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setLoading(null)
    setOpen(false)
  }

  return (
    <div className="space-y-4">
      <Button onClick={() => setOpen(true)} className="w-full">
        Open Action Dialog
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Trash2 className="h-5 w-5 text-red-400" />
              Delete Project
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this project? This action cannot be undone and will permanently remove all
              associated data.
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <div className="p-4 bg-red-50/50 dark:bg-red-950/20 rounded-lg border border-red-200/50 dark:border-red-800/50">
              <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">This will delete:</h4>
              <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                <li>• All project files and assets</li>
                <li>• Version history and backups</li>
                <li>• Associated team permissions</li>
              </ul>
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={loading !== null}
              className="flex items-center gap-2"
            >
              <X className="h-4 w-4" />
              Cancel
            </Button>
            <Button
              variant="outline"
              onClick={() => handleAction("save")}
              disabled={loading !== null}
              className="flex items-center gap-2"
            >
              {loading === "save" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              Save Draft
            </Button>
            <Button
              variant="destructive"
              onClick={() => handleAction("delete")}
              disabled={loading !== null}
              className="flex items-center gap-2"
            >
              {loading === "delete" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
              Delete Project
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
