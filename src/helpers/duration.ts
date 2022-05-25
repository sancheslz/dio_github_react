

function delay(date: string): string {
  const today = new Date()
  const updated = new Date(date)
  const diff = today.getTime() - updated.getTime() 
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  return `${days} days ago`
}

export { delay }