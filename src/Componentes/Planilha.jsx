import React from 'react';
import { Div, H1, Section1, Div2, H2, Div3, P } from "../Style/Planilha";
import Info from "./Info";


const Relatorio = ({ list }) => {
    return (
        <>
            
            <Div>
                <H1>Relatório Semanal</H1>
            </Div>

            <Section1>
                {Array.from({ length: 6 }, (_, index) => (
                    <Div3 key={index}>
                        <Div2>
                            <H2>DIA</H2>
                        </Div2>
                        {list[index] ? (
                            <Info 
                                nome={list[index].nome} 
                                sala={list[index].sala} 
                                hora={list[index].hora} 
                                data={list[index].data} 
                            />
                        ) : (
                            <P>Sem dados para este dia</P> 
                        )}
                    </Div3>
                ))}
            </Section1>
        </>
    );
};
export default Relatorio;