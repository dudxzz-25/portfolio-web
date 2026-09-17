const projects = [
  [
    '01',
    'DataFlow Analytics',
    'Pipeline ETL com validação, transformação e carga SQL.',
    ['Python', 'SQL', 'ETL'],
    'data'
  ],
  [
    '02',
    'Customer Intelligence',
    'Segmentação RFM e K-Means para comportamento de clientes.',
    ['Python', 'SQL', 'ML'],
    'ai data'
  ],
  [
    '03',
    'AI Recruiter',
    'NLP com TF-IDF, similaridade e aplicação web.',
    ['Python', 'NLP', 'HTML/JS'],
    'ai dev'
  ],
  [
    '04',
    'FraudShield',
    'Classificação de fraude com foco em métricas de classe rara.',
    ['Python', 'ML', 'SQL'],
    'ai data'
  ],
  [
    '05',
    'DemandForecast AI',
    'Previsão de demanda com lags, baseline e ensemble.',
    ['Python', 'Forecast', 'SQL'],
    'ai data'
  ],
  [
    '06',
    'E-commerce DW',
    'Modelo estrela, ETL dimensional e consultas analíticas.',
    ['SQL', 'Python', 'DW'],
    'data'
  ],
  [
    '07',
    'DevTrack',
    'Kanban responsivo com persistência no navegador.',
    ['JavaScript', 'HTML', 'CSS'],
    'dev'
  ],
  [
    '08',
    'FinControl Java',
    'Sistema bancário CLI com POO e persistência.',
    ['Java', 'OOP'],
    'dev'
  ],
  [
    '09',
    'MiniDB C',
    'Armazenamento binário com CRUD em C.',
    ['C', 'Files', 'CLI'],
    'dev'
  ]
];

const repositories = {
  '01': 'dataflow-analytics',
  '02': 'customer-intelligence',
  '03': 'ai-recruiter',
  '04': 'fraudshield',
  '05': 'demandforecast-ai',
  '06': 'ecommerce-datawarehouse',
  '07': 'devtrack',
  '08': 'fincontrol-java',
  '09': 'minidb-c'
};

const grid = document.querySelector('#grid');

function render(filter = 'all') {
  const filteredProjects = projects.filter(
    project => filter === 'all' || project[4].includes(filter)
  );

  grid.innerHTML = filteredProjects
    .map(project => {
      const repositoryName = repositories[project[0]];

      return `
        <a
          class="project"
          href="https://github.com/dudxzz-25/${repositoryName}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <span class="num">PROJECT ${project[0]}</span>
            <h3>${project[1]}</h3>
            <p>${project[2]}</p>
          </div>

          <div class="tags">
            ${project[3]
              .map(tag => `<span>${tag}</span>`)
              .join('')}
          </div>
        </a>
      `;
    })
    .join('');
}

document.querySelectorAll('#filters button').forEach(button => {
  button.onclick = () => {
    document.querySelectorAll('#filters button').forEach(item => {
      item.classList.remove('active');
    });

    button.classList.add('active');
    render(button.dataset.filter);
  };
});

document.querySelector('#theme').onclick = () => {
  document.body.classList.toggle('dark');

  localStorage.setItem(
    'portfolio.theme',
    document.body.classList.contains('dark') ? 'dark' : 'light'
  );
};

if (localStorage.getItem('portfolio.theme') === 'dark') {
  document.body.classList.add('dark');
}

render();