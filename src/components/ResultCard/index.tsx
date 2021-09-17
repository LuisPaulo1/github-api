import { Profile } from 'types/profile';

import './styles.css';

type Props = {
    profile: Profile;
}

const ResultCard = ({profile} : Props) => {
    return (
        <div className="container-result">
            <div className="image-result">
                <img src={profile.avatar_url} alt="Imagem da foto" />
            </div>
            <div className="info-container-result">
                <div className="info-result">
                    <h6>Informações</h6>
                    <ul>
                        <li><strong>Perfil:</strong> {profile.html_url}</li>
                        <li><strong>Seguidores:</strong> {profile.followers}</li>
                        <li><strong>Localidade:</strong> {profile.location}</li>
                        <li><strong>Nome:</strong> {profile.name}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ResultCard;