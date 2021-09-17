import axios from 'axios';
import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import { Profile } from 'types/profile';

import './styles.css';

type FormData = {
    user: string;
}

const GithubSearch = () => {

    const [profile, setProfile] = useState<Profile>();

    const [formData, setFormData] = useState<FormData>({
        user: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData({ ...formData, [name]: value })     
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        axios.get(`https://api.github.com/users/${formData.user}`)
            .then((response) => {
                setProfile(response.data);
            })
            .catch((error) => {
                setProfile(undefined);
            });
    }


    return (
        <>
            <div className="github-container">
                <div className="github-container-search">
                    <h1>Encontre um perfil Github</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="user"
                            value={formData.user}
                            placeholder="Usuário GitHub"
                            onChange={handleChange}
                        />
                        <button type="submit" className="btn-primary">
                            Encontrar
                        </button>
                    </form>
                </div>
            </div>
            {profile &&
            <div className="github-container-result">
                <ResultCard profile={profile} />
            </div>
            }   
        </>
    )
}

export default GithubSearch;