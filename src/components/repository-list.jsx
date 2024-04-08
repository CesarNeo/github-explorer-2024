function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {Array.from({ length: 10 }, (_, index) => (
          <li key={index}>
            <strong>unform</strong>
            <p>Forms in React</p>

            <a href="">Acessar repositório no Github</a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default RepositoryList
