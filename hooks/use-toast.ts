// Improved toast implementation
export function useToast() {
  return {
    toast: ({ title, description, variant }: { title: string; description: string; variant?: string }) => {
      // In a real app, this would show a toast notification
      // For now, we'll just log to console
      console.log(`Toast: ${title} - ${description} (${variant || "default"})`)

      // Create a simple toast notification
      const toast = document.createElement("div")
      toast.className = `fixed top-4 right-4 p-4 rounded-md shadow-md max-w-md z-50 ${
        variant === "destructive" ? "bg-red-500 text-white" : "bg-green-500 text-white"
      }`

      const titleElement = document.createElement("h3")
      titleElement.className = "font-bold"
      titleElement.textContent = title

      const descElement = document.createElement("p")
      descElement.className = "text-sm"
      descElement.textContent = description

      toast.appendChild(titleElement)
      toast.appendChild(descElement)
      document.body.appendChild(toast)

      // Remove after 5 seconds
      setTimeout(() => {
        toast.classList.add("opacity-0", "transition-opacity", "duration-300")
        setTimeout(() => {
          document.body.removeChild(toast)
        }, 300)
      }, 5000)
    },
  }
}

