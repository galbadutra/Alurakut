import React from 'react';
import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box/'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'


function ProfileSideBar(propriedades) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />
      <p>
        <a className="boxLink" href={"`https://github.com/${propriedades.githubUser}`"}>
          @{propriedades.githubUser}
        </a>
      </p >
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>

  )
}



export default function Home() {
  const usuarioAleatorio = 'galbadutra';
  const [comunidades, setComunidades] = React.useState([{
    id: '123',
    title: "Tricolor de Aço",
    image: 'data:image/jpeg;base64,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'
  }]);
  //const comunidadesFavoritas = ['AluraKut'];
  //const alteradorDeComunidades = comunidades[1];
  const pessoasFavoritas = ['galbadutra', 'omariosouto', 'peas', 'felipefialho', 'emiliocalvet']

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={usuarioAleatorio} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box >
            <h1 className="Title">
              Bem vindo(a)
              <OrkutNostalgicIconSet />
            </h1>
          </Box>


          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e) {
              e.preventDefault();
              const dadosDoForm = new FormData(e.target);


              const comunidade = {
                id: new Date().toISOString(),
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image'),
              };

              //comunidades.push('Alura Starts');
              const comunidadesAtualizadas = [...comunidades, comunidade];
              setComunidades(comunidadesAtualizadas);
            }}>
              <div>
                <input
                  placeholder="Qual vai ser a comunidade"
                  name="title"
                  aria-label="Qual vai ser o nome da Comunidade?"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque a URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque a URL para usarmos de capa"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`} >
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades Favoritas ({comunidades.length})
            </h2>

            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

        </div>
      </MainGrid >
    </>
  )
}
