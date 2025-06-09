const getFileNameFromUrl = (url: string): string | undefined => {
  const parts = url.split('/')

  return parts[parts.length - 1]
}

const downloadFile = (physicalPath: string) => {
  const link = document.createElement('a')
  link.href = physicalPath
  link.download = physicalPath
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export { getFileNameFromUrl, downloadFile }
