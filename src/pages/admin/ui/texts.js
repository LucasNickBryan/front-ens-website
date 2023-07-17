import DangerIcon from '../../../assets/icons/danger.png'

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
        <span className='text-redcolor'>
            <img src={DangerIcon} alt="danger" className='w-4 inline-block mr-1' />
            {text ?? "vous devez remplir ce champ"}</span>
    )
}