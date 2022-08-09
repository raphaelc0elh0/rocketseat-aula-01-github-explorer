import { RepositoryItem } from "./RepositoryItem"
import "../styles/repositories.scss"
import { useEffect, useState } from "react"

interface Repository {
  id: string
  name: string
  description: string
  html_url: string
}

export const RepositoryList = () => {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map((repo) => (
          <RepositoryItem key={repo.id} repository={repo} />
        ))}
      </ul>
    </section>
  )
}
