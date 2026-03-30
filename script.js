function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    document.getElementById('icon-moon').style.display = isDark ? 'none' : 'block';
    document.getElementById('icon-sun').style.display = isDark ? 'block' : 'none';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
    document.getElementById('icon-moon').style.display = 'none';
    document.getElementById('icon-sun').style.display = 'block';
  }

  function enviarForm() {
    const nome = document.getElementById('nome').value.trim();
    const tel = document.getElementById('tel').value.trim();
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const periodo = document.getElementById('periodo').value;
    const problema = document.getElementById('problema').value.trim();

    if (!nome || !tel || !servico || !data) {
      alert('Por favor, preencha pelo menos nome, telefone, serviço e data.');
      return;
    }

    const dataFormatada = new Date(data + 'T12:00:00').toLocaleDateString('pt-BR');

    setTimeout(function() {
      const msg = encodeURIComponent(
        'Olá! Gostária de agendar um serviço pela Sul PC.\n\n' +
        'Nome: ' + nome + '\n' +
        'Serviço: ' + servico + '\n' +
        'Data preferida: ' + dataFormatada + (periodo ? ' - ' + periodo : '') + '\n' +
        'Descrição: ' + (problema || 'Não informada')
      );
      window.open('https://wa.me/5551986586196?text=' + msg, '_blank');
    }, 800);

    document.getElementById('form-content').style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
  }

  const dataInput = document.getElementById('data');
  const hoje = new Date().toISOString().split('T')[0];
  dataInput.setAttribute('min', hoje);