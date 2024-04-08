function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url} target="_blank" rel="noreferrer">
        Acessar repositório no Github
      </a>
    </li>
  )
}

export default RepositoryItem
