export async function getCategories() {
  const resultados = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const api = await resultados.json();
  return api;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const resultados = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const api = await resultados.json();
  return api;
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
