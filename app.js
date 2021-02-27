const vm = new Vue({
  el: '#app',
  data: {
    produtos: [],
    produto: false,
  },
  filters: {
    numeroPreco(valor) {
      return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    },
  },
  methods: {
    getProdutos() {
      fetch('./api/produtos.json')
        .then((resp) => resp.json())
        .then((json) => (this.produtos = json));
    },
    getProduto(id) {
      fetch(`./api/produtos/${id}/dados.json`)
        .then((resp) => resp.json())
        .then((json) => (this.produto = json));
    },
    abrirModal(id) {
      this.getProduto(id);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    fecharModal({ target, currentTarget }) {
      if (target === currentTarget) this.produto = false;
    },
  },
  created() {
    this.getProdutos();
  },
});
