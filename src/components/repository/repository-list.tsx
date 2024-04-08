import './repositories.scss'

import useRepositories from '../hooks/repositories'
import RepositoryItem from './repository-item'

function RepositoryList() {
  const { repositories } = useRepositories()

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  )
}

export default RepositoryList
