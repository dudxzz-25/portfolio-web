const projects = [
  ['01','LogiSense AI','Analytics logístico com 12 mil entregas, API e modelo de risco de atraso.',['Python','FastAPI','ML'],'ai data dev'],
  ['02','Retail Sales Analytics','Dashboard de BI com Power Query, DAX, KPIs e modelagem dimensional.',['Power BI','DAX','Power Query'],'data'],
  ['03','Lighthouse Nautical Analytics','EDA, PostgreSQL, previsão de demanda, recomendação e dashboard.',['Python','SQL','PostgreSQL'],'ai data'],
  ['04','DataFlow Analytics','Pipeline ETL com validação, transformação e carga SQL.',['Python','SQL','ETL'],'data'],
  ['05','Customer Intelligence','Segmentação RFM e K-Means para comportamento de clientes.',['Python','SQL','ML'],'ai data'],
  ['06','DemandForecast AI','Previsão de demanda com lags, baseline e comparação de modelos.',['Python','Forecast','ML'],'ai data'],
  ['07','E-commerce Data Warehouse','Modelo estrela, ETL dimensional e consultas analíticas.',['SQL','Python','DW'],'data'],
  ['08','FraudShield','Classificação de fraude com foco em métricas de classe rara.',['Python','ML','SQL'],'ai data'],
  ['09','AI Recruiter','NLP com TF-IDF, similaridade e aplicação web.',['Python','NLP','Flask'],'ai dev'],
  ['10','DevTrack','Kanban responsivo com persistência no navegador.',['JavaScript','HTML','CSS'],'dev'],
  ['11','FinControl Java','Sistema bancário CLI com POO e persistência.',['Java','OOP'],'dev'],
  ['12','MiniDB C','Armazenamento binário com CRUD em C.',['C','Files','CLI'],'dev']
];

const repositories = {
  '01':'logisense-ai',
  '02':'retail-sales-analytics-powerbi',
  '03':'lighthouse-nautical-analytics',
  '04':'dataflow-analytics',
  '05':'customer-intelligence',
  '06':'demandforecast-ai',
  '07':'ecommerce-datawarehouse',
  '08':'fraudshield',
  '09':'ai-recruiter',
  '10':'devtrack',
  '11':'fincontrol-java',
  '12':'minidb-c'
};

const grid = document.querySelector('#grid');

function render(filter = 'all') {
  const filteredProjects = projects.filter(project => filter === 'all' || project[4].includes(filter));
  grid.innerHTML = filteredProjects.map(project => {
    const repositoryName = repositories[project[0]];
    return `
      <a class="project" href="https://github.com/dudxzz-25/${repositoryName}" target="_blank" rel="noopener noreferrer">
        <div>
          <span class="num">PROJECT ${project[0]}</span>
          <h3>${project[1]}</h3>
          <p>${project[2]}</p>
        </div>
        <div class="tags">${project[3].map(tag => `<span>${tag}</span>`).join('')}</div>
      </a>
    `;
  }).join('');
}

document.querySelectorAll('#filters button').forEach(button => {
  button.onclick = () => {
    document.querySelectorAll('#filters button').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    render(button.dataset.filter);
  };
});

document.querySelector('#theme').onclick = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('portfolio.theme', document.body.classList.contains('dark') ? 'dark' : 'light');
};

if (localStorage.getItem('portfolio.theme') === 'dark') {
  document.body.classList.add('dark');
}

render();