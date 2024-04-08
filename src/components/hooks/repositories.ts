import { useEffect, useState } from 'react'

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
}

function useRepositories() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    ;(async () => {
      const response = await fetch(
        'https://api.github.com/users/cesarneo/repos',
      )
      const data = await response.json()

      setRepositories(data)
    })()
  }, [])

  return { repositories }
}

export default useRepositories
