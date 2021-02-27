const vm = new Vue({
  el: '#app',
  data: {
    produtos: [],
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
  },
  created() {
    this.getProdutos();
  },
});
