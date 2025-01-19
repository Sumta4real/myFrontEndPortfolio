export default function Project(props){
    return(
        <article>
            <div className='imageContainer'>
                <a  target='_blank' href={props.liveSite}>
                <img className="projectImage"
                src={props.img.src} 
                alt={props.img.alt} 
                />
                </a>
            </div>
            <div className="content-header">  
                <h2 className="projectTitle">{props.title}</h2>
                <p className="projectDescription"> {props.description} </p>
            </div>
            <div className="content-body">
                <p className="projectDetail"> {props.detail} </p>
           </div>
            <div className="projectLink">
            <a href={props.liveSite} target="_blank">Live Site</a> 
            <a href={props.gitRepo} target="_blank">GitHub Repo</a>
            </div>
        </article>
    )
}