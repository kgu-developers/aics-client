const getFileNameFromUrl = (url: string): string | undefined => {
  const parts = url.split('/')

  return parts[parts.length - 1]
}

export { getFileNameFromUrl }
