export const UniqueImageText = () => {
    return (
        <div>
            <div>appyper pour ajouter une image</div>
            <div>ou</div>
            <div>glissez et déposez une image ici</div>
        </div>
    )
} 

export const RequiredStar = ()=> {return <span className='text-redcolor'>*</span>}

export const RequiredText = (props)=>{
    const {text} =props
    return(
        <span className='text-redcolor'>{text ?? "vous devez remplir ce champ"}</span>
    )
}