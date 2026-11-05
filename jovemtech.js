<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Autonomia PCD - Vida Independente & Segurança</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
  <style>
    :root {
      --primary-color: #2b580c;
      --accent-color: #639a67;
      --gold-color: #f7b731;
      --bg-light: #f4f7f6;
    }
    body {
      background-color: var(--bg-light);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      padding-bottom: 70px;
    }
    .header-panel {
      background: linear-gradient(135deg, #1b3b08 0%, #3e7317 100%);
      color: white;
      padding: 20px 0;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .star-badge {
      background-color: var(--gold-color);
      color: #333;
      font-weight: bold;
      font-size: 1.1rem;
      padding: 6px 14px;
      border-radius: 20px;
    }
    .nav-pills .nav-link.active {
      background-color: var(--primary-color) !important;
    }
    .card-task {
      border-left: 5px solid var(--accent-color);
      transition: transform 0.2s;
    }
    .card-task:hover {
      transform: translateY(-2px);
    }
    .avatar-box {
      background: #eef9ee;
      border: 2px dashed #639a67;
      border-radius: 15px;
      padding: 15px;
    }
    .sos-btn {
      background-color: #dc3545;
      color: white;
      font-size: 1.3rem;
      font-weight: bold;
      border-radius: 50px;
      padding: 15px 30px;
      box-shadow: 0 4px 10px rgba(220, 53, 69, 0.4);
    }
    .sos-btn:hover {
      background-color: #bb2d3b;
      color: white;
    }
    #map-simulated {
      height: 250px;
      background: #e9ecef;
      border-radius: 12px;
      position: relative;
      overflow: hidden;
    }
    .user-marker {
      width: 20px;
      height: 20px;
      background: #0d6efd;
      border: 3px solid white;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 10%;
      transition: all 1s linear;
      box-shadow: 0 0 10px rgba(13, 110, 253, 0.8);
    }
  </style>
</head>
<body>

  <!-- CABEÇALHO -->
  <header class="header-panel text-center">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <span class="badge bg-light text-dark" id="userTypeBadge">PCD / Paciente</span>
        <div class="star-badge">
          ⭐ <span id="starsCount">45</span> Estrelas | <span id="xpCount">450</span> XP
        </div>
      </div>
      <h2 class="fw-bold mb-0">Autonomia PCD</h2>
      <p class="small text-light mb-0">Morar Sozinho, Mobilidade, Estudo & Apoio Profissional</p>
      
      <div class="mt-3">
        <button class="btn btn-sm btn-outline-light" onclick="loadDemoData()">⚡ Carregar Dados de Exemplo</button>
      </div>
    </div>
  </header>

  <div class="container mt-4">
    <!-- NAVEGAÇÃO POR ABAS -->
    <ul class="nav nav-pills nav-fill mb-4 shadow-sm bg-white p-2 border-radius" id="mainTab" role="tablist">
      <li class="nav-item">
        <button class="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button">👤 Perfil & Laudo</button>
      </li>
      <li class="nav-item">
        <button class="nav-link" id="nono-tab" data-bs-toggle="tab" data-bs-target="#nono" type="button">🥟 Bezerra do Nono</button>
      </li>
      <li class="nav-item">
        <button class="nav-link" id="tasks-tab" data-bs-toggle="tab" data-bs-target="#tasks" type="button">⭐ Tarefas & Rotina</button>
      </li>
      <li class="nav-item">
        <button class="nav-link" id="gps-tab" data-bs-toggle="tab" data-bs-target="#gps" type="button">📍 Transporte & GPS</button>
      </li>
      <li class="nav-item">
        <button class="nav-link" id="sos-tab" data-bs-toggle="tab" data-bs-target="#sos" type="button">🚨 S.O.S & Crise</button>
      </li>
      <li class="nav-item">
        <button class="nav-link" id="rewards-tab" data-bs-toggle="tab" data-bs-target="#rewards" type="button">🎁 Vales & PIX</button>
      </li>
    </ul>

    <div class="tab-content" id="mainTabContent">

      <!-- ABA 1: PERFIL & CADASTRO MULTIDISCIPLINAR -->
      <div class="tab-pane fade show active" id="profile" role="tabpanel">
        <div class="card shadow-sm p-4">
          <h4 class="card-title border-bottom pb-2 text-success"><i class="bi bi-person-lines-fill"></i> Cadastro & Equipe de Acompanhamento</h4>
          
          <form id="profileForm" class="row g-3 mt-2">
            <h6 class="text-secondary mb-0"><i class="bi bi-person-badge"></i> Dados do PCD / Paciente</h6>
            <div class="col-md-6">
              <label class="form-label">Nome Completo</label>
              <input type="text" class="form-control" id="pcdName" value="Hanna Caldas Gouveia da Costa Pinto">
            </div>
            <div class="col-md-3">
              <label class="form-label">Data de Nascimento</label>
              <input type="date" class="form-control" id="pcdDob" value="1998-10-07">
            </div>
            <div class="col-md-3">
              <label class="form-label">Faixa Etária</label>
              <select class="form-select" id="pcdAgeGroup">
                <option value="Maior de Idade" selected>Maior de Idade</option>
                <option value="Menor de Idade">Menor de Idade</option>
              </select>
            </div>
            <div class="col-md-6">
              <label class="form-label">Estado / Cidade</label>
              <input type="text" class="form-control" id="pcdLocation" value="Sergipe - Aracaju">
            </div>
            <div class="col-md-6">
              <label class="form-label">Código CID (Diagnóstico)</label>
              <input type="text" class="form-control" id="pcdCid" value="F84.0 / CID-11 6A02">
            </div>
            <div class="col-12">
              <label class="form-label">Link do Laudo Médico (Google Drive / Nuvem)</label>
              <input type="url" class="form-control" id="pcdDrive" value="https://drive.google.com/file/d/exemplo_laudo_medico_pcd/view">
            </div>

            <h6 class="text-secondary mb-0 mt-4"><i class="bi bi-people"></i> Família & Responsável</h6>
            <div class="col-md-6">
              <label class="form-label">Nome do Responsável / Pai / Mãe</label>
              <input type="text" class="form-control" id="respName" value="Gabriela Caldas Gouveia de Melo">
            </div>
            <div class="col-md-6">
              <label class="form-label">Telefone de Emergência / WhatsApp</label>
              <input type="text" class="form-control" id="respPhone" value="(79) 99999-8888">
            </div>

            <h6 class="text-secondary mb-0 mt-4"><i class="bi bi-heart-pulse"></i> Equipe Multidisciplinar (Saúde)</h6>
            <div class="col-md-6">
              <label class="form-label">Psicólogo(a) Responsável & CRP</label>
              <input type="text" class="form-control" id="psicoInfo" value="Dra. Ana Maria Santos - CRP 19/12345">
            </div>
            <div class="col-md-6">
              <label class="form-label">Psiquiatra Responsável & CRM</label>
              <input type="text" class="form-control" id="psiqInfo" value="Dr. Roberto Carlos Melo - CRM 19/6789">
            </div>

            <div class="col-12 text-end mt-3">
              <button type="button" class="btn btn-success" onclick="saveProfile()"><i class="bi bi-check-circle"></i> Salvar Cadastro</button>
            </div>
          </form>
        </div>
      </div>

      <!-- ABA 2: AVATAR BEZERRA DO NONO (AULA DE PASTEL) -->
      <div class="tab-pane fade" id="nono" role="tabpanel">
        <div class="card shadow-sm p-4">
          <div class="avatar-box text-center mb-4">
            <div class="display-1 mb-2">👴🏼👨🏼‍🍳</div>
            <h4 class="fw-bold text-success mb-1">Bezerra do Nono - Mestre Culinário</h4>
            <p class="text-muted">"Olá! Hoje vou te ensinar passo a passo a fazer um pastel delicioso e crocante sozinho com segurança!"</p>
          </div>

          <h5 class="fw-bold mb-3"><i class="bi bi-egg-fried"></i> Aula Prática: Fazendo Pastel em Casa</h5>
          <div class="list-group mb-3">
            <div class="list-group-item d-flex align-items-center">
              <input class="form-check-input me-3" type="checkbox" id="past1" onchange="checkPastelStep()">
              <div>
                <strong>Etapa 1: Higiene e Bancada</strong>
                <div class="small text-muted">Lave bem as mãos com sabão, seque e limpe a mesa onde vai preparar a massa.</div>
              </div>
            </div>
            <div class="list-group-item d-flex align-items-center">
              <input class="form-check-input me-3" type="checkbox" id="past2" onchange="checkPastelStep()">
              <div>
                <strong>Etapa 2: Montar o Recheio</strong>
                <div class="small text-muted">Abra a massa de pastel, coloque 1 fatia de queijo ou presunto no centro sem encher demais.</div>
              </div>
            </div>
            <div class="list-group-item d-flex align-items-center">
              <input class="form-check-input me-3" type="checkbox" id="past3" onchange="checkPastelStep()">
              <div>
                <strong>Etapa 3: Fechar com o Garfo (Coordenação Motora)</strong>
                <div class="small text-muted">Dobre a massa ao meio e aperte toda a borda apertando com as pontas de um garfo.</div>
              </div>
            </div>
            <div class="list-group-item d-flex align-items-center">
              <input class="form-check-input me-3" type="checkbox" id="past4" onchange="checkPastelStep()">
              <div>
                <strong>Etapa 4: Assar na Airfryer com Segurança</strong>
                <div class="small text-muted">Coloque na Airfryer por 10 minutos a 180°C. Nunca use óleo quente sem o responsável por perto!</div>
              </div>
            </div>
          </div>

          <div class="alert alert-success d-none" id="pastelCompleteAlert">
            🎉 <strong>Parabéns!</strong> Você aprendeu a fazer pastel com o Bezerra do Nono e ganhou <strong>+10 Estrelas ⭐</strong>!
          </div>
        </div>
      </div>

      <!-- ABA 3: TAREFAS & AUTONOMIA GAMIFICADA -->
      <div class="tab-pane fade" id="tasks" role="tabpanel">
        <div class="card shadow-sm p-4">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="card-title text-success mb-0"><i class="bi bi-check2-square"></i> Tarefas de Autonomia</h4>
            <span class="badge bg-secondary">Total: 6 Atividades</span>
          </div>

          <div class="row g-3">
            <div class="col-md-6">
              <div class="card card-task p-3">
                <div class="d-flex justify-content-between align-items-start">
                  <div>
                    <span class="badge bg-info text-dark mb-1">Higiene & Casa</span>
                    <h6 class="fw-bold mb-1">Escovar os Dentes & Banho Completo</h6>
                    <p class="small text-muted mb-0">Manter a rotina de cuidados diários ao acordar e antes de dormir.</p>
                  </div>
                  <button class="btn btn-sm btn-outline-success" onclick="completeTask(this, 5, 50)">⭐ +5</button>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card card-task p-3">
                <div class="d-flex justify-content-between align-items-start">
                  <div>
                    <span class="badge bg-warning text-dark mb-1">Pets</span>
                    <h6 class="fw-bold mb-1">Alimentar e Trocar Água dos Bichinhos</h6>
                    <p class="small text-muted mb-0">Dar ração ao Bruce Wayne (Shih Tzu) e limpar as tigelas dos gatos.</p>
                  </div>
                  <button class="btn btn-sm btn-outline-success" onclick="completeTask(this, 5, 50)">⭐ +5</button>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card card-task p-3">
                <div class="d-flex justify-content-between align-items-start">
                  <div>
                    <span class="badge bg-primary mb-1">Estudos / Cursinho</span>
                    <h6 class="fw-bold mb-1">Ir ao Cursinho / Faculdade</h6>
                    <p class="small text-muted mb-0">Arrumar a mochila, conferir material e frequentar a aula do dia.</p>
                  </div>
                  <button class="btn btn-sm btn-outline-success" onclick="completeTask(this, 10, 100)">⭐ +10</button>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card card-task p-3">
                <div class="d-flex justify-content-between align-items-start">
                  <div>
                    <span class="badge bg-purple bg-danger mb-1">Psicólogo / Psiquiatra</span>
                    <h6 class="fw-bold mb-1">Registro de Emoções & Tomar Remédio</h6>
                    <p class="small text-muted mb-0">Cumprir prescrição de horários dos remédios e anotar sentimentos do dia.</p>
                  </div>
                  <button class="btn btn-sm btn-outline-success" onclick="completeTask(this, 10, 100)">⭐ +10</button>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card card-task p-3">
                <div class="d-flex justify-content-between align-items-start">
                  <div>
                    <span class="badge bg-success mb-1">Vida Urbana</span>
                    <h6 class="fw-bold mb-1">Fazer Compra Sozinho com Cartão</h6>
                    <p class="small text-muted mb-0">Ir à farmácia/mercado, conferir o valor no visor e digitar a senha com cuidado.</p>
                  </div>
                  <button class="btn btn-sm btn-outline-success" onclick="completeTask(this, 15, 150)">⭐ +15</button>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card card-task p-3">
                <div class="d-flex justify-content-between align-items-start">
                  <div>
                    <span class="badge bg-secondary mb-1">Mobilidade</span>
                    <h6 class="fw-bold mb-1">Pegar Ônibus ou Uber Sozinho</h6>
                    <p class="small text-muted mb-0">Acompanhar o trajeto seguro pelo aplicativo até o destino cadastrado.</p>
                  </div>
                  <button class="btn btn-sm btn-outline-success" onclick="completeTask(this, 15, 150)">⭐ +15</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ABA 4: RASTREAMENTO GPS & TRANSPORTE -->
      <div class="tab-pane fade" id="gps" role="tabpanel">
        <div class="card shadow-sm p-4">
          <h4 class="card-title text-success"><i class="bi bi-geo-alt-fill"></i> Rastreamento em Tempo Real & Mobilidade</h4>
          <p class="text-muted small">Os pais e responsáveis acompanham o trajeto exato até a escola, cursinho, faculdade ou festas.</p>

          <div class="row g-3 mb-3">
            <div class="col-md-4">
              <label class="form-label">Selecionar Destino de Autonomia</label>
              <select class="form-select" id="gpsDestination">
                <option value="Cursinho / Escola Técnica">Cursinho / Preparatório</option>
                <option value="Faculdade / Universidade">Faculdade</option>
                <option value="Mercado / Comércio Local">Mercado / Comércio</option>
                <option value="Festa de Amigos / Lazer">Festa / Lazer</option>
                <option value="Retorno para Casa">Retorno para Casa</option>
              </select>
            </div>
            <div class="col-md-4">
              <label class="form-label">Meio de Transporte</label>
              <select class="form-select">
                <option>🚌 Ônibus Urbano</option>
                <option>🚗 Uber / 99</option>
                <option>🚶 A Pé / Caminhada</option>
              </select>
            </div>
            <div class="col-md-4 d-flex align-items-end">
              <button class="btn btn-primary w-100" onclick="startSimulatedGps()"><i class="bi bi-play-fill"></i> Iniciar Simulação de Rota</button>
            </div>
          </div>

          <div id="map-simulated" class="d-flex align-items-center justify-content-center">
            <div class="user-marker" id="userMarker"></div>
            <div class="text-center text-muted" id="mapStatusText">
              <i class="bi bi-map display-4 d-block mb-1"></i>
              Clique em "Iniciar Simulação" para testar o envio de localização para o responsável.
            </div>
          </div>

          <div class="alert alert-info mt-3 small mb-0">
            🔒 <strong>Proteção de Transporte:</strong> Se o PCD se sentir desconfortável com a abordagem de estranhos, ele pode sentar perto do motorista ou acionar o botão SOS instantâneo.
          </div>
        </div>
      </div>

      <!-- ABA 5: SOS & MODO CRISE -->
      <div class="tab-pane fade" id="sos" role="tabpanel">
        <div class="card shadow-sm p-4 text-center">
          <h4 class="card-title text-danger mb-3"><i class="bi bi-shield-exclamation"></i> Central de Emergência & Suporte Emocional</h4>
          <p class="text-muted">Em caso de perigo, desorientação ou crise de ansiedade, acione o botão abaixo:</p>

          <div class="my-4">
            <button class="btn sos-btn px-5 py-3" onclick="triggerSosEmergency()">
              🚨 BOTÃO DE SOCORRO (S.O.S)
            </button>
          </div>

          <div class="row g-3 text-start mt-2">
            <div class="col-md-4">
              <div class="card p-3 border-danger">
                <h6 class="fw-bold text-danger"><i class="bi bi-telephone-fill"></i> Polícia Militar</h6>
                <p class="small text-muted mb-2">Ligação direta de emergência 190.</p>
                <a href="tel:190" class="btn btn-sm btn-outline-danger w-100">Ligar 190</a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card p-3 border-primary">
                <h6 class="fw-bold text-primary"><i class="bi bi-person-heart"></i> Mão / Responsável</h6>
                <p class="small text-muted mb-2">Envio de SMS e localização GPS.</p>
                <button class="btn btn-sm btn-outline-primary w-100" onclick="alert('Alerta enviado para o telefone da mãe!')">Avisar Responsável</button>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card p-3 border-success">
                <h6 class="fw-bold text-success"><i class="bi bi-flower1"></i> Modo Crise / Calma</h6>
                <p class="small text-muted mb-2">Exercício visual de respiração guiada.</p>
                <button class="btn btn-sm btn-outline-success w-100" onclick="showBreathingExercise()">Iniciar Respiração</button>
              </div>
            </div>
          </div>

          <div class="alert alert-secondary mt-4 d-none text-start" id="breathingBox">
            <h6 class="fw-bold text-dark"><i class="bi bi-activity"></i> Guia de Respiração para Ansiedade</h6>
            <p class="mb-0">Puxe o ar pelo nariz por 4 segundos... Segure por 4 segundos... Solte devagar pela boca por 6 segundos. Você está seguro(a)!</p>
          </div>
        </div>
      </div>

      <!-- ABA 6: RECOMPENSAS & RESGATE PIX -->
      <div class="tab-pane fade" id="rewards" role="tabpanel">
        <div class="card shadow-sm p-4">
          <h4 class="card-title text-success"><i class="bi bi-gift-fill"></i> Loja de Vales & Resgate via PIX</h4>
          <p class="text-muted small">As estrelas acumuladas com tarefas e autonomy podem ser convertidas em prêmios pagos pelo responsável.</p>

          <div class="row g-3">
            <div class="col-md-4">
              <div class="card text-center p-3">
                <div class="display-6 mb-2">💸</div>
                <h6 class="fw-bold">Transferência PIX (R$ 10,00)</h6>
                <p class="text-muted small">Custo: 20 Estrelas ⭐</p>
                <button class="btn btn-sm btn-success" onclick="redeemReward('PIX R$ 10', 20)">Resgatar PIX</button>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card text-center p-3">
                <div class="display-6 mb-2">🍔</div>
                <h6 class="fw-bold">Vale Lanche / iFood</h6>
                <p class="text-muted small">Custo: 30 Estrelas ⭐</p>
                <button class="btn btn-sm btn-success" onclick="redeemReward('Vale Lanche', 30)">Resgatar Vale</button>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card text-center p-3">
                <div class="display-6 mb-2">🎮</div>
                <h6 class="fw-bold">Vale Jogos / Cinema</h6>
                <p class="text-muted small">Custo: 40 Estrelas ⭐</p>
                <button class="btn btn-sm btn-success" onclick="redeemReward('Vale Jogos', 40)">Resgatar Vale</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    let stars = 45;
    let xp = 450;

    function completeTask(btn, addedStars, addedXp) {
      stars += addedStars;
      xp += addedXp;
      document.getElementById('starsCount').innerText = stars;
      document.getElementById('xpCount').innerText = xp;
      
      btn.classList.remove('btn-outline-success');
      btn.classList.add('btn-success');
      btn.innerHTML = '✓ Concluído!';
      btn.disabled = true;
    }

    function checkPastelStep() {
      const p1 = document.getElementById('past1').checked;
      const p2 = document.getElementById('past2').checked;
      const p3 = document.getElementById('past3').checked;
      const p4 = document.getElementById('past4').checked;

      if (p1 && p2 && p3 && p4) {
        document.getElementById('pastelCompleteAlert').classList.remove('d-none');
        stars += 10;
        xp += 100;
        document.getElementById('starsCount').innerText = stars;
      