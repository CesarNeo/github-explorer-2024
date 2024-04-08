import './repositories.scss'

import RepositoryItem from './repository-item'

function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {Array.from({ length: 10 }, (_, index) => (
          <RepositoryItem key={index} repository={index} />
        ))}
      </ul>
    </section>
  )
}

export default RepositoryList
