import inputStyles from './../styles/Input.module.scss';

type Props = {
    id:string,
    onChange: (e: any) => void
}

export const Input: React.FC<Props> = (props) => {
     const {id, onChange: handleChange} = props;
     return <input className={inputStyles.input} type="text" id={id} onChange={handleChange}/>
    }

