// ==========================================
// 1. CALCULADORA DE IMPACTO DA AGROFLORESTA
// ==========================================
function calcularImpacto() {
    // Obtém o valor digitado pelo usuário (em hectares)
    const hectares = parseFloat(document.getElementById('hectares').value);
    const resultadoDiv = document.getElementById('resultado-calculo');

    // Validação simples
    if (isNaN(hectares) || hectares <= 0) {
        resultadoDiv.innerHTML = "