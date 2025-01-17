import * as React from 'react'
import Repo from './Repo'
import api from '../../services/api'
import { Repo as RepoType, ReposProps } from '../../types'

const { useEffect, useState } = React

function Repos ({ login }: ReposProps) {
  const [loading, setLoading] = useState(true)
  const [repos, setRepos] = useState<Array<RepoType>>([])

  async function loadRepos () {
    const response = await api.get(`/api/users/${login}/repos`)
    const { data } = response

    const repos: Array<RepoType> = data.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url
    }))

    setRepos(repos)
    setLoading(false)
  }

  useEffect(() => {
    loadRepos()
  }, [])

  return (
    <div>
      <h3>Public Projects {repos.length > 0 && `(${repos.length})`}</h3>
      {
        loading
          ? <span>Loading...</span>
          : repos.map((repo: any) => <Repo key={repo.id} data={repo} />)
      }

      <style jsx>
        {`
          h3, span {
            font-family: Roboto;
            font-weight: 500
          }
        `}
      </style>
    </div>
  )
}

export default Repos
