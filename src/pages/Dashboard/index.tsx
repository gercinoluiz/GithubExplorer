import React, { useState, FormEvent, useEffect } from 'react'
import { Title, Form, Repositories, Error } from './styles';
import logo from "../../assets/logo.svg";
import { FiChevronRight } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import api from '../../services/api';
import { Link } from 'react-router-dom';



interface Repository {
    //  voce precisa colocar na tipagem somente o que voce vai USARRRR!!!

    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string
    }
}


const DashBoard: React.FC = () => {

    const [newRepo, setNewRepo] = useState('')

    // The method bellow is amazing. I can pass a function into state
    const [respositories, setRepositories] = useState<Repository[]>(() => {

        // getting the local storage
        const localStorageRepositories = localStorage.getItem('@GetRepositories:repositories')

        //  localStorageRepositories ? JSON.parse(localStorageRepositories): []
        if (localStorageRepositories) { return JSON.parse(localStorageRepositories) } else { return [] }


    }
    )
    const [inputError, setInputError] = useState('')


    useEffect(() => {

        // Saving into LocalStorage
        localStorage.setItem('@GetRepositories:repositories', JSON.stringify(respositories))




    }, [respositories, setRepositories])

    const handleAddRepository = async (e: FormEvent /* receiving the form event*/): Promise<void> => {

        e.preventDefault() // prevetint the default behavior of the form

        if (!newRepo) return setInputError('Type something.')


        try {


            const response = await api.get<Repository>(`/repos/${newRepo}`)

            const repository = response.data;

            setRepositories([...respositories, repository])
            setInputError('')
            setNewRepo('')

        } catch (error) {
            if (error) return setInputError('Something went wrong with this repository.')

        }
    }
    console.log(respositories)

    return (
        <>
            <img src={logo} alt="Git Hub Explorer" ></img>
            <Title>Explore Git Hub's repositories</Title>

            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}

                    placeholder="Type here the repository" />
                <button type="submit" >Search</button>
            </Form>

            {inputError && <Error>{inputError} </Error>}

            <Repositories>

                {respositories.map(repo => (




                    <div className="item">

                        < Link key={repo.full_name} to={`/repositories/${repo.full_name}`}>
                            <img src={repo.owner.avatar_url}
                                alt={repo.owner.login} />
                            <div>
                                <strong>{repo.full_name}</strong>
                                <p>{repo.description}</p>
                            </div>
                            <FiChevronRight size={20} />


                        </Link>
                        <MdDelete size={22} onClick={() => {


                            const filteredArray = respositories.filter(repository => repository.full_name !== repo.full_name)

                            localStorage.setItem('@GetRepositories:repositories', JSON.stringify(filteredArray))
                            setRepositories(filteredArray)


                            // setRepositories(filteredArray)



                        }} />

                    </div>



                ))}

            </Repositories>


        </>

    )
}


export default DashBoard;