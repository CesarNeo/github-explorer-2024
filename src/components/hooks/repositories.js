import { useEffect, useState } from 'react'

function useRepositories() {
  const [repositories, setRepositories] = useState([])

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
