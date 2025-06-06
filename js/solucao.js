const cidadesPorEstado = {
  AC: [
    '1. Rio Branco - Nível de Esgoto: 90% - PERIGO',
    '2. Cruzeiro do Sul - Nível de Esgoto: 90% - Notificada',
    '3. Sena Madureira',
    '4. Tarauacá',
    '5. Feijó',
    '6. Brasileia',
    '7. Senador Guiomard',
    '8. Plácido de Castro',
    '9. Xapuri',
    '10. Mâncio Lima'
  ],
  AL: [
    '1. Maceió',
    '2. Arapiraca',
    '3. Rio Largo',
    '4. Palmeira dos Índios',
    '5. União dos Palmares',
    '6. Penedo',
    '7. São Miguel dos Campos',
    '8. Campo Alegre',
    '9. Delmiro Gouveia',
    '10. Coruripe'
  ],
  AP: [
    '1. Macapá',
    '2. Santana',
    '3. Laranjal do Jari',
    '4. Oiapoque',
    '5. Porto Grande',
    '6. Mazagão',
    '7. Tartarugalzinho',
    '8. Vitória do Jari',
    '9. Pedra Branca do Amapari',
    '10. Ferreira Gomes'
  ],
  AM: [
    '1. Manaus',
    '2. Parintins',
    '3. Itacoatiara',
    '4. Manacapuru',
    '5. Coari',
    '6. Tabatinga',
    '7. Maués',
    '8. Tefé',
    '9. Humaitá',
    '10. Iranduba'
  ],
  BA: [
    '1. Salvador',
    '2. Feira de Santana',
    '3. Vitória da Conquista',
    '4. Camaçari',
    '5. Juazeiro',
    '6. Itabuna',
    '7. Lauro de Freitas',
    '8. Ilhéus',
    '9. Jequié',
    '10. Teixeira de Freitas'
  ],
  CE: [
    '1. Fortaleza',
    '2. Caucaia',
    '3. Juazeiro do Norte',
    '4. Maracanaú',
    '5. Sobral',
    '6. Crato',
    '7. Itapipoca',
    '8. Maranguape',
    '9. Iguatu',
    '10. Quixadá'
  ],
  DF: [
    '1. Brasília',
    '2. Ceilândia',
    '3. Taguatinga',
    '4. Samambaia',
    '5. Planaltina',
    '6. Águas Claras',
    '7. Gama',
    '8. Recanto das Emas',
    '9. Sobradinho',
    '10. Santa Maria'
  ],
  ES: [
    '1. Serra',
    '2. Vila Velha',
    '3. Cariacica',
    '4. Vitória',
    '5. Cachoeiro de Itapemirim',
    '6. Linhares',
    '7. São Mateus',
    '8. Colatina',
    '9. Guarapari',
    '10. Aracruz'
  ],
  GO: [
    '1. Goiânia',
    '2. Aparecida de Goiânia',
    '3. Anápolis',
    '4. Rio Verde',
    '5. Luziânia',
    '6. Águas Lindas de Goiás',
    '7. Valparaíso de Goiás',
    '8. Trindade',
    '9. Formosa',
    '10. Novo Gama'
  ],
  MA: [
    '1. São Luís',
    '2. Imperatriz',
    '3. São José de Ribamar',
    '4. Timon',
    '5. Caxias',
    '6. Codó',
    '7. Paço do Lumiar',
    '8. Açailândia',
    '9. Bacabal',
    '10. Balsas'
  ],
  MT: [
    '1. Cuiabá',
    '2. Várzea Grande',
    '3. Rondonópolis',
    '4. Sinop',
    '5. Tangará da Serra',
    '6. Sorriso',
    '7. Lucas do Rio Verde',
    '8. Barra do Garças',
    '9. Primavera do Leste',
    '10. Cáceres'
  ],
  MS: [
    '1. Campo Grande',
    '2. Dourados',
    '3. Três Lagoas',
    '4. Corumbá',
    '5. Ponta Porã',
    '6. Naviraí',
    '7. Nova Andradina',
    '8. Aquidauana',
    '9. Sidrolândia',
    '10. Paranaíba'
  ],
  MG: [
    '1. Belo Horizonte',
    '2. Uberlândia',
    '3. Contagem',
    '4. Juiz de Fora',
    '5. Betim',
    '6. Montes Claros',
    '7. Ribeirão das Neves',
    '8. Uberaba',
    '9. Governador Valadares',
    '10. Ipatinga'
  ],
  PA: [
    '1. Belém',
    '2. Ananindeua',
    '3. Santarém',
    '4. Marabá',
    '5. Castanhal',
    '6. Parauapebas',
    '7. Abaetetuba',
    '8. Cametá',
    '9. Bragança',
    '10. Altamira'
  ],
  PB: [
    '1. João Pessoa',
    '2. Campina Grande',
    '3. Santa Rita',
    '4. Patos',
    '5. Bayeux',
    '6. Sousa',
    '7. Cabedelo',
    '8. Cajazeiras',
    '9. Guarabira',
    '10. Sapé'
  ],
  PR: [
    '1. Curitiba',
    '2. Londrina',
    '3. Maringá',
    '4. Ponta Grossa',
    '5. Cascavel',
    '6. São José dos Pinhais',
    '7. Foz do Iguaçu',
    '8. Colombo',
    '9. Guarapuava',
    '10. Paranaguá'
  ],
  PE: [
    '1. Recife',
    '2. Jaboatão dos Guararapes',
    '3. Olinda',
    '4. Caruaru',
    '5. Petrolina',
    '6. Paulista',
    '7. Camaragibe',
    '8. Garanhuns',
    '9. Vitória de Santo Antão',
    '10. Igarassu'
  ],
  PI: [
    '1. Teresina',
    '2. Parnaíba',
    '3. Picos',
    '4. Piripiri',
    '5. Floriano',
    '6. Barras',
    '7. Campo Maior',
    '8. União',
    '9. Altos',
    '10. Esperantina'
  ],
  RJ: [
    '1. Rio de Janeiro',
    '2. São Gonçalo',
    '3. Duque de Caxias',
    '4. Nova Iguaçu',
    '5. Niterói',
    '6. Belford Roxo',
    '7. São João de Meriti',
    '8. Campos dos Goytacazes',
    '9. Petrópolis',
    '10. Volta Redonda'
  ],
  RN: [
    '1. Natal',
    '2. Mossoró',
    '3. Parnamirim',
    '4. São Gonçalo do Amarante',
    '5. Macaíba',
    '6. Ceará-Mirim',
    '7. Caicó',
    '8. Assú',
    '9. Currais Novos',
    '10. São José de Mipibu'
  ],
  RS: [
    '1. Porto Alegre',
    '2. Caxias do Sul',
    '3. Pelotas',
    '4. Canoas',
    '5. Santa Maria',
    '6. Gravataí',
    '7. Viamão',
    '8. Novo Hamburgo',
    '9. São Leopoldo',
    '10. Rio Grande'
  ],
  RO: [
    '1. Porto Velho',
    '2. Ji-Paraná',
    '3. Ariquemes',
    '4. Vilhena',
    '5. Cacoal',
    '6. Rolim de Moura',
    '7. Guajará-Mirim',
    '8. Jaru',
    '9. Pimenta Bueno',
    '10. Ouro Preto do Oeste'
  ],
  RR: [
    '1. Boa Vista',
    '2. Rorainópolis',
    '3. Caracaraí',
    '4. Alto Alegre',
    '5. Mucajaí',
    '6. Cantá',
    '7. Pacaraima',
    '8. Amajari',
    '9. Bonfim',
    '10. Iracema'
  ],
  SC: [
    '1. Joinville',
    '2. Florianópolis',
    '3. Blumenau',
    '4. São José',
    '5. Chapecó',
    '6. Criciúma',
    '7. Itajaí',
    '8. Jaraguá do Sul',
    '9. Lages',
    '10. Balneário Camboriú'
  ],
  SP: [
    '1. São Paulo',
    '2. Guarulhos',
    '3. Campinas',
    '4. São Bernardo do Campo',
    '5. Santo André',
    '6. Osasco',
    '7. São José dos Campos',
    '8. Ribeirão Preto',
    '9. Sorocaba',
    '10. Mauá'
  ],
  SE: [
    '1. Aracaju',
    '2. Nossa Senhora do Socorro',
    '3. Lagarto',
    '4. Itabaiana',
    '5. São Cristóvão',
    '6. Estância',
    '7. Tobias Barreto',
    '8. Itabaianinha',
    '9. Simão Dias',
    '10. Nossa Senhora da Glória'
  ],
  TO: [
    '1. Palmas',
    '2. Araguaína',
    '3. Gurupi',
    '4. Porto Nacional',
    '5. Paraíso do Tocantins',
    '6. Colinas do Tocantins',
    '7. Guaraí',
    '8. Tocantinópolis',
    '9. Dianópolis',
    '10. Miracema do Tocantins'
  ]
};

document.addEventListener('DOMContentLoaded', function() {
  const estadosList = document.getElementById('estados-list');
  const cidadesList = document.getElementById('cidades-list');
  const alertaBtn = document.querySelector('.alerta-btn');
  let niveis = [];
  let ufAtual = 'AC';

  function gerarNiveisAleatorios() {
    return Array.from({ length: 10 }, () => Math.floor(Math.random() * 26) + 70);
  }

  function mostrarCidades(uf) {
    cidadesList.innerHTML = '';
    ufAtual = uf;
    niveis = gerarNiveisAleatorios();
    (cidadesPorEstado[uf] || []).forEach((cidade, idx) => {
      let div = document.createElement('div');
      div.className = 'cidade';
      // Extrai nome da cidade (remove texto antigo de nível)
      let nomeCidade = cidade.replace(/^(\d+\.\s[^\-]+).*/, '$1');
      let nivel = niveis[idx];
      let texto = `${nomeCidade} - Nível de Esgoto: ${nivel}%`;
      if (nivel >= 90) {
        texto += ' - PERIGO';
        div.classList.add('perigo');
      }
      div.textContent = texto;
      cidadesList.appendChild(div);
    });
  }

  estadosList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      Array.from(estadosList.children).forEach(li => li.classList.remove('selected'));
      e.target.classList.add('selected');
      const uf = e.target.getAttribute('data-uf');
      mostrarCidades(uf);
    }
  });

  alertaBtn.addEventListener('click', function() {
    Array.from(cidadesList.children).forEach((div, idx) => {
      let nivel = niveis[idx];
      let nomeCidade = div.textContent.replace(/^(\d+\.\s[^\-]+).*/, '$1');
      let texto = `${nomeCidade} - Nível de Esgoto: ${nivel}%`;
      if (nivel >= 90) {
        texto += ' - Notificada';
        div.classList.remove('perigo');
        div.classList.add('notificada');
      } else {
        div.classList.remove('notificada');
        div.classList.remove('perigo');
      }
      div.textContent = texto;
    });
  });

  mostrarCidades('AC');
});