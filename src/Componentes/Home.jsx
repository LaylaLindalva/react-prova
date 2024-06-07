import ImgColaboradores from '../../Image/colaboradores.png'
import ImgControle from '../../Image/controle-de-limpeza.png'
import ImgPlanilha from '../../Image/planilha.png'
import ImgCadastro from '../../Image/cadastro.png'
import ImgQuadrado1 from '../../Image/spray-de-limpeza 2.png'
import ImgHomem from '../../Image/homem-limpando.png'
import { Div, DivHomemLimpando, DivImgQuadrado, DivQuadradoBranco, DivTexto, H1, H1DivQuadrado, H2, ImgCard, ImgHomemLimpando, ImgPrincipal, ImgQuadrado, P, Section, SectionCard, TextoFinal } from "../Style/Home";


const Home = () => {
    return(
        <>
        <Section>
            <ImgPrincipal src={ImgColaboradores}/>
        </Section>
        <Div>
            <H1>Control-Clean</H1>
            <H2>SEJA BEM-VINDO COLABORADOR</H2>
        </Div>
        <DivQuadradoBranco>
            <DivImgQuadrado>
            <ImgQuadrado src={ImgQuadrado1}/>
            <H1DivQuadrado>A Importância da Limpeza Na Escola</H1DivQuadrado>
            </DivImgQuadrado>
            <P>A higiene e limpeza na escola são aspectos
                    essenciais para criar um ambiente seguro e saudável para os estudantes.
                    A prevenção de doenças, o bem-estar dos alunos e o aprendizado eficiente
                    são beneficiados quando a comunidade escolar se envolve e trabalha em conjunto
                    para manter a higiene e a limpeza em dia. A conscientização sobre a importância
                    desses aspectos desde cedo é fundamental para formar alunos responsáveis e conscientes,
                    que carregarão esses valores para a vida adulta.
                    A higiene e limpeza na escola são aspectos
                    essenciais para criar um ambiente seguro e saudável para os estudantes.
                    A prevenção de doenças, o bem-estar dos alunos e o aprendizado eficiente
                    são beneficiados quando a comunidade escolar se envolve e trabalha em conjunto
                    para manter a higiene e a limpeza em dia. A conscientização sobre a importância
                    desses aspectos desde cedo é fundamental para formar alunos responsáveis e conscientes,
                    que carregarão esses valores para a vida adulta.</P>
        </DivQuadradoBranco>
        <SectionCard>
            <ImgCard src={ImgControle}/>
            <ImgCard src={ImgPlanilha}/>
            <ImgCard src={ImgCadastro}/>
        </SectionCard>
        <DivHomemLimpando>
            <ImgHomemLimpando src={ImgHomem}/>
        </DivHomemLimpando>
        <DivTexto>
            <TextoFinal>Obrigado por manter nosso ambiante institucional limpo e aconchegante, você faz a diferença na nossa empresa.</TextoFinal>
        </DivTexto>
        </>
    )
}

export default Home;