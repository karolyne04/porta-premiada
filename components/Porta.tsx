import  styles  from "../src/app/styles/Porta.module.css";
import Presente from './Presente'
import PortaModel from '../model/Porta'

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
    const porta = props.value
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''

    const alternarSelecao = (e: any) => props.onChange(porta.alternarSelecao())
    const abrir = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation()
        props.onChange(porta.abrir())
    }

    function renderizarPorta() {
        return (
            <div className={styles.porta}>
                <div className={styles.numero}>{porta.numero}</div>
                <div className={styles.macaneta}
                    onClick={abrir}></div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                {porta.fechada ?
                    renderizarPorta() : 
                    porta.temPresente ? <Presente /> : false
                }
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}