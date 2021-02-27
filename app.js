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
  },
  created() {
    this.getProdutos();
  },
});
