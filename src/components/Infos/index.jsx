export const Infos = (props) =>{
    props= {avatar_url, userName, login, public_repos, followers, following, html_url}
        return(
        <>
         <img src={avatar_url} alt={userName} />
    <h1>{userName}</h1>
    <p>{login}</p>
    <p>{public_repos}</p>
    <p>{followers}seguidores, seguindo {following} membros</p>
    <a href={html_url}>Entrar</a>
        </>
    )
}