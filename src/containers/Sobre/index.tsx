import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
  <Titulo fontSize={16}>Sobre</Titulo>
  <Paragrafo tipo="secundario">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi vel odit ab iste vero iusto perspiciatis saepe molestiae eligendi, quia libero reprehenderit repellendus omnis harum accusantium maiores tenetur laboriosam.
  </Paragrafo>
  <GithubSecao>
  <img  src="https://github-readme-stats.vercel.app/api?username=daniel12334j&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
  <img  src="https://github-readme-stats.vercel.app/api/top-langs/?username=daniel12334j&layout=compact&langs_count=7&theme=dracula"/>
  </GithubSecao>
</section>
)

export default Sobre
