import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch } from "react-router-dom"
import { Header, RepositoryInfo, Issues } from "./style"

import logo from "../../assets/logo.svg";
import api from "../../services/api"
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'


interface RepositoryParams {
    repository: string;
}

interface RepositoryInterface {
    //  voce precisa colocar na tipagem somente o que voce vai USARRRR!!!

    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string
    }
    forks_count: number;
    stargazers_count: number;
    open_issues_count: number;
}


interface Issue {
    title: string;
    id: string;
    user: {
        login: string;
    };
    html_url: string;
}


const Repository: React.FC = () => {

    const { params } = useRouteMatch<RepositoryParams>()

    const [repository, setRepository] = useState<RepositoryInterface | null>(null)
    const [issues, setIssues] = useState<Issue[]>([])

    useEffect(() => {

        // How to use Async into useEffect

        async function loadData(): Promise<void> {


            const [repository, issues] = await Promise.all(
                [
                    api.get(`repos/${params.repository}`),
                    api.get(`repos/${params.repository}/issues`)
                ]
            )

            setRepository(repository.data)
            setIssues(issues.data)
        }

        loadData();

    }, [params.repository])

    return (

        <>
            <Header>

                <img src={logo} alt="Git Hub Explorer" />

                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>

            </Header>


            {  repository &&
                <RepositoryInfo>

                    <header>
                        {/* if ternario encadeado abaixo */}
                        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                        <div>
                            <strong>
                                {repository.full_name}
                            </strong>
                            <p>
                                {repository.description}
                            </p>
                        </div>
                    </header>

                    <ul>
                        <li>
                            <strong>
                                {repository.stargazers_count}
                            </strong>
                            <span>
                                Stars
                            </span>
                        </li>

                        <li>
                            <strong>
                                {repository.open_issues_count}
                            </strong>
                            <span>
                                Open issues
                            </span>
                        </li>
                    </ul>

                </RepositoryInfo>
            }

            <Issues>

                {

                    issues.map(issue => (
                    < a rel="noreferrer noopener" target="_blank"  key={issue.id} href={issue.html_url}>

                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>
                        <FiChevronRight size={20} />


                    </a>))



                }


            </Issues>
         
        </>
    )
}


export default Repository;